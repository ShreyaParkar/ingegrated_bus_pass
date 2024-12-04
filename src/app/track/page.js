"use client";

import { useState, useEffect } from 'react';
import BusMap from '../components/BusMap';
import axios from 'axios';

export default function Track() {
  const [busLocation, setBusLocation] = useState({ latitude: 37.7749, longitude: -122.4194 });  // Default location (San Francisco)

  useEffect(() => {
    const fetchBusLocation = async () => {
      // Example API call to get the bus location from your backend
      // const res = await axios.get('/api/busLocation');
      // setBusLocation({ latitude: res.data.latitude, longitude: res.data.longitude });

      // Simulating a real-time location update here
      setBusLocation({ latitude: 37.7749, longitude: -122.4194 });  // Set your real bus location here
    };

    fetchBusLocation();
  }, []);

  return (
    <div>
      <h1>Track Bus in Real-Time</h1>
      <BusMap latitude={busLocation.latitude} longitude={busLocation.longitude} />
    </div>
  );
}
