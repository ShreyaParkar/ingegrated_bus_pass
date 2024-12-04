"use client";

import PassCard from '../components/PassCard';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function PassPage() {
  const [userPass, setUserPass] = useState(null);

  useEffect(() => {
    const fetchUserPass = async () => {
      const res = await axios.get('/api/passes');
      setUserPass(res.data);
    };

    fetchUserPass();
  }, []);

  const handleRenewPass = async () => {
    try {
      const res = await axios.post('/api/passes/renew', { passId: userPass.id });
      setUserPass(res.data);  // Update the pass data after renewal
    } catch (error) {
      console.error('Failed to renew pass', error);
    }
  };

  return (
    <div>
      <h1>Your Bus Pass</h1>
      {userPass ? (
        <div>
          <PassCard pass={userPass} />
          {new Date() > new Date(userPass.expiryDate) && (
            <button onClick={handleRenewPass}>Renew Pass</button>
          )}
        </div>
      ) : (
        <p>No active pass. Please purchase a pass.</p>
      )}
    </div>
  );
}
