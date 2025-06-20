import React, { useState } from 'react';
import axios from 'axios';

function Home() {
  const [email, setEmail] = useState('');
  const [result, setResult] = useState('');

  const checkEmail = async () => {
    try {
      const res = await axios.post('http://localhost:5000/check', { email });
      setResult(res.data.message);
    } catch (error) {
      setResult('Error checking email.');
    }
  };

  return (
    <div>
      <h2>Email Breach Checker</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={checkEmail}>Check</button>
      <p>{result}</p>
    </div>
  );
}

export default Home;

