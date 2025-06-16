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
    // Call your backend API
    axios
      .get("https://assigenment-a11-server.vercel.app/counts")
      .then((res) => {
        setCounts(res.data);
      })
      .catch((err) => {
        console.error("Error fetching counts:", err);
      });
  }, []);

  // Motion variants for container and items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, when: "beforeChildren" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      className="container mx-auto my-20 mont-font px-5 md:px-10 lg:px-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        className="text-center mb-8"
        variants={itemVariants}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Platform <span className="primary-color"> Statistics</span>
        </h2>
        <p className="text-gray-500 mt-2">
          Live stats of our users, services, reviews and sponsors.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center my-10 primary-color *:bg-white *:p-7 *:rounded-lg"
        variants={containerVariants}
      >
        {[
          { label: "Users", emoji: "👥", value: counts.users },
          { label: "Reviews", emoji: "📝", value: counts.reviews },
          { label: "Services", emoji: "🛠️", value: counts.services },
          { label: "Sponsors", emoji: "🤝", value: 120 },
        ].map(({ label, emoji, value }, i) => (
          <motion.div
            key={label}
            className="p-5 text-4xl bg-white rounded-lg shadow"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="font-bold">
              {emoji} <br /> {label}
            </h3>
            <CountUp end={value} duration={5} separator="," />+
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default CountStats;
