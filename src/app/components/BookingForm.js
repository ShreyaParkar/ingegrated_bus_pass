import { useState } from 'react';
import axios from 'axios';

export default function BookingForm({ availableRoutes }) {
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [selectedBus, setSelectedBus] = useState('');
  const [message, setMessage] = useState('');

  const handleBooking = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/tickets', { start, end, busId: selectedBus });
      setMessage('Ticket booked successfully!');
    } catch (error) {
      setMessage('Failed to book ticket.');
    }
  };

  return (
    <form onSubmit={handleBooking}>
      <input type="text" placeholder="Start Destination" value={start} onChange={(e) => setStart(e.target.value)} required />
      <input type="text" placeholder="End Destination" value={end} onChange={(e) => setEnd(e.target.value)} required />
      <select onChange={(e) => setSelectedBus(e.target.value)} value={selectedBus} required>
        <option value="">Select Bus</option>
        {availableRoutes.map(bus => (
          <option key={bus.id} value={bus.id}>{bus.routeName}</option>
        ))}
      </select>
      <button type="submit">Book Ticket</button>
      {message && <p>{message}</p>}
    </form>
  );
}
