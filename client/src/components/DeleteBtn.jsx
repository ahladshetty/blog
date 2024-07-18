/* eslint-disable react/prop-types */
import axios from "axios";

const DeleteBtn = ({ post, onDelete }) => {
  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      try {
        const response = await axios.delete(`/admin/delete/${post.sno}`);
        if (response.data.success) {
            alert("Post deleted successfully!");
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
    <button type="button" onClick={handleDelete}>
      Delete
    </button>
  );
};

export default DeleteBtn;

