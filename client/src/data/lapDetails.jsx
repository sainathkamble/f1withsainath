import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector , useDispatch } from 'react-redux';
import { fetchSessionData} from "../redux/sessionSlice.js";

export const LapDetails = () => {
    const [lapDetails, setLapDetails] = useState({});
    const [drivers, setDrivers] = useState([]);

    const dispatch = useDispatch();
    const { session, loading, error } = useSelector((state) => state.session);

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
          // Create an object to store all drivers' lap details
          const allDriversLapDetails = {};
          
          // Fetch lap details for each driver
          for (const driver of drivers) {
            const driverNumber = driver.driver_number;
            const response = await axios.get(`https://api.openf1.org/v1/laps?session_key=${sessionKey}&driver_number=${driverNumber}`);
            
            if (response.data && response.data.length > 0) {
              allDriversLapDetails[driverNumber] = response.data[response.data.length - 1];
            }
          }
          
          setLapDetails(allDriversLapDetails);
        }catch(err){
          console.error(err);
        }
      };
      fetchData();

      const intervalId = setInterval(fetchData, 10000);
      return () => clearInterval(intervalId);
    
    }, [sessionKey, drivers]);

    if(loading) return <p>Loading data...</p>;
    if(error) return <p>Error: {error}</p>;

    return (
      <div>
        <h1 className="text-3xl font-semibold text-black mb-4">Lap Details</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {drivers.map(driver => (
            <div key={driver.driver_number} className="border p-4 rounded-lg shadow">
              <h2 className="text-xl font-bold">{driver.full_name} (#{driver.driver_number})</h2>
              {lapDetails[driver.driver_number] ? (
                <div className="mt-2">
                  <p>Lap Number: {lapDetails[driver.driver_number].lap_number || 'N/A'}</p>
                  <p>Lap Time: {lapDetails[driver.driver_number].lap_duration ? 
                    `${lapDetails[driver.driver_number].lap_duration.toFixed(3)}s` : 'N/A'}</p>
                  <p>Pit Out Time: {lapDetails[driver.driver_number].pit_out_time || 'N/A'}</p>
                  <p>Pit In Time: {lapDetails[driver.driver_number].pit_in_time || 'N/A'}</p>
                  <p>Stopped: {lapDetails[driver.driver_number].stopped ? 'Yes' : 'No'}</p>
                  <p>Deleted: {lapDetails[driver.driver_number].deleted ? 'Yes' : 'No'}</p>
                </div>
              ) : (
                <p className="mt-2">No lap data available</p>
              )}
            </div>
          ))}
        </div>
      </div>
    );
}