import axios from 'axios';
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import DeleteBtn from './DeleteBtn';
import home from '../assets/post-bg.jpg';

const Dashboard = () => {

  let navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("/blog/home")
        setPosts(response.data)
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data");
      }
    }
    fetchPosts();
  }, [])

  if (error)
    return <div>{error}</div>;

  if (!posts.length)
    return <div>Loading...</div>;

  // const handleClick = (post) => {
  //   navigate(`/post/${post.sno}`);
  // };

  const handleUpdate = async () => {
    try {
      const response = await axios.get('/blog/home')
      setPosts(response.data)
    } catch (error) {
      console.error("Fetch posts failed", error);
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    navigate('/')
  }

  const handleClick = (post) => {
    navigate(`/post/${post.sno}`);
  };

  return (
    <>
      <div className="bg-gradient-to-r from-gray-800 via-gray-300 to-gray-800 text-center space-y-14">
        <div className="relative bg-center py-48 bg-no-repeat bg-cover" style={{ backgroundImage: `url(${home})` }}>
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="text-white relative z-10 space-y-10">
          <h1 className="text-5xl">Admin Dashboard</h1>
          <p className="m-5 text-3xl">Welcome to our website. We are dedicated to providing the best service possible.</p>
          </div>
        </div>
        <div className='flex justify-evenly text-white -space-x-96'>
        <Link to='/create' >
              <button className="px-2 py-1 text-xl bg-green-700 hover:bg-green-900 rounded">Create</button>
            </Link>

            <button onClick={handleLogout} className="px-2 py-1 text-xl bg-red-600 hover:bg-red-700 rounded">Logout</button>
            </div>
  <div className="p-4 text-lg">
      <table className="w-4/5 mx-36">
        <thead>
          <tr >
            <th className="p-2 text-left">#</th>
            <th className="p-2 text-left">Slug</th>
            <th className="p-2 text-left">Title</th>
            <th className="p-2 text-left">Date</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.sno} onClick={() => handleClick(post)} className="hover:cursor-pointer">
              <td className="p-2 text-left">{post.sno}</td>
              <td className="p-2 text-left">{post.slug}</td>
              <td className="p-2 text-left">{post.title}</td>
              <td className="p-2 text-left">{post.date.slice(0, 10)}</td>
              <td className="p-2">
                <Link to={`/edit/${post.sno}`} state={{ post }}>
                <button className="px-2 py-1 text-white bg-green-700 hover:bg-green-900 rounded">Edit</button>
                </Link>
              </td>
              <td>
                <DeleteBtn post={post} onDelete={handleUpdate}/>
                {/* send id and update when fn called in components*/}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  
    </>
  )
}

export default Dashboard
