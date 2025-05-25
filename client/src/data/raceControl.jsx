import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector , useDispatch } from 'react-redux';
import { fetchSessionData } from "../redux/sessionSlice.js";
export const RaceControlData = () => {
    const [raceControlData, setRaceControlData] = useState([]);

    const dispatch = useDispatch();
    const {session, loading, error} = useSelector((state) => state.session);

    useEffect(() => {
      dispatch(fetchSessionData());
    }, [dispatch])

    const sessionKey = session?.session_key;

    useEffect(() => {
      if(!sessionKey) return;
      const fetchData = async () => {
        try{
          const response = await axios.get(`https://api.openf1.org/v1/race_control?session_key=${sessionKey}`);
          setRaceControlData(response.data[response.data.length - 1]);

        }catch(err){
          console.error(err);
        }
      };
      fetchData();

      const intervalId = setInterval(fetchData, 10000);
    return () => clearInterval(intervalId);

  }, [sessionKey]);

  if(loading) return <p className="text-[#f5f5f5]">Loading data...</p>;
  if(error) return <p className="text-[#f5f5f5]">Error: {error}</p>;

  return (
    <div className = "h-auto w-full text-[#f5f5f5] text-sm py-1">
      <p>{raceControlData.message}</p>
    </div>
  )
}