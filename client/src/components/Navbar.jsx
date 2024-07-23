import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate();
  let user = localStorage.getItem('user')

  const handleLogout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    navigate('/')
  }

  return (
    <div className="bg-gradient-to-r from-gray-700 via-gray-300 to-gray-700">
    <div className="flex justify-center py-2.5 mx-4 text-lg text-white">
      <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex',justifyContent: 'space-between', width: '100%' }}>
        
        <li><Link to= "/">Home</Link></li>
        <li><Link to= "/about">About</Link></li>
        <li className="text-black"><Link to= { localStorage.getItem('user') ? "/dashboard" : "/login" }>codeDojo</Link></li>
        <li><Link to= "/contact">Contact</Link></li>
        {user && (
        <li>
          <button onClick={handleLogout}>Logout</button>
        </li>
        )}
      </ul>
    </div>
    </div>
  );
};

export default Navbar;


