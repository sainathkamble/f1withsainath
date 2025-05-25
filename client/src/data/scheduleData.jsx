import React from 'react';
import { useState, useEffect } from 'react';
//import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGrandPrixData } from '../redux/grandPrixSlice';

export const ScheduleData = () => {
    //const [schedule, setSchedule] = useState([]);

    const dispatch = useDispatch();
    const { grandPrix, loading, error } = useSelector((state) => state.grandPrix);

    useEffect(() => {
      dispatch(fetchGrandPrixData());
    }, [dispatch]);

    if(loading) return <p>Loading data...</p>;
    if(error) return <p>Error: {error}</p>;

  return (
    <div>
        <h1 className="text-3xl font-semibold text-black">2025 Schedule</h1>
        <p>Grand Prix: {grandPrix?.meeting_official_name}</p>
        <p>Country: {grandPrix?.country_name}</p>
        <p>Circuit: {grandPrix?.circuit_short_name}</p>
        <p>Date: {grandPrix?.date_start}</p>
    </div>
  )
}