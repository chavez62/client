import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ setToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        username,
        password,
      });
      setToken(response.data.token);
    } catch (error) {
      console.error('There was an error logging in!', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-4 mb-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-extrabold mb-6 text-gray-800">Login</h2>
      <div className="mb-4">
        <label className="block text-lg font-medium text-gray-700">Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded mt-1 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-lg font-medium text-gray-700">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded mt-1 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
          required
        />
      </div>
      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300">Login</button>
    </form>
  );
};

export default Login;
