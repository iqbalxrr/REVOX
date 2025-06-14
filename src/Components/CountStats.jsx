
import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import axios from "axios";

const CountStats = () => {
  const [counts, setCounts] = useState({
    users: 0,
    reviews: 0,
    services: 0
  });

  useEffect(() => {
    // Call your backend API
    axios.get("http://localhost:3000/counts")
      .then(res => {
        setCounts(res.data); 
      })
      .catch(err => {
        console.error("Error fetching counts:", err);
      });
  }, []);

  return (
   <div className="container mx-auto my-20 mont-font px-5 md:px-10 lg:px-4 ">

  
    
     <div className="text-center mb-8  ">
        <h2 className="text-3xl md:text-4xl font-bold text-center ">
      Platform <span className="primary-color"> Statistics</span>
    </h2>
        <p className="text-gray-500 mt-2">Live stats of our users, services, reviews and sponsors.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4 text-center my-10  primary-color  *:bg-white *:p-7 *:rounded-lg">
      <div className="p-5 text-4xl">
        <h3 className=" font-bold">👥 <br /> Users</h3>
        <CountUp end={counts.users} duration={5} separator="," />+
      </div>
      <div className=" p-5 text-4xl">
        <h3 className="font-bold">📝 <br /> Reviews</h3>
        <CountUp end={counts.reviews} duration={5} separator="," />+
      </div>
      <div className=" p-5 text-4xl">
        <h3 className=" font-bold">🛠️ <br /> Services</h3>
        <CountUp end={counts.services} duration={5} separator="," />+
      </div>
      <div className=" p-5 text-4xl">
        <h3 className=" font-bold"> 🤝 <br /> Sponsors</h3>
        <CountUp end={120} duration={5} separator="," />+
      </div>
    </div>
   </div>
  );
};

export default CountStats;
