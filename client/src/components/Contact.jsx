import axios from "axios";
import { useState } from "react";
import contact from '../assets/contact.png';


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
    <div className="bg-gradient-to-br from-gray-800 via-gray-300 to-gray-800 text-center space-y-16">
      <div className="relative bg-no-repeat py-52 bg-cover" style={{ backgroundImage: `url(${contact})` }}>
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 text-4xl text-white space-y-8">
          <h1>Contact Us</h1>
          <p className="text-2xl mb-8">Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible!</p>
        </div>
      </div>
  <div className="min-h-screen p-6 bg-gradient-to-br from-gray-700 via-gray-400 to-gray-700 flex items-center justify-center">
    <div className="w-full max-w-lg bg-gray-800 p-10 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-white mb-6 text-center">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <input id="name" name="name" type="text" placeholder="Name" value={formData.name} required onChange={handleChange} className="w-full p-4 border border-gray-600 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <input id="email" name="email" type="email" placeholder="Email" value={formData.email} required onChange={handleChange} className="w-full p-4 border border-gray-600 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <textarea id="message" name="message" placeholder="Message" value={formData.message} required onChange={handleChange} className="w-full p-4 border border-gray-600 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 h-40"></textarea>
        <button type="submit" className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">Send</button>
      </form>
    </div>
  </div>
);

    </div>
  );
}

export default Contact;

