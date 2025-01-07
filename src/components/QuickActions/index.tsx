import { motion } from "framer-motion";

import "@/components/QuickActions/styles.css";

const QuickActions = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="quick-actions"
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="action-button workout-button"
      >
        Start Workout
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="action-button progress-button"
      >
        View Progress
      </motion.button>
    </motion.section>
  );
};

export default QuickActions;
