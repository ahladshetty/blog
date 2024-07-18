import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
    <div>
         <p><b>{post.title}</b></p>
            <p>{post.content}</p>
            <p>Posted on {post.date}</p>
    </div>
  )
};

export default Post