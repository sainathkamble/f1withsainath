import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector , useDispatch } from 'react-redux';
import { fetchSessionData } from '../redux/sessionSlice.js';

//Available during race only
export const Intervals = () => {
    const [interval, setInterval] = useState([]);
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
      if (!sessionKey || drivers.length === 0) return;

      const fetchData = async () => {
        try {
          const allDriversStandings = {};
          const positionPromises = drivers.map(async (driver) => {
            const response = await axios.get(`https://api.openf1.org/v1/position?session_key=${sessionKey}&driver_number=${driver.driver_number}`);
            if (response.data && response.data.length > 0) {
              allDriversStandings[driver.driver_number] = response.data[response.data.length - 1];
            }
          });

          await Promise.all(positionPromises);

          // Now fetch the interval data to get the gap to the leader
          const intervalResponse = await axios.get(`https://api.openf1.org/v1/intervals?session_key=${sessionKey}`);
          const intervals = intervalResponse.data;

          // Calculate gaps based on the interval data
          const leaderTime = intervals[0]?.gap_to_leader || 0; // Assuming the first driver is the leader
          Object.keys(allDriversStandings).forEach(driverNumber => {
            const driverData = allDriversStandings[driverNumber];
            if (driverData) {
              driverData.gap_to_leader = driverData.gap_to_leader || (driverData.time - leaderTime);
            }
          });

          setInterval(intervals);
          setError(null);
        } catch (err) {
          console.error("Error fetching standings:", err);
        }
      };

      fetchData();
      const intervalId = setInterval(fetchData, 3000);

      return () => clearInterval(intervalId);
    }, [sessionKey, drivers]);

    if(loading) return <p>Loading data...</p>;
    if(error) return <p>Error: {error}</p>;

    // Process and sort the interval data
    const processIntervalData = () => {
      // Ensure interval is an array
      const intervalArray = Array.isArray(interval) ? interval : [];
      if (intervalArray.length === 0) return [];
      
      // Create a map of driver data for easy lookup
      const driverMap = {};
      drivers.forEach(driver => {
        driverMap[driver.driver_number] = driver;
      });
      
      // Process interval data
      const processedData = intervalArray.map((item) => {
        const driver = driverMap[item.driver_number] || { full_name: `Driver ${item.driver_number}` };
        return {
          ...item,
          driver_name: driver.full_name,
          gap_to_leader: item.gap_to_leader || 0
        };
      });
      
      // Sort by gap to leader (ascending)
      return processedData.sort((a, b) => {
        // Handle cases where gap_to_leader might be null or undefined
        const gapA = a.gap_to_leader !== null && a.gap_to_leader !== undefined ? a.gap_to_leader : Infinity;
        const gapB = b.gap_to_leader !== null && b.gap_to_leader !== undefined ? b.gap_to_leader : Infinity;
        return gapA - gapB;
      });
    };

    const sortedIntervals = processIntervalData();

    return (
      <div>
        <h1 className="text-3xl font-semibold text-black mb-4">Intervals</h1>
        {sortedIntervals.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 border-b text-left">Position</th>
                  <th className="py-2 px-4 border-b text-left">Driver</th>
                  <th className="py-2 px-4 border-b text-left">Number</th>
                  <th className="py-2 px-4 border-b text-left">Gap to Leader</th>
                  <th className="py-2 px-4 border-b text-left">Interval to Car Ahead</th>
                </tr>
              </thead>
              <tbody>
                {sortedIntervals.map((item, index) => (
                  <tr key={item.driver_number} className={`border-b border-[#3a3a3a] hover:bg-[#333] transition-colors duration-200 ${index % 2 === 0 ? 'bg-[#2a2a2a]' : 'bg-[#252525]'}`}>
                    <td className="py-3 px-4 text-[#f5f5f5]">{index + 1}</td>
                    <td className="py-3 px-4 text-[#f5f5f5]">{item.driver_name}</td>
                    <td className="py-3 px-4 text-[#f5f5f5]">{item.driver_number}</td>
                    <td className="py-3 px-4 text-[#f5f5f5]">
                      {item.gap_to_leader !== undefined ? `${item.gap_to_leader.toFixed(3)}s` : 'N/A'}
                    </td>
                    <td className="py-3 px-4 text-[#f5f5f5]">{item.interval_to_car_ahead !== null && item.interval_to_car_ahead !== undefined ? `${item.interval_to_car_ahead.toFixed(3)}s` : '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p>No interval data available</p>
        )}
      </div>
    );
}