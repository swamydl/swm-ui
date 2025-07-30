import AnimatedButton from "../components/AnimatedButton";
import { motion } from "framer-motion";
import Reveal from "../components/Reveal";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="p-8 text-center">
      <Reveal>
        <h1 className="text-4xl font-bold mb-4">Welcome to SWM-UI</h1>
      </Reveal>
      <Reveal>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Build stunning, animated, and responsive UIs using React, Tailwind, and Framer Motion.
        </p>
      </Reveal>
      <Reveal>
        <AnimatedButton onClick={() => navigate("/services")}>
          View Services
        </AnimatedButton>
        <motion.button
  whileHover={{ scale: 1.05, backgroundColor: "#2563EB" }} // blue-600
  whileTap={{ scale: 0.95 }}
  className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md transition"
>
  Get Started
</motion.button>
      </Reveal>
    </div>
  );
};

export default Home;