import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    let navigate = useNavigate();

    const handleLogout = ()=>{
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        navigate('/')
      }

  return (
    <div className="navbar" style={{ display: 'flex', justifyContent: 'center' }}>
      <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex',justifyContent: 'space-between', width: '100%' }}>
        
        <li><Link to= { localStorage.getItem('user') ? "/dashboard" : "/login" }>codeDojo</Link></li>
        <li><Link to= "/">Home</Link></li>
        <li><Link to= "/about">About</Link></li>
        <li><Link to= "/contact">Contact</Link></li>
        <button onClick={handleLogout} >Logout</button>
      </ul>
    </div>
  );
};

export default Navbar;

