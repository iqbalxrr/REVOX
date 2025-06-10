import React from "react";
import { FaTag } from "react-icons/fa6";
import { FiDollarSign } from "react-icons/fi";
import { Link } from "react-router";

const ServiceCard = ({ service }) => {
  return (
    <div>
      <div className="flex flex-col justify-between bg-white rounded-2xl shadow-md overflow-hidden transition hover:shadow-lg md:h-[550px] hover:scale-102">
        <div>
          <img
            src={service.serviceImage}
            alt={service.serviceTitle}
            className="w-full h-[200px] md:h-[280px] lg:h-[300px] object-cover"
          />
        </div>
        <div className="p-5 space-y-2 pb-7 ">
          <h2 className="text-xl font-semibold">{service.serviceTitle}</h2>
          <p className="text-gray-600 text-sm line-clamp-3">
            {service.description}
          </p>
          <div className="flex justify-between items-center text-[19px] text-gray-500">
           <div className="flex items-center gap-2"><FaTag size={25} /> <span> {service.category}</span></div>
            <div className="flex items-center">
              {" "}
              <FiDollarSign size={25} /> <span> {service.price}</span>
            </div>
          </div>
          <Link to={`/servicedetails/${service._id}`}>
            <button className="mt-3 bg-primary-color text-white w-full px-4 py-2 rounded">
              See Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
