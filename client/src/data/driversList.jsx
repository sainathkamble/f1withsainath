import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSessionData } from '../redux/sessionSlice.js';

const MAX_RETRIES = 3;
const RETRY_DELAY = 2000; // 2 seconds

export const useDriversList = () => {
  const [driversList, setDriversList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { session } = useSelector((state) => state.session);

  useEffect(() => {
    dispatch(fetchSessionData());
  }, [dispatch]);

  const sessionKey = session?.session_key;

  useEffect(() => {
    if (!sessionKey) return;

    let retryCount = 0;
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await axios.get(`https://api.openf1.org/v1/drivers?session_key=${sessionKey}`);
        setDriversList(response.data);
        setIsLoading(false);
      } catch (err) {
        console.error('Error fetching drivers:', err);
        
        if (err.response?.status === 429 && retryCount < MAX_RETRIES) {
          retryCount++;
          setError(`Rate limit exceeded. Retrying in ${RETRY_DELAY/1000} seconds... (Attempt ${retryCount}/${MAX_RETRIES})`);
          setTimeout(fetchData, RETRY_DELAY);
        } else {
          setError(err.response?.data?.message || 'Failed to fetch drivers data. Please try again later.');
          setIsLoading(false);
        }
      }
    };

    fetchData();

    // Cleanup function
    return () => {
      retryCount = MAX_RETRIES; // Prevent retries after unmount
    };
  }, [sessionKey]);

  return { driversList, isLoading, error };
};
