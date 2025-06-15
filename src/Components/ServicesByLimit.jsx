import axios from "axios";
import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const ServicesByLimit = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3000/servicesbylimit")
      .then((res) => {
        setServices(res.data);
        setLoading(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="md:px-6 lg:px-0 ">
      
       
       <h2 className="text-3xl md:text-4xl  font-bold text-center my-20 mont-font">
        Recently <span className="primary-color"> Added Services</span>
      </h2>
      
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 ">
        {services.length === 0 && !loading && (
          <p className="text-center text-gray-700 col-span-full">
            No services found.
          </p>
        )}
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServicesByLimit;
