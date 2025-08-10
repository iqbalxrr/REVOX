import React from "react";
import { FaTag } from "react-icons/fa6";
import { FiDollarSign } from "react-icons/fi";
import { Link } from "react-router";
import { motion } from "framer-motion";

const ServiceCard = ({ service }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="max-w-sm mx-auto bg-white border border-[#0077B6] rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-transform duration-300"
    >
      <div className="overflow-hidden rounded-t-3xl">
        <img
          src={service.serviceImage}
          alt={service.serviceTitle}
          className="w-full h-48 md:h-56 object-cover hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-5 flex flex-col justify-between min-h-[280px]">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-[#0077B6] mb-2">
            {service.serviceTitle}
          </h2>
          <p className="text-gray-600 text-sm md:text-base line-clamp-3">
            {service.description}
          </p>
        </div>
        <div className="mt-4 flex justify-between items-center text-gray-500 text-sm md:text-lg">
          <div className="flex items-center gap-2">
            <FaTag size={20} className="text-[#0077B6]" />
            <span className="font-medium">{service.category}</span>
          </div>
          <div className="flex items-center gap-2">
            <FiDollarSign size={20} className="text-[#0077B6]" />
            <span className="font-semibold">{service.price}</span>
          </div>
        </div>
        <Link to={`/servicedetails/${service._id}`}>
          <button className="mt-5 w-full bg-[#0077B6] text-white py-2 rounded-2xl font-semibold hover:bg-[#005f8a] transition-colors duration-300 shadow-md hover:shadow-lg">
            See Details
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
