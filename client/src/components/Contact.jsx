import axios from "axios";
import { useState } from "react";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/blog/contact', {
        name: formData.name,
        email: formData.email,
        message: formData.message
      });

      const json = response.data;

      if (json.success) {
        alert('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        alert(json.error || 'There was an error sending the message.');
      }

    } catch (error) {
      console.error("There was an error!", error);
      alert('Server error');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  
  return (
    <div>
      <p>Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible!</p>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <input id="name" name="name" type="text" placeholder="Enter your name..." value={formData.name} required onChange={handleChange}/>
          </div>
          <div>
            <input id="email" name="email" type="email" placeholder="Enter your email..." value={formData.email} required onChange={handleChange}/>
          </div>
          <div>
            <textarea id="message" name="message" placeholder="Enter your message here..." value={formData.message} required onChange={handleChange}></textarea>
          </div>
          <br />
          <button type="submit">Send</button>
        </form>
      </div>

      <ul>
          <a href="https://github.com/ahladshetty/coding_thunder" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
    
      </ul>
      <div>Copyright &copy; nocopyright 2024</div>

    </div>
  );
}

export default Contact;
