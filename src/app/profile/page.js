"use client";
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Profile() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      const res = await axios.get('/api/userTickets');
      setTickets(res.data);
    };

    fetchTickets();
  }, []);

  return (
    <div>
      <h1>Your Travel History</h1>
      <ul>
        {tickets.map(ticket => (
          <li key={ticket._id}>
            {ticket.busId.route} - Valid Until: {new Date(ticket.validUntil).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
}
