import { FaPhone, FaEnvelope, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0E1124] text-white p-6">
      <h2 className="text-3xl font-bold mb-6 text-yellow-400">Contact Me</h2>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md space-y-4">
        <div className="flex items-center space-x-4 border-b border-gray-600 pb-4">
          <FaPhone className="text-yellow-400 text-xl" />
          <p>
            <a href="tel:+254715284708" className="hover:underline text-white">+25415284708</a> |
            <a href="tel:+254788685195" className="hover:underline ml-2 text-white">+25488685195</a>
          </p>
        </div>
        <div className="flex items-center space-x-4 border-b border-gray-600 pb-4">
          <FaEnvelope className="text-yellow-400 text-xl" />
          <p>
            <a href="mailto:mwauraa634@gmail.com" className="hover:underline text-white">mwauraa634@gmail.com</a>
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <FaLinkedin className="text-yellow-400 text-xl" />
          <p>
            <a
              href="https://www.linkedin.com/in/anthony-mwaura-ba9245352/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-white"
            >
              linkedin.com/in/anthony-mwaura
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
