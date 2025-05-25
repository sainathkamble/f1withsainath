import React, { useState, useEffect } from 'react';
import { Navbar } from "./navbar.jsx";
import { Footer } from "./footer.jsx";
import { useSelector, useDispatch } from 'react-redux';
import { fetchSessionData } from '../redux/sessionSlice';
import { fetchGrandPrixData } from '../redux/grandPrixSlice';
import { LoadingSpinner } from './LoadingSpinner';
import axios from 'axios';

export const Schedule = () => {
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
        <div className="h-screen flex flex-col bg-[#0a0a0a]">
            <Navbar />
            <div className="h-[70vh] flex items-center justify-center p-4">
                <div className="w-full max-w-4xl bg-[#1a1a1a] rounded-2xl shadow-xl border border-[#2a2a2a]">
                    <div className="p-4">
                        <h2 className="text-xl font-bold text-[#f5f5f5] mb-3 flex items-center">
                            <svg className="w-5 h-5 mr-2 text-[#b50000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            Race Schedule
                        </h2>
                        
                        {loading ? (
                            <div className="flex justify-center items-center h-32">
                                <LoadingSpinner />
                            </div>
                        ) : error ? (
                            <div className="text-red-500 text-center p-3">
                                Error: {error}
                            </div>
                        ) : sessions.length > 0 ? (
                            <div className="space-y-3">
                                {/* Common Information */}
                                <div className="bg-[#2a2a2a] rounded-lg p-3">
                                    <h3 className="text-lg font-semibold text-[#f5f5f5] mb-2">
                                        {grandPrix?.meeting_official_name}
                                    </h3>
                                    <div className="flex gap-4">
                                        <p className="text-[#f5f5f5]">
                                            <span className="text-[#b50000] font-medium">Circuit:</span> {sessions[0].circuit_short_name}
                                        </p>
                                        <p className="text-[#f5f5f5]">
                                            <span className="text-[#b50000] font-medium">Country:</span> {sessions[0].country_name}
                                        </p>
                                    </div>
                                </div>

                                {/* Sessions List */}
                                <div className="bg-[#2a2a2a] rounded-lg p-3">
                                    <h3 className="text-base font-semibold text-[#f5f5f5] mb-2">Session Schedule</h3>
                                    <div className="space-y-2">
                                        {sessions.map((session, index) => (
                                            <div key={index} className="flex justify-between items-center text-[#f5f5f5] py-1 border-b border-[#3a3a3a] last:border-0">
                                                <span className="font-medium text-sm">{session.session_name}</span>
                                                <span className="text-sm">{formatDateToIST(session.date_start)} - {formatDateToIST(session.date_end)}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="text-[#f5f5f5] text-center p-3">
                                No session data available
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

