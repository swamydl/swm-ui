// Example inside About.jsx, Services.jsx, etc.
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Services = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6 }}
      className="min-h-screen p-8 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white"
    >
      <h2 className="text-4xl font-bold mb-4">About Page</h2>
      <p>This is your about page content.</p>
    </motion.div>
  );
};

export default Services;