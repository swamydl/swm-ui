import { motion } from "framer-motion";

const AnimatedButton = ({ children, onClick, className = "" }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`bg-blue-600 text-white px-6 py-2 rounded-xl font-semibold shadow-md hover:bg-blue-700 transition-all ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

export default AnimatedButton;