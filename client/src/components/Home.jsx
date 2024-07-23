import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import home from '../assets/home-bg.jpg';
import { marked } from "marked";



const Home = () => {

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
      <div className="bg-gradient-to-r from-gray-700 via-gray-300 to-gray-700 text-center space-y-14">
        <div className="relative bg-center py-48 bg-no-repeat bg-cover" style={{ backgroundImage: `url(${home})` }}>
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="relative z-10">
            <h1 className="text-4xl text-white">Posts</h1>
            <p className="m-5 text-2xl text-white">Welcome to our website. We are dedicated to providing the best service possible.</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-6 space-y-8 px-4">
          {posts.map((post) => (
            <div key={post.sno} onClick={() => handleClick(post)} className="border-b pb-4 cursor-pointer transition duration-300 ease-in-out hover:bg-gray-400">
              <p className="text-3xl font-semibold mb-1">{post.title}</p>
              <p className="text-2xl text-gray-700 mb-2" dangerouslySetInnerHTML={{ __html: marked(post.content.slice(0, 20) + '...') }}/>
              <p className="text-xl text-gray-500">Posted on {`${post.date.slice(0, 10)}`}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );

};

export default Home;
