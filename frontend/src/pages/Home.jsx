import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate();

  // Your list of available services
  const availableServices = [
    'house cleaning',
    'lawn care',
    'pet sitting',
    'grocery delivery',
    'handyman services',
    'home tutoring',
    'personal chef',
    'senior care',
    'childcare services',
    'moving services',
  ];

  const handleSearch = () => {
    if (searchInput.trim() === '') {
      // Navigate to the services page if search input is empty
      navigate('/services');
    } else {
      // Check if the service exists
      const formattedInput = searchInput.toLowerCase().replace(/\s+/g, '-');
      if (availableServices.includes(searchInput.toLowerCase())) {
        // Navigate to the specific service page
        navigate(`/services/${formattedInput}`);
      } else {
        // Show a toast message if the service is not available
        toast.error('This service is not currently available.');
      }
    }
  };

  return (

    <div className='relative'>

      <div className=' "absolute top-0 left-0 right-0 flex justify-between items-start p-4'>
        <h1 className='font-bold font-sans'>ServiceSphere</h1>

        <Link to="/services" className="hover:text-blue-500 transition-colors">Services</Link>

      </div>
      <div className=" p-4 bg-slate-200 h-[50vh] w-full"
      style={{
        backgroundImage:'url(https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
        backgroundSize:'cover',
        backgroundPosition:'cover',
      }}
      >
        <h2 className='font-bold text-3xl w-full mt-10 ml-9 ' >
          Find Local Services in Your Neighborhood
        </h2>
        <p className='mt-6 ml-9'>Connect with trusted local service providers</p>

        <input
          type="text"
          placeholder='Search Services'
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)} // Update state on input change
          className='border-2 border-slate-400 w-[20vw] py-2 rounded-full ml-9 mr-3 focus:outline-none pl-3'
        />
        <button
          onClick={handleSearch} // Call handleSearch on button click
          className='rounded-full bg-blue-500 px-5 py-3 text-white mt-10'
        >
          Search
        </button>
      </div>
      <div className='mt-2 p-4 ml-11'>
        <h1 className='font-bold text-2xl'>Popular Categories</h1>
        <div className='flex mt-28 justify-between'>
          <div className='text-center'>
            <img src='/path/to/home-cleaning-icon.png' alt='Home Cleaning' className='mb-2' />
            <h1>Home Cleaning</h1>
          </div>
          <div className='text-center'>
            <img src='/path/to/cleaning-icon.png' alt='Cleaning' className='mb-2' />
            <h1>Cleaning</h1>
          </div>
          <div className='text-center'>
            <img src='/path/to/tutoring-icon.png' alt='Tutoring' className='mb-2' />
            <h1>Tutoring</h1>
          </div>
          <div className='text-center'>
            <img src='/path/to/pet-care-icon.png' alt='Pet Care' className='mb-2' />
            <h1>Pet Care</h1>
          </div>
          <div className='text-center'>
            <img src='/path/to/landscaping-icon.png' alt='Landscaping' className='mb-2' />
            <h1>Landscaping</h1>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>


  )
}

export default Home