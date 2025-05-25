import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGrandPrixData } from '../redux/grandPrixSlice';

export const SessionData = () => {
  const [sessions, setSessions] = useState([]);

  const dispatch = useDispatch();

  const { grandPrix, loading, error } = useSelector((state) => state.grandPrix);

  useEffect(() => {
    dispatch(fetchGrandPrixData());
  }, [dispatch]);

  const meetingKey = grandPrix?.meeting_key;

  useEffect(() => {
    if (!meetingKey) return;
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.openf1.org/v1/sessions?year=2025&meeting_key=${meetingKey}`);
        setSessions(response.data[response.data.length - 1]);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [meetingKey]);

  if (loading) return <p className="text-[#f5f5f5]">Loading Grand Prix...</p>;
  if (error) return <p className="text-[#f5f5f5]">Error: {error}</p>;

  const formatDateToIST = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
  };

  return (
    <div className="h-auto w-full text-[#f5f5f5] grid grid-rows-2 py-1">
      <p className="flex justify-center items-center text-xl">{sessions.location} Grand Prix</p>
        <p className="flex justify-center items-center text-md">{sessions.session_name}  at  {formatDateToIST(sessions.date_start)} - {formatDateToIST(sessions.date_end)}</p>
    </div>
  );
}