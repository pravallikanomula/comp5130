import "./aboutPage.scss";

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="text-content">
        <h1>About Us</h1>
        <p>
          Welcome to Nomula Estate, your trusted partner in real estate and property management.
          With years of experience, we specialize in connecting buyers, sellers, and renters to their ideal properties.
        </p>
        <p>
          Our mission is to simplify the real estate process, making it accessible and stress-free for everyone. 
          We believe in transparency, innovation, and putting our clients first. 
        </p>
        <p>
          Whether you're searching for your dream home, selling your property, or looking for investment opportunities,
          Nomula Estate is here to guide you every step of the way.
        </p>
        <p>
          Join thousands of satisfied clients who have found their perfect property with our help.
        </p>
      </div>
      <div className="image-content">
        <img src="/about.png" alt="" />      </div>
    </div>
  );
};

export default AboutPage;
