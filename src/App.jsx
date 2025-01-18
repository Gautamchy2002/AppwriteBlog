import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import authService from './appwrite/auth';
import { login, logout } from './store/authSlice';
import { Footer, Header } from './components';
import { Outlet } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch current user from authService
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          console.log('User data:', userData); // Debugging: Log user data
          dispatch(login({ userData }));
        } else {
          console.log('No user data found'); // Debugging: Log if no user data
          dispatch(logout());
        }
      })
      .catch((error) => {
        console.error('Error fetching user data:', error); // Debugging: Log errors
      })
      .finally(() => setLoading(false));
  }, [dispatch]);

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        <main>
          {/* Placeholder for routing children */}
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
