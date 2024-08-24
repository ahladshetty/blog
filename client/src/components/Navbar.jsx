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
    <div className="bg-[#0c0c0d] p-1">
    <div className="flex justify-center py-2.5 mx-4 text-2xl text-white">
      <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex',justifyContent: 'space-between', width: '100%' }}>
        
        <li><Link to= "/">home</Link></li>
        <li><Link to= "/about">about</Link></li>
        <li><Link to= "/contact">contact</Link></li>
        <li><Link to= { localStorage.getItem('user') ? "/dashboard" : "/login" }>codeDojo</Link></li>
        {user && (
        <li>
          <button onClick={handleLogout}>logout</button>
        </li>
        )}
      </ul>
    </div>
    </div>
  );
};

export default Navbar;


