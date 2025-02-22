import { FaPhone, FaEnvelope, FaLinkedin } from "react-icons/fa"; // Import icons


const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <div className="contact-info">
        <div className="contact-item">
          <FaPhone className="contact-icon" />
          <p>
            <a href="tel:+254715284708">0715284708</a> | <a href="tel:+254788685195">0788685195</a>
          </p>
        </div>
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <p>
            <a href="mailto:mwauraa634@gmail.com">mwauraa634@gmail.com</a>
          </p>
        </div>
        <div className="contact-item">
          <FaLinkedin className="contact-icon" />
          <p>
            <a href="https://www.linkedin.com/in/anthony-mwaura-ba9245352/" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/anthony-mwaura
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
