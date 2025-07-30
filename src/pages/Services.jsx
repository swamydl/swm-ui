import { motion } from "framer-motion";
import { useScrollFadeIn } from "../hooks/useScrollFadeIn";

const Services = () => {
  const services = [
    { title: "Web Design", desc: "Modern and responsive web design." },
    { title: "Development", desc: "Full-stack app development." },
    { title: "SEO", desc: "Optimize your website for search engines." },
  ];

  return (
    <div className="p-6 grid md:grid-cols-3 gap-6">
      {services.map((service, index) => {
        const animation = useScrollFadeIn(index * 0.2, "up");

        return (
          <motion.div
            key={index}
            {...animation}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
          >
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{service.desc}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Services;