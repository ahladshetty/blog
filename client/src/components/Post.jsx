import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { marked } from "marked";
import home from '../assets/post-bg.jpg';
import './Post.css';

const Post = () => {

  const { sno } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`/blog/post/${sno}`);
        setPost(res.data)
      } catch (error) {
        console.error("Error fetching post details:", error);
      }
    };
    fetchPost();
  }, [sno]);

  if (!post) return <p>Loading...</p>;

  return (
    <div className="bg-gradient-to-r from-gray-300 via-gray-200 to-gray-200">

      <div className="relative bg-center py-48 bg-no-repeat bg-cover" style={{ backgroundImage: `url(${home})` }}>
      <p className="text-4xl text-center py-7">{post.title}</p>
      </div>
      <div className="mx-4">
        <div className="post-content" dangerouslySetInnerHTML={{ __html: marked(post.content) }} />
        <p>Posted on {post.date.slice(0, 10)}</p>
      </div>
    </div>
  );


};

export default Post
