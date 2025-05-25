import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector , useDispatch } from 'react-redux';
import { fetchSessionData } from '../redux/sessionSlice.js';

export const Stints = () => {
    const [stints, setStintsData] = useState({});
    const [drivers, setDrivers] = useState([]);

    const dispatch = useDispatch();
    const {session, loading, error} = useSelector((state) => state.session);

    useEffect(() => {
      dispatch(fetchSessionData());
    }, [dispatch]);

    const sessionKey = session?.session_key;

    // Fetch list of drivers
    useEffect(() => {
      if(!sessionKey) return;
      const fetchDrivers = async () => {
        try {
          const response = await axios.get(`https://api.openf1.org/v1/drivers?session_key=${sessionKey}`);
          setDrivers(response.data);
        } catch (err) {
          console.error("Error fetching drivers:", err);
        }
      };
      fetchDrivers();
    }, [sessionKey]);

    useEffect(() => {
      if(!sessionKey || drivers.length === 0) return;
      const fetchData = async () => {
        try{
          // Create an object to store all drivers' stint data
          const allDriversStints = {};
          
          // Fetch stint data for each driver
          for (const driver of drivers) {
            const driverNumber = driver.driver_number;
            const response = await axios.get(`https://api.openf1.org/v1/stints?session_key=${sessionKey}&driver_number=${driverNumber}`);
            
            if (response.data && response.data.length > 0) {
              allDriversStints[driverNumber] = response.data[response.data.length - 1];
            }
          }
          
          setStintsData(allDriversStints);
        }catch(err){
          console.error(err);
        }
      };
      fetchData();

      const intervalId = setInterval(fetchData, 10000);
      return () => clearInterval(intervalId);
    
    }, [sessionKey, drivers])

    if(loading) return <p>Loading data...</p>;
    if(error) return <p>Error: {error}</p>;

    return (
      <div>
        <h1 className="text-3xl font-semibold text-black mb-4">Driver Stints</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {drivers.map(driver => (
            <div key={driver.driver_number} className="border p-4 rounded-lg shadow">
              <h2 className="text-xl font-bold">{driver.full_name} (#{driver.driver_number})</h2>
              {stints[driver.driver_number] ? (
                <div className="mt-2">
                  <p>Stint Number: {stints[driver.driver_number].stint_number || 'N/A'}</p>
                  <p>Compound: {stints[driver.driver_number].compound || 'N/A'}</p>
                  <p>Tyre Age: {stints[driver.driver_number].tyre_age || 'N/A'}</p>
                  <p>Lap Count: {stints[driver.driver_number].lap_count || 'N/A'}</p>
                  <p>Lap Start: {stints[driver.driver_number].lap_start || 'N/A'}</p>
                  <p>Lap End: {stints[driver.driver_number].lap_end || 'N/A'}</p>
                  <p>Duration: {stints[driver.driver_number].duration ? 
                    `${stints[driver.driver_number].duration.toFixed(3)}s` : 'N/A'}</p>
                </div>
              ) : (
                <p className="mt-2">No stint data available</p>
              )}
            </div>
          ))}
        </div>
      </div>
    );
}