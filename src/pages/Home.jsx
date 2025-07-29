import { motion } from 'framer-motion'

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="p-8"
    >
      <h1 className="text-4xl font-bold text-center">Welcome to Homepage</h1>
      <p className="mt-4 text-center text-gray-600 dark:text-gray-300">
        This is a beautifully animated homepage using Framer Motion.
      </p>
    </motion.div>
  )
}

export default Home