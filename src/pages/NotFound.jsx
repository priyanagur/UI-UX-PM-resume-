import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { Home } from "lucide-react";


 const NotFound = () => {
  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen px-4 md:px-6 text-center`}
    >
      {/* Big 404 */}
     <motion.h1
  initial={{ scale: 0.5, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.6 }}
  className="text-5xl md:text-7xl font-extrabold tracking-widest mb-6 md:mb-8"
>
  404
</motion.h1>

      {/* Emotional student-friendly message */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-4 text-base md:text-lg lg:text-xl max-w-md md:max-w-xl text-gray-500 dark:text-gray-400"
      >
        You know that feeling when you study all night  
        and still can’t find the answer in the exam?  
        Yeah… this page feels the same way.
      </motion.p>

 
      {/* Motivational CTA */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, type: "spring" }}
        className="mt-8 md:mt-10 flex gap-3 md:gap-4 flex-wrap justify-center"
      >
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 rounded-2xl shadow-lg text-base md:text-lg font-semibold transition-all duration-300 transform hover:scale-105 
          bg-gradient-to-r from-blue-500 to-indigo-600 text-white dark:from-indigo-400 dark:to-blue-500"
        >
          <Home size={20} />
          Back to Home
        </Link>
      </motion.div>

      {/* Gentle encouragement */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 6, delay: 1 }}
        className="mt-8 md:mt-12 text-xs md:text-sm text-gray-400"
      >
        Stay strong, Your journey is still alive ❤️
      </motion.p>
    </div>
  );
};

export default NotFound;
