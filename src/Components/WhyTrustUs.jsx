import React from "react";
import { ShieldCheck, Star, Search, Users } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-purple-600" />,
    title: "Verified Reviews",
    desc: "We manually check every review for authenticity before publishing.",
  },
  {
    icon: <Star className="w-8 h-8 text-yellow-500" />,
    title: "Unbiased Ratings",
    desc: "No paid placements. Our rating system is 100% neutral.",
  },
  {
    icon: <Search className="w-8 h-8 text-blue-600" />,
    title: "Transparent Process",
    desc: "We show how we analyze each product – clearly and openly.",
  },
  {
    icon: <Users className="w-8 h-8 text-green-600" />,
    title: "Real User Feedback",
    desc: "Every rating comes from real people who actually used the product.",
  },
];

const WhyTrustUs = () => {
  return (
    <section className="my-20 p-2">
      <div className="max-w-7xl mx-auto px-6">
        {/* Animated Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center pb-20 mont-font"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          Why People <span className="primary-color"> Trust Us</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {features.map((item, i) => (
            <motion.div
              key={i}
              className="flex items-start space-x-4 bg-white/80 rounded-xl shadow-md p-6 hover:shadow-lg transition"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: i * 0.3,
                ease: "easeOut",
              }}
              whileHover={{ scale: 1.05 }}
            >
              <div>{item.icon}</div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-1">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyTrustUs;
