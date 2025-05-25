// import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector , useDispatch } from 'react-redux';
import { fetchSessionData } from "../redux/sessionSlice.js";

export const CarData = () => {
    const [carData, setCarData] = useState({});
    const [drivers, setDrivers] = useState([]);

    const dispatch = useDispatch();
    const { session, loading, error } = useSelector((state) => state.session);
    
    useEffect(() => {
      dispatch(fetchSessionData());
    },[dispatch])

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

    // Fetch car data for all drivers
    useEffect(() => {
      if(!sessionKey || drivers.length === 0) return;
      
      const fetchData = async () => {
        try{
          const now = new Date('2023-09-15T13:08:19.923000+00:00');
          const halfSecondAgo = new Date(now.getTime() - 500);
          const formatDate = (date) => date.toISOString();
          
          // Create an object to store all drivers' data
          const allDriversData = {};
          
          // Fetch data for each driver
          for (const driver of drivers) {
            const driverNumber = driver.driver_number;
            const response = await axios.get(`https://api.openf1.org/v1/car_data?session_key=${sessionKey}&driver_number=${driverNumber}&date>${formatDate(halfSecondAgo)}&date<${formatDate(now)}`);
            
            if (response.data.length > 0) {
              allDriversData[driverNumber] = response.data[response.data.length - 1];
            }
          }
          
          setCarData(allDriversData);
        } catch(err){
          console.error("Error fetching car data:", err);
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
        <h1 className="text-3xl font-semibold text-black">Car Data</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {drivers.map(driver => (
            <div key={driver.driver_number} className="border p-4 rounded-lg shadow">
              <h2 className="text-xl font-bold">{driver.full_name} (#{driver.driver_number})</h2>
              {carData[driver.driver_number] ? (
                <div className="mt-2">
                  <p>Speed: {carData[driver.driver_number].speed || 'N/A'} km/h</p>
                  <p>Throttle: {carData[driver.driver_number].throttle || 'N/A'}%</p>
                  <p>Brake: {carData[driver.driver_number].brake || 'N/A'}%</p>
                  <p>Gear: {carData[driver.driver_number].gear || 'N/A'}</p>
                  <p>DRS: {carData[driver.driver_number].drs || 'N/A'}</p>
                </div>
              ) : (
                <p className="mt-2">No data available</p>
              )}
            </div>
          ))}
        </div>
      </div>
    );
}
