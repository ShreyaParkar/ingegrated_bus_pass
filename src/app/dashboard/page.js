"use client";

import TicketHistory from '../components/TicketHistory';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Dashboard() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      const res = await axios.get('/api/tickets');
      setTickets(res.data);
    };

    fetchTickets();
  }, []);

  const handleLogout = () => {
    // Implement logout logic
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
      <TicketHistory tickets={tickets} />
    </div>
  );
}
