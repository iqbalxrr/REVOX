import axios from "axios";
import React, {  useEffect, useState } from "react";
import { useParams } from "react-router";
import RattingSection from "../Components/RattingSection";
import { Helmet, HelmetProvider } from "react-helmet-async";


const DetailsPage = () => {

  
  const { _id } = useParams();

  const [serviceDetails, setServiceDetails] = useState([]);

  // console.log('Service ID:', _id);

  useEffect(() => {
    axios
      .get(`https://assigenment-a11-server.vercel.app/services/${_id}`)
      .then((response) => {
        setServiceDetails(response.data);
        console.log("Service details:", response.data);
      })
      .catch((error) => {
        console.error("Error fetching service details:", error);
      });
  }, [_id]);
  return (
   <HelmetProvider>
    <Helmet>
      <title>Details | Revox </title>
    </Helmet>
     <div className="container mx-auto min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-7 poppins">
      <div className="flex flex-col  md:flex-row  mt-45  rounded-2xl pb-10 gap-16 ">
        <img
          src={serviceDetails.serviceImage}
          alt={serviceDetails.name}
          className="w-full md:w-75  object-cover rounded-2xl shadow-md "
        />

        <div className="flex flex-col flex-1 space-y-5 lg:space-y-6 ">
          <h1 className="text-3xl lg:text-5xl font-bold mont-font md:w-3/4 ">
            {serviceDetails.serviceTitle}
          </h1>

          <p className="text-base lg:text-xl ">
            <span className="font-semibold">Category : </span>{" "}
            {serviceDetails.category}
          </p>

          <p className="text-base lg:text-xl md:w-9/10 ">
            <span className="font-semibold"> Discription : </span>{" "}
            {serviceDetails.description}
          </p>
          <p className="text-base lg:text-xl ">
            <span className="font-semibold"> Company Name : </span>{" "}
            {serviceDetails.companyName}
          </p>

          <p className="text-base lg:text-xl md:w-3/4 overflow-hidden ">
            <span className="font-semibold">Website : </span>
            <a
              href={serviceDetails.website}
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              {" "}
              {serviceDetails.website}
            </a>
          </p>

          <p className="text-base lg:text-xl  ">
            <span className="font-semibold">Price :</span>{" "}
            {serviceDetails.price}$
          </p>
          <p className="text-base lg:text-xl ">
            <span className="font-semibold">Add Date :</span>{" "}
            {serviceDetails.addedDate}
          </p>
        </div>

      </div>

      <hr />

      
        <div>
            <RattingSection reatingId={_id} serviceTitle={serviceDetails.serviceTitle} 
 />
        </div>

    </div>
   </HelmetProvider>
  );
};

export default DetailsPage;
