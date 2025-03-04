import { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Login from './Login';
import AdminDashboard from './AdminDashboard';
import UserDashboard from './UserDashboard';

function App() {
  const [user, setUser] = useState(null);

  // Check user session on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser)); // If user data exists in localStorage, restore it
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email === "admin@example.com" && password === "admin123") {
      const user = { role: "admin" };
      setUser(user);
      localStorage.setItem('user', JSON.stringify(user)); // Save user info to localStorage
    } else if (email === "user@example.com" && password === "user123") {
      const user = { role: "user" };
      setUser(user);
      localStorage.setItem('user', JSON.stringify(user)); // Save user info to localStorage
    } else {
      alert("Invalid credentials");
    }
  };

  const handleLogout = () => {
    setUser(null); // Clear user state
    localStorage.removeItem('user'); // Remove user session from localStorage
  };

  return (
    <Router>
      <Routes>
        {/* Login route */}
        <Route 
          path="/" 
          element={user ? <Navigate to={`/${user.role}`} /> : <Login onLogin={handleLogin} />} 
        />

        {/* Admin Dashboard route */}
        <Route 
          path="/admin" 
          element={user?.role === "admin" ? <AdminDashboard onLogout={handleLogout} /> : <Navigate to="/" />} 
        />

        {/* User Dashboard route */}
        <Route 
          path="/user" 
          element={user?.role === "user" ? <UserDashboard onLogout={handleLogout} /> : <Navigate to="/" />} 
        />
      </Routes>
    </Router>
  );
}

export default App;
