import axios from 'axios';
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import DeleteBtn from './DeleteBtn';

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

  const handleClick = (post) => {
    navigate(`/post/${post.sno}`);
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.get('/blog/home')
      setPosts(response.data)
    } catch (error) {
      console.error("Fetch posts failed", error);
    }
  }

  const handleEditClick = (post) => {
    navigate(`/edit/${post.sno}`, { state: { post } }); // sending state to route
  };

  return (
    <>
      <h1>Admin Dashboard</h1>
      <div>
      {posts.map((post) => (
        <div key={post.sno}>
        <div onClick={() => handleClick(post)}>
        <p><b>{post.title}</b></p>
        <p>{post.slug}</p>
        <p>{post.content.slice(0, 50)}...</p>
        <p>Posted on {`${post.date}`}</p>
        </div>
        
        <button onClick={() => {handleEditClick(post)}}>Edit</button>
        <DeleteBtn post={post} onDelete={handleUpdate}/>
        {/* send id and update when fn called in components*/}
        <hr />
        </div>
    ))}
  </div>
      </>
  )
}

export default Dashboard
