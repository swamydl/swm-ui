// src/components/DarkModeToggle.jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react"; // Or use emojis/icons

const DarkModeToggle = () => {
  const [theme, setTheme] = useState(() =>
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <motion.button
      whileTap={{ rotate: 360, scale: 0.9 }}
      transition={{ type: "spring", stiffness: 300 }}
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800"
    >
      {theme === "dark" ? <Sun className="text-yellow-300" /> : <Moon className="text-gray-700" />}
    </motion.button>
  );
};

export default DarkModeToggle;