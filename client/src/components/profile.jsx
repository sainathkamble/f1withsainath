import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { LoadingSpinner } from './LoadingSpinner';

export const Profile = () => {
    const [userData, setUserData] = useState({
        username: '',
        email: '',
        fullName: '',
        avatar: ''
    });
    const [isEditing, setIsEditing] = useState(false);
    const [editForm, setEditForm] = useState({
        fullName: '',
        email: '',
        avatar: null
    });
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get('/api/v1/users/current-user', {
                    withCredentials: true
                });
                setUserData(response.data.data);
                setEditForm({
                    fullName: response.data.data.fullName,
                    email: response.data.data.email,
                    avatar: null
                });
            } catch (error) {
                setError('Failed to fetch user data');
                navigate('/login');
            } finally {
                setIsLoading(false);
            }
        };

        fetchUserData();
    }, [navigate]);

    const handleLogout = async () => {
        try {
            await axios.post('/api/v1/users/logout', {}, {
                withCredentials: true
            });
            localStorage.removeItem('userEmail');
            navigate('/');
        } catch (error) {
            setError('Logout failed');
        }
    };

    const handleEditProfile = () => {
        setIsEditing(true);
        setError('');
        setSuccessMessage('');
    };

    const handleCancelEdit = () => {
        setIsEditing(false);
        setEditForm({
            fullName: userData.fullName,
            email: userData.email,
            avatar: null
        });
        setError('');
        setSuccessMessage('');
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditForm(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        setEditForm(prev => ({
            ...prev,
            avatar: e.target.files[0]
        }));
    };

    const handleSubmitEdit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        const formData = new FormData();
        formData.append('fullName', editForm.fullName);
        formData.append('email', editForm.email);
        if (editForm.avatar) {
            formData.append('avatar', editForm.avatar);
        }

        try {
            const response = await axios.patch('/api/v1/users/avatar', 
                formData,
                {
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            );
            
            setUserData(prev => ({
                ...prev,
                fullName: editForm.fullName,
                email: editForm.email,
                avatar: response.data.data.avatar
            }));
            
            setSuccessMessage('Profile updated successfully');
            setIsEditing(false);
            
            setTimeout(() => {
                setSuccessMessage('');
            }, 3000);
        } catch (error) {
            setError(error.response?.data?.message || 'Failed to update profile');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isLoading) {
        return (
            <div className="min-h-screen bg-[#121212] flex items-center justify-center">
                <LoadingSpinner />
            </div>
        );
    }

    if (error) {
        return <div className="text-red-500 text-center mt-4">{error}</div>;
    }

    return (
        <div className="min-h-screen bg-[#121212] text-[#f5f5f5] py-8">
            <div className="max-w-2xl mx-auto bg-[#1a1a1a] rounded-lg shadow-lg p-8">
                {successMessage && (
                    <div className="mb-4 p-3 bg-green-600 text-white rounded-lg text-center">
                        {successMessage}
                    </div>
                )}
                <div className="flex flex-col items-center space-y-6">
                    {/* Avatar Section */}
                    <div className="relative">
                        <img
                            src={userData.avatar}
                            alt="Profile Avatar"
                            className="w-32 h-32 rounded-full object-cover border-4 border-[#b50000]"
                        />
                    </div>

                    {/* User Info Section */}
                    {!isEditing ? (
                        <div className="w-full space-y-4">
                            <div className="bg-[#2a2a2a] p-4 rounded-lg">
                                <h2 className="text-xl font-semibold mb-2">Full Name</h2>
                                <p className="text-[#f5f5f5]">{userData.fullName}</p>
                            </div>

                            <div className="bg-[#2a2a2a] p-4 rounded-lg">
                                <h2 className="text-xl font-semibold mb-2">Username</h2>
                                <p className="text-[#f5f5f5]">{userData.username}</p>
                            </div>

                            <div className="bg-[#2a2a2a] p-4 rounded-lg">
                                <h2 className="text-xl font-semibold mb-2">Email</h2>
                                <p className="text-[#f5f5f5]">{userData.email}</p>
                            </div>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmitEdit} className="w-full space-y-4">
                            <div className="bg-[#2a2a2a] p-4 rounded-lg">
                                <h2 className="text-xl font-semibold mb-2">Full Name</h2>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={editForm.fullName}
                                    onChange={handleInputChange}
                                    className="w-full p-2 bg-[#1a1a1a] text-[#f5f5f5] rounded border border-[#3a3a3a] focus:border-[#b50000] focus:outline-none"
                                    required
                                />
                            </div>

                            <div className="bg-[#2a2a2a] p-4 rounded-lg">
                                <h2 className="text-xl font-semibold mb-2">Email</h2>
                                <input
                                    type="email"
                                    name="email"
                                    value={editForm.email}
                                    onChange={handleInputChange}
                                    className="w-full p-2 bg-[#1a1a1a] text-[#f5f5f5] rounded border border-[#3a3a3a] focus:border-[#b50000] focus:outline-none"
                                    required
                                />
                            </div>

                            <div className="bg-[#2a2a2a] p-4 rounded-lg">
                                <h2 className="text-xl font-semibold mb-2">Avatar</h2>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    className="w-full p-2 bg-[#1a1a1a] text-[#f5f5f5] rounded border border-[#3a3a3a] focus:border-[#b50000] focus:outline-none"
                                />
                            </div>

                            <div className="flex space-x-4 justify-center mt-6">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="px-6 py-2 bg-[#b50000] text-white rounded-lg hover:bg-[#8c0000] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? <LoadingSpinner /> : 'Save Changes'}
                                </button>
                                <button
                                    type="button"
                                    onClick={handleCancelEdit}
                                    disabled={isSubmitting}
                                    className="px-6 py-2 bg-[#2a2a2a] text-white rounded-lg hover:bg-[#3a3a3a] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    )}

                    {/* Action Buttons */}
                    {!isEditing && (
                        <div className="flex space-x-4 w-full justify-center mt-6">
                            <button
                                onClick={handleEditProfile}
                                className="px-6 py-2 bg-[#b50000] text-white rounded-lg hover:bg-[#8c0000] transition-colors duration-300"
                            >
                                Edit Profile
                            </button>
                            <button
                                onClick={handleLogout}
                                className="px-6 py-2 bg-[#2a2a2a] text-white rounded-lg hover:bg-[#3a3a3a] transition-colors duration-300"
                            >
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}; 