import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/admin/login', {
        username: credentials.username,
        password: credentials.password
      });

      const json = response.data;

      if (json.authtoken) {
        localStorage.setItem("token", json.authtoken); // save token
        localStorage.setItem("user", JSON.stringify({ username: credentials.username }));

        navigate('/dashboard');
      } else {
        alert(json.error || 'Invalid credentials');
      }

    } catch (error) {
      console.error("There was an error!", error);
      alert('Server error');
    }
  };

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-gray-700 via-gray-400 to-gray-700 flex items-center justify-center">
      <div className="w-full max-w-md bg-gray-800 p-10 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-white mb-8 text-center">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-gray-300 font-semibold mb-2">Username</label>
            <input type="text" id="username" name="username" value={credentials.username} onChange={handleChange} className="w-full p-4 border border-gray-600 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-300 font-semibold mb-2">Password</label>
            <input type="password" id="password" name="password" value={credentials.password} onChange={handleChange} className="w-full p-4 border border-gray-600 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <button type="submit" className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Login</button>
        </form>
      </div>
    </div>
  );
  
};

export default Login;
