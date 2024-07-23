import about from '../assets/about-bg.jpg';

const About = () => {
  return (
    <div className="bg-gradient-to-br from-gray-800 via-gray-300 to-gray-800 text-center space-y-14">
      <div className="relative bg-center py-52 bg-no-repeat bg-cover" style={{ backgroundImage: `url(${about})` }}>
        <div className="absolute inset-0 bg-black opacity-35"></div>
        <div className="relative z-10">
          <h1 className="text-4xl text-white">About Us</h1>
          <p className="m-5 text-2xl text-white">Welcome to our website. We are dedicated to providing the best service possible.</p>
        </div>
      </div>
      <div></div>
      <div className="space-y-4">
        <h2 className="text-3xl">Our Mission</h2>
        <p className="m-5 text-xl">Our mission is to deliver high-quality products that bring joy to our customers.</p>
        <h2 className="text-3xl">Our Team</h2>
        <p className="m-5 text-xl">We have a diverse team of professionals who are passionate about what they do.</p>
        <h2 className="text-3xl">Contact Us</h2>
        <p className="m-5 text-xl">If you have any questions, feel free to reach out to us at contact@example.com.</p>
      </div>
    </div>
  );
}

export default About;
