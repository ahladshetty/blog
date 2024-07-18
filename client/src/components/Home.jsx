import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Test = () => {

  let navigate = useNavigate();

  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("/blog/home");

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


  const handleClick = (post) => {
    navigate(`/post/${post.sno}`);
  };


  return (
    <>
    <h3>Posts</h3>
    <div>
      {posts.map((post) => (
        <div key={post.sno} onClick={() => handleClick(post)}>
          <p>
            <b>{post.title}</b>
          </p>
          <p>{post.content.slice(0, 50)}...</p>
          <p>Posted on {`${post.date}`}</p>
        </div>
      ))}
    </div>
    </>
  );
};

export default Test;
