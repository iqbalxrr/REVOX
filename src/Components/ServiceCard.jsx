import React from "react";
import { FaTag } from "react-icons/fa6";
import { FiDollarSign } from "react-icons/fi";
import { Link } from "react-router";

const ServiceCard = ({ service }) => {
  return (
    <div>
      <div className="flex flex-col justify-between bg-white/90 border-2 border-[#0077B6] rounded-2xl shadow-md overflow-hidden transition hover:shadow-lg md:h-[550px]  hover:scale-102">
        <div>
          <img
            src={service.serviceImage}
            alt={service.serviceTitle}
            className="w-full h-[200px] md:h-[280px]  object-cover"
          />
        </div>
        <div className="p-5 space-y-2 pb-7 ">
          <h2 className="text-xl font-semibold primary-color">{service.serviceTitle}</h2>
          <p className="text-gray-700 text-sm line-clamp-3 ">
            {service.description}
          </p>
          <div className="flex justify-between items-center text-bese text-gray-500">
           <div className="flex items-center gap-2"><FaTag size={25} /> <span> {service.category}</span></div>
            <div className="flex items-center">
              {" "}
              <FiDollarSign size={25} /> <span> {service.price}</span>
            </div>
          </div>
          <Link to={`/servicedetails/${service._id}`}>
            <button className="mt-3 bg-primary-color text-white w-full px-4 py-2 rounded transition duration-200 hover:scale-105 ease-zoom-in ">
              See Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
