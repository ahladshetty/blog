import { useState, useEffect } from 'react';
import axios from 'axios';

const Test = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('/blog/home');
        
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data");
      }
    };

    fetchPosts();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!posts.length) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.sno}>
            <h2>{post.title}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Test;
