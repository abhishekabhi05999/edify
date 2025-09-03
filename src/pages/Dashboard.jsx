import '../styles/Dashboard.css';
import React from 'react';
import Navbar from '../components/Navbar';

function Dashboard() {
  return (
    <div>
      <Navbar />
      <div style={{ padding: '300px' }}>
        <h1>Welcome to Edify CRM Dashboard</h1>
        <p></p>
      </div>
    </div>
  );
}

export default Dashboard;