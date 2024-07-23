/* eslint-disable react/prop-types */
import axios from "axios";

const DeleteBtn = ({ post, onDelete }) => {
  
  const token = localStorage.getItem('token');
  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      try {
        const response = await axios.delete(`/admin/delete/${post.sno}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          },
        });
        if (response.data.success) {
            onDelete();
        } else {
          console.error("Delete post failed");
        }
      } catch (error) {
        console.error("Server error", error);
      }
    }
  };

  return (
    <button type="button" onClick={handleDelete} className="px-2 py-1 text-white bg-red-600 hover:bg-red-700 rounded">
      Delete
    </button>
  );
};

export default DeleteBtn;

