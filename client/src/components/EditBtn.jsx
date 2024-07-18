/* eslint-disable react/prop-types */
import axios from "axios";
import { useState } from "react";
import {useLocation, useNavigate} from "react-router-dom"

const EditBtn = () => {

  let location = useLocation();
  let navigate = useNavigate();

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
      });
      if (response.data.success) {
        alert("Post updated successfully!");
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
    <>
    <form onSubmit={handleEdit}>
    <label htmlFor="title">Title</label>
    <input type="text" id="title" name="title" value={editData.title} required onChange={handleChange}/>

    <label htmlFor="slug">Slug</label>
    <input type="text" id="slug" name="slug" value={editData.slug} required onChange={handleChange}/>

    <label htmlFor="content">Content</label>
    <textarea id="content" name="content" value={editData.content} required onChange={handleChange}>This is a sample post content.</textarea>

    <label htmlFor="img_url">Image URL</label>
    <input type="text" id="img_url" name="img_url" value={editData.img_url} required onChange={handleChange}/>

    <input type="submit" value="Submit"/>
    </form>
    </>
  );
};

export default EditBtn;
