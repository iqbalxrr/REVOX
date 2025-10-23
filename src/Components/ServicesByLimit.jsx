import axios from "axios";
import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import Loader from "./Loader";
import { motion } from "framer-motion";

const ServicesByLimit = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://assigenment-a11-server.vercel.app/servicesbylimit")
      .then((res) => {
        // Ensure we always set an array
        setServices(Array.isArray(res.data) ? res.data : []);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error fetching services:", err);
        // Set empty array on error to prevent map errors
        setServices([]);
        setLoading(false);
      });
  }, []);

  if (!loading && services.length === 0) return <Loader />;

  return (
    <div className="p-2 md:px-6 lg:px-0">
      {/* Animated Heading section...  */}
      <motion.h2
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.2, ease: "easeOut" }}
        className="text-3xl md:text-4xl font-bold text-center mx-auto w-5/6 my-20 mont-font"
      >
        Added<span className="primary-color"> Services</span>
      </motion.h2>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4">
        {Array.isArray(services) && services.map((service, index) => (
          <motion.div
            key={service._id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2.8, delay: index * 0.4, ease: "easeOut" }}
          >
            <ServiceCard service={service} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServicesByLimit;
