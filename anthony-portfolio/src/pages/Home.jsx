import { motion } from "framer-motion";
import { FaEnvelope, FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-[#0e1129] text-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold">
          Hey <span className="inline-block animate-waving-hand">👋</span> I'm Anthony
        </h1>
        <h2 className="text-xl text-yellow-400 font-semibold mt-3">
          Full Stack Web Developer / Software Engineer
        </h2>
        <p className="text-gray-400 mt-4 max-w-lg mx-auto">
          I'm an advocate for building responsive, accessible, and inclusive digital products and experiences for the web.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <motion.a
            href="mailto:mwauraa634@gmail.com"
            className="flex items-center gap-2 border border-yellow-400 px-4 py-2 rounded-lg text-yellow-400 hover:bg-yellow-400 hover:text-black"
            whileHover={{ scale: 1.1 }}
          >
            <FaEnvelope /> Get in Touch
          </motion.a>
          <motion.a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-yellow-400 px-4 py-2 rounded-lg text-yellow-400 hover:bg-yellow-400 hover:text-black"
            whileHover={{ scale: 1.1 }}
          >
            <FaGithub /> Github
          </motion.a>
        </div>

      </div>
    </div>
  );
};

export default Home;
