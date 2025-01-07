import { motion } from "framer-motion";
import { ReactNode } from "react";

import "@/components/Card/styles.css";

interface CardProps {
  title: string;
  icon?: ReactNode;
  action?: ReactNode;
  children: ReactNode;
}

const Card = ({ title, icon, action, children }: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div
        className="section-card"
        style={{
          overflow: "hidden",
        }}
      >
        <div className="section-card-header">
          <div className="card-header-icon">{icon}</div>
          <h4 className="card-header-title">{title}</h4>
          {action ? action : null}
        </div>
        <div className="section-card-body">{children}</div>
      </div>
    </motion.div>
  );
};

export default Card;
