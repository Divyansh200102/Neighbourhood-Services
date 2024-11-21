import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Service = () => {
  const { serviceId } = useParams(); // Extract the serviceId from the URL
  const [serviceProvider, setServiceProvider] = useState([]);
  const [service, setService] = useState(null); // To store the service details
  const [loading, setLoading] = useState(true);
  const navigate=useNavigate();

  useEffect(() => {
    const fetchServiceData = async () => {
      try {
        // Fetch the service details
        const serviceResponse = await axios.get(`http://localhost:5000/api/services/${serviceId}`);
        setService(serviceResponse.data);

        // Fetch the service providers for this particular service
        const providerResponse = await axios.get(`http://localhost:5000/api/services/${serviceId}/providers`);
        setServiceProvider(providerResponse.data);
      } catch (error) {
        console.error("Error fetching the service provider", error);
      } finally {
        setLoading(false);
      }
    };
    fetchServiceData();
  }, [serviceId]);

  return (
    <div className="bg-slate-200 min-h-screen">
      {/* Top bar stays outside the bg-slate-200 */}
      <div className="flex justify-between p-4 border-2 border-slate-300 shadow-md hover:shadow-lg bg-white rounded-sm">
        <h1 className="font-semibold text-lg">ServiceSphere</h1>
      </div>

      {/* Main content wrapper */}
      <div className="p-4 ml-5" >
        {service && (
          <>
            <h1 className="font-bold text-2xl mb-3 mt-3">{service.name}</h1>
            <p className="text-gray-600 mb-3">{service.description}</p>
          </>
        )}

        {/* Check if service providers are available */}
        {serviceProvider.length === 0 ? (
          <p>No service providers available for this service</p>
        ) : (
          <div className="w-[80vw] ml-7">
            {/* Filter bar (or anything you want to add) */}
            <input
              type='text'
              placeholder='Search name of the provider'
              className="border-2 border-slate-200 rounded-full p-2 mt-2 bg-white  focus:outline-none w-[50vw] mb-3" />

            {/* Dynamically rendered service providers */}
            {serviceProvider.map((provider) => (
              <div key={provider._id} className="border-2 border-slate-200 rounded-full p-4 mt-2 bg-white shadow-lg flex">
                <div className="flex-1 ml-8">
                  <h1 className="font-bold mt-1">{provider.name}</h1>
                  <p className="text-gray-500 font-semibold mt-1">{provider.description}</p>
                  <p className='mt-1 text-gray-500'>Price: ${provider.price}/hour</p>
                </div>
                <div className="flex justify-end">
                  <button className="bg-blue-400 mr-12  my-6 rounded-full px-7 py-2 text-white " onClick={()=>navigate('/booking')}>Book Now</button>
                </div>
              </div>

            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Service;
