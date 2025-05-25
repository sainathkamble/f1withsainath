import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSessionData } from '../redux/sessionSlice';
import { fetchGrandPrixData } from '../redux/grandPrixSlice';
import { LoadingSpinner } from './LoadingSpinner';
import { SessionData } from '../data/sessionData';
import { WeatherData } from '../data/weather';
import { RaceControlData } from '../data/raceControl';
import { LiveStandings } from '../data/liveStandings';
import axios from 'axios';

export const GrandPrix = () => {
    const [sessions, setSessions] = useState([]);
    const dispatch = useDispatch();
    const { session, loading: sessionLoading, error: sessionError } = useSelector((state) => state.session);
    const { grandPrix, loading: grandPrixLoading, error: grandPrixError } = useSelector((state) => state.grandPrix);

    useEffect(() => {
        dispatch(fetchSessionData());
        dispatch(fetchGrandPrixData());
    }, [dispatch]);

    const meetingKey = session?.meeting_key;

    useEffect(() => {
        if (!meetingKey) return;
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://api.openf1.org/v1/sessions?year=2025&meeting_key=${meetingKey}`);
                setSessions(response.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchData();
    }, [meetingKey]);

    const formatDateToIST = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleString('en-IN', {
            timeZone: 'Asia/Kolkata',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        });
    };

    const loading = sessionLoading || grandPrixLoading;
    const error = sessionError || grandPrixError;

    return (
        <div className="h-[90vh] bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a]">
            <div className="flex h-full">
                {/* Left Sidebar */}
                <div className="w-96 bg-[#1a1a1a]/80 backdrop-blur-sm border-r border-[#2a2a2a] p-6 flex flex-col h-full">
                    {/* Live Stream - Fixed at top */}
                    <div className="mb-8 transform hover:scale-[1.02] transition-all duration-300">
                        <h2 className="text-2xl font-bold text-[#f5f5f5] mb-4 flex items-center">
                            <svg className="w-6 h-6 mr-2 text-[#b50000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                            Live Stream
                        </h2>
                        <div className="bg-[#2a2a2a] rounded-xl p-4 shadow-lg hover:shadow-[#b50000]/10 transition-all duration-300">
                            <div className="aspect-video bg-black/50 rounded-lg flex items-center justify-center border border-[#3a3a3a]">
                               <iframe className="bg-cover" src="https://embedrun.store/embed/8e1859af-389f-11f0-afb1-ecf4bbdafde4"></iframe>
                            </div>
                        </div>
                    </div>

                    {/* Scrollable Content */}
                    <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                        {/* Session Data */}
                        <div className="mb-8 transform hover:scale-[1.02] transition-all duration-300">
                            <h2 className="text-2xl font-bold text-[#f5f5f5] mb-4 flex items-center">
                                <svg className="w-6 h-6 mr-2 text-[#b50000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                                Session Info
                            </h2>
                            <div className="bg-[#2a2a2a] rounded-xl p-4 shadow-lg hover:shadow-[#b50000]/10 transition-all duration-300">
                                <SessionData />
                            </div>
                        </div>

                        {/* Weather Data */}
                        <div className="mb-8 transform hover:scale-[1.02] transition-all duration-300">
                            <h2 className="text-2xl font-bold text-[#f5f5f5] mb-4 flex items-center">
                                <svg className="w-6 h-6 mr-2 text-[#b50000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                                </svg>
                                Weather
                            </h2>
                            <div className="bg-[#2a2a2a] rounded-xl p-4 shadow-lg hover:shadow-[#b50000]/10 transition-all duration-300">
                                <WeatherData />
                            </div>
                        </div>

                        {/* Race Control */}
                        <div className="mb-8 transform hover:scale-[1.02] transition-all duration-300">
                            <h2 className="text-2xl font-bold text-[#f5f5f5] mb-4 flex items-center">
                                <svg className="w-6 h-6 mr-2 text-[#b50000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                                </svg>
                                Race Control
                            </h2>
                            <div className="bg-[#2a2a2a] rounded-xl p-4 shadow-lg hover:shadow-[#b50000]/10 transition-all duration-300">
                                <RaceControlData />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 p-8 overflow-y-auto custom-scrollbar">
                  {/* Live standings*/}
                  <LiveStandings />
                </div>
            </div>
        </div>
    );
};