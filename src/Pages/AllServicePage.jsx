import axios from "axios";
import React, { useEffect, useState } from "react";
import ServiceCard from "../Components/ServiceCard";
import { motion, useScroll } from "framer-motion";

const AllServicePage = () => {
  const [services, setServices] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectCategory, setSelectCategory] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const servicesPerPage = 6;
  const [totalServices, setTotalServices] = useState(0);

  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handler = setTimeout(() => {
      setSearch(searchTerm.trim());
    }, 500);
    return () => clearTimeout(handler);
  }, [searchTerm]);

  useEffect(() => {
    const fetchServices = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:3000/allServices", {
          params: {
            search,
            category: selectCategory !== "" ? selectCategory : undefined,
            page: currentPage,
            limit: servicesPerPage,
          },
          withCredentials: true,
        });

        setServices(response.data.services);
        setTotalServices(response.data.total);
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, [search, selectCategory, currentPage]);

  const handleSearch = () => {
    setSearch(searchTerm.trim());
    setCurrentPage(1); // Reset to page 1
  };

  const totalPages = Math.ceil(totalServices / servicesPerPage);

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-4 my-20 poppins">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <h2 className="text-4xl font-bold text-center my-20 mont-font">
        All <span className="primary-color">Services</span>
      </h2>

      <div className="container mx-auto mb-12 flex flex-col md:flex-row justify-between items-center gap-8 px-4 lg:px-10">
        <div className="flex flex-col md:flex-row w-full md:w-2/4 gap-2">
          <input
            type="text"
            placeholder="Search by title, category, or company name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow border border-[#0077B6] rounded p-3 text-lg outline-none"
          />
          <button
            onClick={handleSearch}
            className="bg-primary-color text-white px-5 py-3 rounded hover:bg-blue-700 transition duration-200 hover:scale-105 ease-zoom-in"
          >
            Search
          </button>
        </div>

        <select
          name="category"
          value={selectCategory}
          onChange={(e) => {
            setSelectCategory(e.target.value);
            setCurrentPage(1);
          }}
          className="w-full md:w-1/4 border border-[#0077B6] rounded p-3 text-lg focus:outline-1"
        >
          <option value="">Filter By Category</option>
          <option value="Templates">Templates</option>
          <option value="Mobile App">Mobile App</option>
          <option value="Stock Photos">Stock Photos</option>
          <option value="E-book">E-book</option>
          <option value="WordPress Plugins">WordPress Plugins</option>
          <option value="Online Course">Online Course</option>
          <option value="UI Kit">UI Kit</option>
          <option value="Design Service">Design Service</option>
          <option value="SaaS Tool">SaaS Tool</option>
          <option value="Freelancer">Freelancer</option>
          <option value="Photography">Photography</option>
        </select>
      </div>

      {loading && (
        <div className="flex items-center justify-center h-40">
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 rounded-full border-4 border-blue-500 opacity-30"></div>
            <div className="w-full h-full border-4 border-blue-500 border-t-transparent border-b-transparent rounded-full animate-spin"></div>
            <div className="absolute inset-0 rounded-full shadow-lg shadow-blue-500/50 animate-pulse"></div>
          </div>
        </div>
      )}

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 lg:px-10">
        {services.length === 0 && !loading && (
          <p className="text-center text-gray-700 col-span-full">
            No services found.
          </p>
        )}
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-10">
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span className="text-lg font-semibold">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default AllServicePage;
