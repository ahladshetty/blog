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
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" value={credentials.username} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" value={credentials.password} onChange={handleChange} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
