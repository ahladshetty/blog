/* eslint-disable react/prop-types */
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import Card from "./Card";

const CreateBtn = () => {

  let navigate = useNavigate();

  const token = localStorage.getItem('token');

  const [editData, setEditData] = useState({
    title: "",
    slug: "",
    content: "",
    img_url: "",
  });

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/admin/create', {
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
        alert("Post created successfully!");
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
      onSubmit={handleCreate}
      title="Create Post"
      buttonText="Submit"
    />
  );

};

export default CreateBtn;
