import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Card } from "@/components";

const DEFAULT_GOALS = [
  { id: 1, label: "10,000 steps", completed: false },
  { id: 2, label: "Drink 2L water", completed: false },
  { id: 3, label: "30 mins workout", completed: false },
];

const DailyGoals = () => {
  const [goals, setGoals] = useState(DEFAULT_GOALS);

  const [isAdding, setIsAdding] = useState(false);
  const [newGoalLabel, setNewGoalLabel] = useState("");

  const toggleGoal = (id: number) => {
    setGoals((prevGoals) =>
      prevGoals.map((goal) =>
        goal.id === id ? { ...goal, completed: !goal.completed } : goal
      )
    );
  };

  const addGoal = () => {
    if (newGoalLabel.trim()) {
      setGoals((prevGoals) => [
        ...prevGoals,
        { id: Date.now(), label: newGoalLabel, completed: false },
      ]);
      setNewGoalLabel("");
      setIsAdding(false);
    }
  };

  const deleteGoal = (id: number) => {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  };

  return (
    <>
      <Card
        icon="💪🏼"
        title="Daily Goals"
        action={
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsAdding(true)}
            className="card-header-button"
            transition={{ duration: 0.7 }}
          >
            Add Goal
          </motion.button>
        }
      >
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            overflowY: "auto",
            maxHeight: "400px",
          }}
        >
          <AnimatePresence>
            {goals.map((goal) => (
              <motion.li
                key={goal.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -100, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "0.5rem 1rem",
                  background: "var(--common-white)",
                  border: "none",
                  borderRadius: "4px",
                  marginBottom: "8px",
                  cursor: "pointer",
                }}
                onClick={() => toggleGoal(goal.id)}
              >
                <div
                  style={{
                    width: "16px",
                    height: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    border: "1px solid var(--common-black)",
                    borderRadius: "3px",
                    position: "relative",
                    background: goal.completed
                      ? "#4caf50"
                      : "var(--common-white)",
                    transition: "background 0.3s ease",
                  }}
                >
                  <motion.svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      position: "absolute",
                    }}
                  >
                    <motion.path
                      d="M5 13L9 17L19 7"
                      stroke="#fff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={false}
                      animate={
                        goal.completed ? { pathLength: 1 } : { pathLength: 0 }
                      }
                      transition={{ duration: 0.5 }}
                    />
                  </motion.svg>
                </div>
                <label
                  htmlFor={`goal-${goal.id}`}
                  style={{
                    marginLeft: "1rem",
                    textDecoration: goal.completed ? "line-through" : "none",
                    color: "var(--common-black)",
                  }}
                >
                  {goal.label}
                </label>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => deleteGoal(goal.id)}
                  className="delete-button"
                  style={{
                    background: "none",
                    border: "none",
                    marginLeft: "auto",
                    cursor: "pointer",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16px"
                    height="16px"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M10 12L14 16M14 12L10 16M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6"
                      stroke="red"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </motion.button>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </Card>
      <AnimatePresence>
        {isAdding && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "var(--common-black)",
                zIndex: 999,
              }}
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
              style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                background: "var(--common-white)",
                padding: "1rem 2rem",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                zIndex: 1000,
              }}
            >
              <h4
                style={{
                  marginBottom: "1rem",
                }}
              >
                Enter Goal Title
              </h4>
              <input
                type="text"
                value={newGoalLabel}
                onChange={(e) => setNewGoalLabel(e.target.value)}
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  marginBottom: "1rem",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
              />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <button
                  onClick={addGoal}
                  style={{
                    padding: "0.5rem 1rem",
                    background: "#4caf50",
                    color: "var(--common-white)",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  Add
                </button>
                <button
                  onClick={() => setIsAdding(false)}
                  style={{
                    padding: "0.5rem 1rem",
                    background: "#f44336",
                    color: "var(--common-white)",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default DailyGoals;
