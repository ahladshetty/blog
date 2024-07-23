/* eslint-disable react/prop-types */
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom"

const CreateBtn = () => {

  let navigate = useNavigate();
  
  const token =  localStorage.getItem('token');
  
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
    <div className="min-h-screen p-6 bg-gradient-to-br from-gray-700 via-gray-400 to-gray-700 flex items-center justify-center">
      <div className="w-full max-w-lg bg-gray-800 p-10 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-white mb-8 text-center">Create Post</h1>
        <form onSubmit={handleCreate} className="space-y-6">
          <div className="flex items-center space-x-4">
            <label htmlFor="title" className="block text-gray-300 font-semibold w-24">Title</label>
            <input type="text" id="title" name="title" value={editData.title} required onChange={handleChange} className="flex-1 p-4 border border-gray-600 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="flex items-center space-x-4">
            <label htmlFor="slug" className="block text-gray-300 font-semibold w-24">Slug</label>
            <input type="text" id="slug" name="slug" value={editData.slug} required onChange={handleChange} className="flex-1 p-4 border border-gray-600 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label htmlFor="content" className="block text-gray-300 font-semibold mb-2">Content</label>
            <textarea id="content" name="content" value={editData.content} required onChange={handleChange} className="w-full p-4 border border-gray-600 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"></textarea>
          </div>
          <div className="flex items-center space-x-4">
            <label htmlFor="img_url" className="block text-gray-300 font-semibold w-24">Image URL</label>
            <input type="text" id="img_url" name="img_url" value={editData.img_url} required onChange={handleChange} className="flex-1 p-4 border border-gray-600 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <button type="submit" className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">Submit</button>
        </form>
      </div>
    </div>
  );
  
  
};

export default CreateBtn;
