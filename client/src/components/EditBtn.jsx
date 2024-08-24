/* eslint-disable react/prop-types */
import axios from "axios";
import { useState } from "react";
import {useLocation, useNavigate} from "react-router-dom"
import Card from "./Card";

const EditBtn = () => {

  let location = useLocation();
  let navigate = useNavigate();
  
  const token =  localStorage.getItem('token');
  const { post } = location.state; // access state passed to route

  const [editData, setEditData] = useState({
    title: post.title,
    slug: post.slug,
    content: post.content,
    img_url: post.img_url,
  });
  
  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(`/admin/edit/${post.sno}`, {
        title: editData.title,
        slug: editData.slug,
        content: editData.content,
        img_url: editData.img_url,
      }, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      if (response.data.success) {
        post==0?alert("Post created successfully!"):alert("Post updated successfully!")
        navigate('/dashboard');
      } else {
        alert("Failed to update post.");
      }
    } catch (error) {
      console.error("Server error", error);
    }
  };

  const handleChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value })
  }

  return (
    <Card
      formData={editData}
      onChange={handleChange}
      onSubmit={handleEdit}
      title="Edit Post"
      buttonText="Submit"
    />
  );

};

export default EditBtn;
