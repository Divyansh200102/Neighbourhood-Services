import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const ServiceList = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/services');
        console.log('Services fetched', response.data);
        setServices(response.data);
      } catch (error) {
        console.error('Error fetching services:', error.response ? error.response.data : error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);



  if (!loading && services.length === 0) {
    return <div>No services available.</div>;
  }

  return (
    <div>
      <div className="flex justify-between p-4 border-2 border-slate-300 shadow-md hover:shadow-lg bg-white rounded-sm">
        <h1 className='font-bold text-2xl'>ServiceSphere</h1>
      </div>
      <div className="bg-slate-200 p-4 ">
        <h1 className="text-2xl font-bold mt-4 ml-4 mb-3 font-sans">Our Services</h1>
        <h1 className='ml-4 mb-3 text-gray-700'>Discover the wide range of services we offer.</h1>
        <div className='ml-32'>
          <input
            type="text"
            placeholder="Search for services"
            className="border border-gray-200 rounded-full px-4 py-2 w-[70vw] mt-4 focus:outline-none"
          />
          <button className='bg-blue-500 py-2 px-3 rounded-full text-white ml-1'>Search</button>
        </div>

  <div className='flex flex-wrap justify-center mt-4'> {/* Added flex-wrap and center justification */}
  {services.map((service) => (
    <Link key={service._id} to={`/services/${service._id}`} className='mx-4 my-4'> {/* Added margins for spacing */}
      <div className='flex rounded-xl border-2 border-slate-200 w-[20vw] h-[200px] flex-col p-4 bg-white shadow-md hover:shadow-lg'>
        <img src={service.image} alt={service.name} className='w-full h-auto mb-2' /> {/* Image above the heading */}
        <h1 className='font-semibold text-center mt-auto'>{service.name}</h1> {/* Centered at the bottom */}
      </div>
    </Link>
  ))}
</div>

      </div>
    </div>
  );
};

export default ServiceList;