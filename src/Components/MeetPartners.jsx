import React from "react";
import { motion } from "framer-motion";

const partners = [
  {
    name: "TechSpark",
    logo: "/logo1.webp",
    description: "Provided cloud infrastructure and scaling support.",
  },
  {
    name: "EduWorks",
    logo: "/logo2.webp",
    description: "Helped design our learning modules and content strategy.",
  },
  {
    name: "Designify",
    logo: "/logo3.webp",
    description: "Contributed to the UI/UX design of the app.",
  },
  {
    name: "SecureNet",
    logo: "/logo4.webp",
    description: "Ensured application-level security and data privacy.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25, when: "beforeChildren" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const MeetPartners = () => {
  return (
    <section className="py-16 px-4 md:px-10  ">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="container mx-auto  text-center "
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-extrabold mb-16 mont-font text-gray-900"
        >
          Meet Our <span className="primary-color">Partners</span>
        </motion.h2>

        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              variants={itemVariants}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer flex flex-col items-center text-center"
            >
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="h-20 w-auto mb-6 object-contain"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {partner.name}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{partner.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default MeetPartners;
