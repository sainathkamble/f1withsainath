import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector , useDispatch } from 'react-redux';
import { fetchSessionData } from '../redux/sessionSlice.js';

export const TeamRadio = () => {
    const [teamRadio, setTeamRadio] = useState({});
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
          // Create an object to store all drivers' team radio data
          const allDriversTeamRadio = {};
          
          // Fetch team radio data for each driver
          for (const driver of drivers) {
            const driverNumber = driver.driver_number;
            const response = await axios.get(`https://api.openf1.org/v1/team_radio?session_key=${sessionKey}&driver_number=${driverNumber}`);
            
            if (response.data && response.data.length > 0) {
              allDriversTeamRadio[driverNumber] = response.data[response.data.length - 1];
            }
          }
          
          setTeamRadio(allDriversTeamRadio);
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
      <div className = "h-1/4 w-full">
        <p className="text-md text-[#f5f5f5]">Team Radio: </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {drivers.map(driver => (
            <div key={driver.driver_number} className="border p-4 rounded-lg shadow">
              <h2 className="text-xl font-bold">{driver.full_name} (#{driver.driver_number})</h2>
              {teamRadio[driver.driver_number] ? (
                <div className="mt-2">
                  <p>Message: {teamRadio[driver.driver_number].message || 'N/A'}</p>
                  <p>Message Type: {teamRadio[driver.driver_number].message_type || 'N/A'}</p>
                  <p>Timestamp: {teamRadio[driver.driver_number].timestamp || 'N/A'}</p>
                  <p>Date: {teamRadio[driver.driver_number].date || 'N/A'}</p>
                  {teamRadio[driver.driver_number].url && (
                    <div className="mt-2">
                      <a 
                        href={teamRadio[driver.driver_number].url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline"
                      >
                        Listen to Radio Message
                      </a>
                    </div>
                  )}
                </div>
              ) : (
                <p className="mt-2">No team radio data available</p>
              )}
            </div>
          ))}
        </div>
      </div>
    );
}