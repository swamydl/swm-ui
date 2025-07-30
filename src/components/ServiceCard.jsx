import { motion } from "framer-motion";
import { FaCode, FaPaintBrush, FaChartLine } from "react-icons/fa";

const icons = {
  code: <FaCode size={30} />,
  design: <FaPaintBrush size={30} />,
  seo: <FaChartLine size={30} />,
};

const ServiceCard = ({ title, description, icon }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg text-center transition-colors"
    >
      <div className="text-primary mb-4">{icons[icon]}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;