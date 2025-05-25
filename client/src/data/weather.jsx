import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector , useDispatch } from 'react-redux';
import { fetchSessionData } from '../redux/sessionSlice.js';

export const WeatherData = () => {
    const [weatherData, setWeatherData] = useState({});

    const dispatch = useDispatch();
    const {session, loading, error} = useSelector((state) => state.session);

    useEffect(() => {
      dispatch(fetchSessionData());
    }, [dispatch]);

    const sessionKey = session?.session_key;

    useEffect(() => {
      if(!sessionKey) return;
      const fetchData = async () => {
        try{
          const response = await axios.get(`https://api.openf1.org/v1/weather?session_key=${sessionKey}`);
          setWeatherData(response.data[response.data.length - 1]);
    
        }catch(err){
          console.error(err);
        }
      };
      fetchData();

      const intervalId = setInterval(fetchData, 10000);
    return () => clearInterval(intervalId);
    
  }, [sessionKey]);

  if(loading) return <p className = "text-[#f5f5f5]">Loading data...</p>;
  if(error) return <p className = "text-[#f5f5f5]">Error: {error}</p>;

  return (
    <div className = "h-auto w-full text-sm text-[#f5f5f5] grid grid-cols-1 py-1" >
      <p>Air Temperature - {weatherData.air_temperature} C</p> 
      <p>Humidity - {weatherData.humidity} %</p>
      <p>Track Temperature - {weatherData.track_temperature} C</p> 
      <p>Rainfall - {weatherData.rainfall} %</p> 
      <p>Wind Speed - {weatherData.wind_speed} Km/h</p>
    </div>
  )
}