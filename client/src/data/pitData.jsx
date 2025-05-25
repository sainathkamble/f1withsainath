import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSessionData } from '../redux/sessionSlice.js';

export const PitData = () => {
    const [pitData, setPitData] = useState({});
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
          // Create an object to store all drivers' pit data
          const allDriversPitData = {};
          
          // Fetch pit data for each driver
          for (const driver of drivers) {
            const driverNumber = driver.driver_number;
            const response = await axios.get(`https://api.openf1.org/v1/pit?session_key=${sessionKey}&driver_number=${driverNumber}`);
            
            if (response.data && response.data.length > 0) {
              allDriversPitData[driverNumber] = response.data[response.data.length - 1];
            }
          }
          
          setPitData(allDriversPitData);
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
        <h1 className="text-3xl font-semibold text-black mb-4">Pit Data</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {drivers.map(driver => (
            <div key={driver.driver_number} className="border p-4 rounded-lg shadow">
              <h2 className="text-xl font-bold">{driver.full_name} (#{driver.driver_number})</h2>
              {pitData[driver.driver_number] ? (
                <div className="mt-2">
                  <p>Pit In Time: {pitData[driver.driver_number].pit_in_time || 'N/A'}</p>
                  <p>Pit Out Time: {pitData[driver.driver_number].pit_out_time || 'N/A'}</p>
                  <p>Pit Duration: {pitData[driver.driver_number].pit_duration ? 
                    `${pitData[driver.driver_number].pit_duration.toFixed(3)}s` : 'N/A'}</p>
                  <p>Pit Stop Number: {pitData[driver.driver_number].pit_stop_number || 'N/A'}</p>
                  <p>Pit Lane Time: {pitData[driver.driver_number].pit_lane_time ? 
                    `${pitData[driver.driver_number].pit_lane_time.toFixed(3)}s` : 'N/A'}</p>
                  <p>Pit Lane Duration: {pitData[driver.driver_number].pit_lane_duration ? 
                    `${pitData[driver.driver_number].pit_lane_duration.toFixed(3)}s` : 'N/A'}</p>
                </div>
              ) : (
                <p className="mt-2">No pit data available</p>
              )}
            </div>
          ))}
        </div>
      </div>
    );
}