import { motion } from "framer-motion";

const ServiceCard = ({ icon: Icon, title, description }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md transition-all duration-300"
    >
      <div className="text-blue-600 dark:text-blue-400 text-3xl mb-3">
        <Icon />
      </div>
      <h3 className="text-xl font-semibold mb-2 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;