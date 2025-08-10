import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import axios from "axios";
import { motion } from "framer-motion";

const CountStats = () => {
  const [counts, setCounts] = useState({
    users: 0,
    reviews: 0,
    services: 0,
  });

  useEffect(() => {
    axios
      .get("https://assigenment-a11-server.vercel.app/counts")
      .then((res) => {
        setCounts(res.data);
      })
      .catch((err) => {
        console.error("Error fetching counts:", err);
      });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, when: "beforeChildren" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const stats = [
    { label: "Users", emoji: "👥", value: counts.users },
    { label: "Reviews", emoji: "📝", value: counts.reviews },
    { label: "Services", emoji: "🛠️", value: counts.services },
    { label: "Sponsors", emoji: "🤝", value: 120 },
  ];

  return (
    <motion.section
      className="container mx-auto my-24 px-6 md:px-12 lg:px-16 mont-font"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      aria-label="Platform Statistics"
    >
      <motion.div className="text-center mb-12" variants={itemVariants}>
        <h2 className="text-3xl md:text-4xl font-extrabold">
          Platform <span className="primary-color">Statistics</span>
        </h2>
        <p className="text-gray-600 mt-3 max-w-xl mx-auto text-sm md:text-base">
          Live stats of our users, services, reviews, and sponsors.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center"
        variants={containerVariants}
      >
        {stats.map(({ label, emoji, value }) => (
          <motion.div
            key={label}
            className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center justify-center cursor-default select-none"
            variants={itemVariants}
            whileHover={{ scale: 1.07, boxShadow: "0 10px 20px rgba(0,0,0,0.12)" }}
            role="region"
            aria-label={`${label} count`}
          >
            <div className="text-5xl mb-4">{emoji}</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{label}</h3>
            <CountUp
              end={value}
              duration={4}
              separator=","
              className="text-3xl font-bold text-primary-color"
            />{" "}
            <span className="text-2xl font-semibold text-primary-color"></span>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default CountStats;
