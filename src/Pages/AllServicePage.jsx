import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ServiceCard from '../Components/ServiceCard';

const AllServicePage = () => {
  const [services, setServices] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);


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
        const response = await axios.get('http://localhost:3000/allServices', {
          params: { search }
        });
        setServices(response.data);
      } catch (error) {
        console.error('Error fetching services:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, [search]);

  const handleSearch = () => {
    setSearch(searchTerm.trim());
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-4 my-20 poppins">
      <h2 className="text-4xl font-bold text-center my-20 mont-font">
        All <span className='primary-color'>Services</span>
      </h2>

      <div className="max-w-2xl mx-auto mb-12 flex flex-col md:flex-row  gap-2">
        <input
          type="text"
          placeholder="Search by title, category, or company name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow border border-[#0077B6] rounded p-3 text-lg outline-none "
        />
        <button
          onClick={handleSearch}
          className="bg-primary-color text-white px-5 py-3 rounded hover:bg-blue-700  transition duration-200 hover:scale-105 ease-zoom-in"
        >
          Search
        </button>
      </div>

      {loading && <p className="text-center text-gray-500">Loading...</p>}

      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 lg:px-10'>
        {services.length === 0 && !loading && (
          <p className="text-center text-gray-700 col-span-full">No services found.</p>
        )}
        {
          services.map(service => <ServiceCard key={service.id} service={service} /> )
        }
      </div>
    </div>
  );
};

export default AllServicePage;
