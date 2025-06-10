import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ServiceCard from '../Components/ServiceCard';

const AllServicePage = () => {
 
    const [services, setServices] = useState([]);
 
    useEffect(()=> {
       
       axios.get('http://localhost:3000/allServices')
        .then(response => {
            setServices(response.data);
            console.log('All services:', response.data);
        })
        .catch(error => {
            console.error('Error fetching services:', error);
        }); 

    }, []);



    return (
        <div className="min-h-screen  bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-4 my-20 poppins">
            <h2 className="text-4xl font-bold text-center  my-20 mont-font">
            All <span className='primary-color'>Services</span>
          </h2>

          <div className=' container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4'>
            {
                services.map(service => <ServiceCard key={service.id} service={service} /> )
            }
          </div>
        </div>
    );
};

export default AllServicePage;