import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import RattingSection from "../Components/RattingSection";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Swal from "sweetalert2";
import { AuthContext } from "../Contex/AuthProvider"; // Assuming you have AuthContext

const DetailsPage = () => {
  const { _id } = useParams();
  const [serviceDetails, setServiceDetails] = useState({});
  const { user } = useContext(AuthContext); // get logged-in user info

  useEffect(() => {
    axios
      .get(`https://assigenment-a11-server.vercel.app/services/${_id}`)
      .then((response) => {
        setServiceDetails(response.data);
      })
      .catch((error) => {
        console.error("Error fetching service details:", error);
      });
  }, [_id]);

  const handleBookmark = () => {
    if (!user?.email) {
      Swal.fire({
        icon: "warning",
        title: "Not logged in",
        text: "Please log in to bookmark services.",
      });
      return;
    }

    axios
      .post("https://assigenment-a11-server.vercel.app/bookmarks", {
        email: user.email,
        serviceId: _id,
        serviceTitle: serviceDetails.serviceTitle,
        serviceImage: serviceDetails.serviceImage,
        category: serviceDetails.category,
        price: serviceDetails.price,
      })
      .then((response) => {
        Swal.fire({
          icon: "success",
          title: "Bookmarked!",
          text: `${serviceDetails.serviceTitle} has been added to your bookmarks.`,
          timer: 2000,
          showConfirmButton: false,
        });
      })
      .catch((error) => {
        console.error("Error saving bookmark:", error);
        Swal.fire({
          icon: "error",
          title: "Failed!",
          text: "Something went wrong. Try again.",
        });
      });
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>Details | Revox </title>
      </Helmet>
      <div className="container mx-auto min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-7 poppins">
        <div className="flex flex-col md:flex-row mt-45 rounded-2xl pb-10 gap-16">
          <img
            src={serviceDetails.serviceImage}
            alt={serviceDetails.serviceTitle}
            className="w-full md:w-75 object-cover rounded-2xl shadow-md"
          />

          <div className="flex flex-col flex-1 space-y-5 lg:space-y-6">
            <h1 className="text-3xl lg:text-5xl font-bold mont-font md:w-3/4">
              {serviceDetails.serviceTitle}
            </h1>

            <p className="text-base lg:text-xl">
              <span className="font-semibold">Category: </span>
              {serviceDetails.category}
            </p>

            <p className="text-base lg:text-xl md:w-9/10">
              <span className="font-semibold">Description: </span>
              {serviceDetails.description}
            </p>

            <p className="text-base lg:text-xl">
              <span className="font-semibold">Price: </span>
              {serviceDetails.price}$
            </p>

            <button
              onClick={handleBookmark}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg mt-4 w-fit"
            >
              Add to Bookmark
            </button>
          </div>
        </div>

        <hr />
        <div>
          <RattingSection
            reatingId={_id}
            serviceTitle={serviceDetails.serviceTitle}
          />
        </div>
      </div>
    </HelmetProvider>
  );
};

export default DetailsPage;
