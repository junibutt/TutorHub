import { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Login from './Login';
import UserDashboard from './UserDashboard';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email === "user@example.com" && password === "user123") {
      const user = { role: "user" };
      setUser(user);
      localStorage.setItem('user', JSON.stringify(user)); 
    } else {
      alert("Invalid credentials");
    }
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user'); 
  };

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={user ? <Navigate to="/user" /> : <Login onLogin={handleLogin} />} 
        />
        
        <Route 
          path="/user" 
          element={user ? <UserDashboard onLogout={handleLogout} /> : <Navigate to="/" />} 
        />
      </Routes>
    </Router>
  );
}

export default App;
