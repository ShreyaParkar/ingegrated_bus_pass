"use client";

import BookingForm from '../components/BookingForm';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function HomePage() {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    const fetchRoutes = async () => {
      const res = await axios.get('/api/buses');
      setRoutes(res.data);
    };

    fetchRoutes();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <BookingForm availableRoutes={routes} />
      <div>
        <h2>Location Tracking</h2>
        {/* Here you would implement map component or tracking system */}
        <p>Track your bus location here.</p>
      </div>
    </div>
  );
}
