import "@/pages/Home/styles.css";
import { motion } from "framer-motion";

import {
  Card,
  DailyGoals,
  QuickActions,
  ThemeSwitcher,
  WorkoutChart,
} from "@/components";

const Home = () => {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <header className="sidebar-header">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <svg
              width="104"
              height="33"
              viewBox="0 0 104 33"
              xmlns="http://www.w3.org/2000/svg"
              style={{ fill: "var(--common-black)" }}
            >
              <g>
                <path
                  d="M17.7341 0H10.5043L0 7.06549V11.8423H8.34479L0 17.4525V22.2293H8.34479L0 27.8512V32.628H7.2298L17.7459 25.5625V20.7857H9.40109L17.7459 15.1756V10.3987H9.40109L17.7459 4.78857V0H17.7341Z"
                  fill="inherit"
                ></path>
                <path
                  d="M95.4593 4.46875C100.412 4.46875 104.004 8.89348 104.004 15.0905C104.004 21.2874 100.447 25.7474 95.4593 25.7474C92.3608 25.7474 89.6379 23.7404 88.4642 20.9471V32.7072H83.7812V4.92648H88.4642V9.72679C89.4149 7.00388 91.7505 4.46875 95.4593 4.46875ZM93.7574 22.4259C97.2784 22.4259 99.2033 19.5856 99.2033 15.0905C99.2033 10.5953 97.2784 7.79023 93.7574 7.79023C90.2364 7.79023 88.3116 10.6305 88.3116 15.0905C88.3116 19.5504 90.2716 22.4259 93.7574 22.4259Z"
                  fill="inherit"
                ></path>
                <path
                  d="M74.7608 4.46875C79.2911 4.46875 81.4155 7.83718 81.4155 12.4849V25.3014H76.6856V13.4004C76.6856 9.58595 75.3241 7.84892 72.6834 7.84892C70.0426 7.84892 68.6342 9.58595 68.6342 13.4825V25.3131H63.9043V13.4121C63.9043 9.59769 62.5429 7.86066 59.9021 7.86066C57.2613 7.86066 55.8529 9.59769 55.8529 13.4943V25.3249H51.123V4.92648H55.806V9.11648C56.7097 6.66351 58.5641 4.46875 62.003 4.46875C65.4418 4.46875 67.5544 6.88651 68.3173 9.49206C69.1506 6.99214 71.1106 4.46875 74.7373 4.46875H74.7608Z"
                  fill="inherit"
                ></path>
                <path
                  d="M39.9308 4.46875C46.2099 4.46875 48.8506 8.1306 48.8506 12.2971V25.3014H44.1677V21.2522C42.8884 23.9399 41.1396 25.7474 37.2548 25.7474C33.3699 25.7474 30.2949 22.9893 30.2949 19.1279C30.2949 14.398 34.8722 13.3769 38.7219 13.0013L44.1208 12.438V12.0976C44.1208 9.71505 42.7593 7.79024 39.9308 7.79024C37.3956 7.79024 35.999 9.30427 35.7408 11.0061H30.9757C31.4686 7.00388 34.9427 4.46875 39.9308 4.46875ZM39.0622 22.7663C42.4307 22.7663 44.1325 20.0434 44.1325 16.6397V15.4308L40.4706 15.8064C37.9003 16.1116 35.107 16.4871 35.107 19.1279C35.107 21.4283 36.9262 22.7545 39.074 22.7545L39.0622 22.7663Z"
                  fill="inherit"
                ></path>
              </g>
            </svg>
          </motion.h1>
        </header>
      </aside>
      <main className="main">
        <section className="main-header">
          <motion.h3
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={{
              fontSize: "1.5rem",
              fontWeight: 600,
              color: "var(--common-black)",
            }}
          >
            Welcome, João
          </motion.h3>
          <div
            className="actions-container"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <QuickActions />
            <ThemeSwitcher />
          </div>
        </section>
        <div className="main-content">
          <section className="section-daily-goals">
            <DailyGoals />
          </section>
          <section className="section-workout-progress">
            <Card icon="💪🏼" title="Workout Progress">
              <WorkoutChart />
            </Card>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Home;
