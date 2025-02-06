import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import axios from 'axios';
import Profile from './components/Profile';
import settings from './config/settings';

const App = () => {
  const handleLogin = async (username, password) => {
    await axios.post(`${settings.API_URL}/auth/login`, {
      username,
      password
    })
      .then((response) => {
        if (response.data.access_token) {
          localStorage.setItem('access_token', response.data.access_token);
          window.location.href = '/profile';  
        } else {
          alert('Login failed');
        }
      });

  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
