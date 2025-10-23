import axios from "axios";
import React, { useEffect, useState } from "react";
import ServiceCard from "../Components/ServiceCard";
import { motion, useScroll } from "framer-motion";
import { Helmet, HelmetProvider } from "react-helmet-async";

const AllServicePage = () => {
  const [services, setServices] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectCategory, setSelectCategory] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const servicesPerPage = 8;
  const [totalServices, setTotalServices] = useState(0);

  const { scrollYProgress } = useScroll();

  // Debounce search input
  useEffect(() => {
    const handler = setTimeout(() => {
      setSearch(searchTerm.trim());
      setCurrentPage(1); // Reset page on new search
    }, 500);
    return () => clearTimeout(handler);
  }, [searchTerm]);

  // Fetch services on filter, search or pagination change
  useEffect(() => {
    const fetchServices = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://assigenment-a11-server.vercel.app/allServices",
          {
            params: {
              search,
              category: selectCategory || undefined,
              page: currentPage,
              limit: servicesPerPage,
            },
            withCredentials: true,
          }
        );

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

  const totalPages = Math.ceil(totalServices / servicesPerPage);

  return (
    <HelmetProvider>
      <Helmet>
        <title>All Services | Revox</title>
      </Helmet>

      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <div className="relative min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-4 my-20 poppins">
        <h2 className="text-4xl font-extrabold text-center my-20 mont-font">
          All <span className="primary-color">Services</span>
        </h2>

        {/* Search & Filter */}
        <div className="container mx-auto mb-12 flex flex-col md:flex-row justify-between items-center gap-6 px-4 lg:px-10 ">
          <div className="flex flex-col md:flex-row w-full md:w-2/4 gap-3">
            <input
              type="text"
              placeholder="Search by title, category, or company name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-grow border border-[#0077B6] rounded-lg p-3 text-lg outline-none focus:ring-2 focus:ring-blue-400 transition"
              aria-label="Search services"
            />
          </div>

          <select
            name="category"
            value={selectCategory}
            onChange={(e) => {
              setSelectCategory(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full md:w-1/4 border border-[#0077B6] rounded-lg p-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            aria-label="Filter by category"
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

        {/* Loading Spinner */}
        {loading ? (
          <div className="flex items-center justify-center h-48">
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 rounded-full border-4 border-blue-500 opacity-30"></div>
              <div className="w-full h-full border-4 border-blue-500 border-t-transparent border-b-transparent rounded-full animate-spin"></div>
              <div className="absolute inset-0 rounded-full shadow-lg shadow-blue-500/50 animate-pulse"></div>
            </div>
          </div>
        ) : (
          <>
            {/* Services Grid */}
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4 lg:px-10">
              {services.length === 0 && (
                <p className="text-center text-gray-700 col-span-full">
                  No services found.
                </p>
              )}
              {services.map((service) => (
                <ServiceCard key={service._id} service={service} />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-4 mt-12">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-5 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 transition"
                  aria-label="Previous page"
                >
                  Previous
                </button>
                <span className="text-base font-semibold">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={() =>
                    setCurrentPage((p) => (p < totalPages ? p + 1 : p))
                  }
                  disabled={currentPage === totalPages}
                  className="px-5 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 transition"
                  aria-label="Next page"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </HelmetProvider>
  );
};

export default AllServicePage;

