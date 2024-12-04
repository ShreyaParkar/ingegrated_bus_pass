"use client";
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function AdminPanel() {
  const [buses, setBuses] = useState([]);
  const [passes, setPasses] = useState([]);
  const [tickets, setTickets] = useState([]);
  const [newBus, setNewBus] = useState({ routeName: '', start: '', end: '', seats: '' });

  useEffect(() => {
    const fetchAdminData = async () => {
      const busesRes = await axios.get('/api/admin/buses');
      const passesRes = await axios.get('/api/admin/passes');
      const ticketsRes = await axios.get('/api/admin/tickets');

      setBuses(busesRes.data);
      setPasses(passesRes.data);
      setTickets(ticketsRes.data);
    };

    fetchAdminData();
  }, []);

  const handleAddBus = async () => {
    try {
      const res = await axios.post('/api/admin/buses', newBus);
      setBuses([...buses, res.data]);
      setNewBus({ routeName: '', start: '', end: '', seats: '' });
    } catch (error) {
      console.error("Error adding bus", error);
    }
  };

  const handleRenewPass = async (passId) => {
    try {
      const res = await axios.post('/api/admin/passes', { passId });
      setPasses(passes.map(pass => (pass._id === passId ? res.data : pass)));
    } catch (error) {
      console.error("Error renewing pass", error);
    }
  };

  return (
    <div>
      <h1>Admin Panel</h1>
      
      <section>
        <h2>Add New Bus</h2>
        <input type="text" placeholder="Route Name" value={newBus.routeName} onChange={(e) => setNewBus({...newBus, routeName: e.target.value})} />
        <input type="text" placeholder="Start" value={newBus.start} onChange={(e) => setNewBus({...newBus, start: e.target.value})} />
        <input type="text" placeholder="End" value={newBus.end} onChange={(e) => setNewBus({...newBus, end: e.target.value})} />
        <input type="number" placeholder="Seats" value={newBus.seats} onChange={(e) => setNewBus({...newBus, seats: e.target.value})} />
        <button onClick={handleAddBus}>Add Bus</button>
      </section>

      <section>
        <h2>Manage Passes</h2>
        <ul>
          {passes.map(pass => (
            <li key={pass._id}>
              {pass.userId} - {pass.route} ({pass.type}) - Expiry: {new Date(pass.expiryDate).toLocaleDateString()}
              {new Date() > new Date(pass.expiryDate) && <button onClick={() => handleRenewPass(pass._id)}>Renew</button>}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>All Tickets</h2>
        <ul>
          {tickets.map(ticket => (
            <li key={ticket._id}>
              User: {ticket.userId} - Route: {ticket.route} - Date: {new Date(ticket.date).toLocaleDateString()}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
