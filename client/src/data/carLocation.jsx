import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector , useDispatch } from 'react-redux';
import { fetchSessionData } from "../redux/sessionSlice.js";

export const CarLocation = () => {
    const [carLocation, setCarLocation] = useState([]);

    const dispatch = useDispatch();
    const { session, loading, error } = useSelector((state) => state.session);

    useEffect(() => {
      dispatch(fetchSessionData());
    }, [dispatch]);

    const sessionKey = session?.session_key;

    useEffect(() => {
      if(!sessionKey) return;
      const fetchData = async () => {
        try{
          const now = new Date();
          const halfSecondAgo = new Date(now.getTime() - 300);
          const formatDate = (date) => date.toISOString();

          const response = await axios.get(`https://api.openf1.org/v1/location?session_key=${sessionKey}&date>${formatDate(halfSecondAgo)}&date<${formatDate(now)}`);
          setCarLocation(response.data);
          
        }catch(err){
          console.error(err);
        }
      };
      fetchData();

      const intervalId = setInterval(fetchData, 3000);
    return () => clearInterval(intervalId);

  }, [sessionKey]);

  if(loading) return <p>Loading data...</p>;
  if(error) return <p>Error: {error}</p>;

  return (
    <div>
        <h1 className="text-3xl font-semibold text-black">Car Location</h1>
        <ul>{JSON.stringify(carLocation)}</ul>
    </div>
  )
}