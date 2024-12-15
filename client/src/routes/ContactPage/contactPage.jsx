import "./contactPage.scss";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="form-content">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Feel free to reach out to us through the following channels:</p>
        <br></br>
        <ul>
          <li>
            <strong>Phone:</strong> +1 (555) 123-4567
          </li>
          <li>
            <strong>Email:</strong> contact@nomulaestate.com
          </li>
          <li>
            <strong>Address:</strong> 123 Estate Lane, RealCity, USA
          </li>
          <li>
            <strong>Working Hours:</strong> Mon-Fri: 9:00 AM - 6:00 PM
          </li>
        </ul>
        <br></br>
        <p>Or send us a message using the form below:</p>
        <br></br>
        <form>
          <label>Name:</label>
          <input type="text" placeholder="Your Name" />
          <label>Email:</label>
          <input type="email" placeholder="Your Email" />
          <label>Message:</label>
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
      <div className="image-content">
        <img src="data:image/jpeg;base64,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" alt="Contact Nomula Estate" />
      </div>
    </div>
  );
};

export default ContactPage;
