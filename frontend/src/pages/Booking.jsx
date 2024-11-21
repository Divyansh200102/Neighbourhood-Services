import React from 'react';
import { toast } from 'react-toastify'; // Only import toast
import { useNavigate } from 'react-router-dom';

const Booking = () => {
  const navigate = useNavigate();

  const handleBooking = () => {
    toast.success('Booking is confirmed'); // Show toast message
    setTimeout(() => {
      navigate('/home'); // Redirect after a delay
    }, 2000);
  };

  return (
    <div className='bg-slate-200 min-h-screen'>
       <div className="flex justify-between p-4 border-2 border-slate-300 shadow-md hover:shadow-lg bg-white rounded-sm">
        <h1 className="font-semibold text-lg">ServiceSphere</h1>
      </div>
      <div className='border border-slate-200  min-h-[80vh] mt-4 mx-7 bg-white '>
        <div className='flex'>
          <h1 className='border-2 border-slate-200 bg-slate-200 rounded-full px-1 py-3 ml-3 mt-3'>profile</h1>
          <h1 className='ml-3 font-bold text-lg mt-3'>CleanPro Services</h1>
          {/* star ratings here along with review number */}
        </div>
        <div className='flex mt-4 ml-5'>
          {/* Select Service Section on the Left */}
          <div className='flex flex-col mr-4'>
            <div className='w-[30vw]'>
              <h1 className='font-semibold'>1. Select Service</h1>
              <h1 className='border-2 border-slate-200 bg-slate-200 rounded-md mt-1'>box1</h1> 
            </div>
            <div>
              <h1 className='font-semibold mt-4'>2. Choose Date and Time</h1>
              <h1 className='border-2 border-slate-200 bg-slate-200 min-h-[20vh] w-[30vw] mb-3 rounded-md mt-1'>box1</h1>
              <h1 className='border-2 border-slate-200 bg-slate-200 w-[30vw] rounded-md'>Select time</h1>
            </div>
            <div className='mt-4'>
              <h1 className='font-semibold'>3. Additional Information</h1>
              <input
                type="text"
                placeholder='Special requests or instructions'
                className='bg-slate-200 h-[20vh] w-[60vw] focus:outline-none rounded-md mt-1 mb-6'
              />
            </div>
          </div>

          {/* Booking Summary Section on the Right */}
          <div className='flex flex-col items-end pl-36'>
            <div className='border-2 border-slate-200 bg-slate-200 w-[20vw] min-h-[60vh] mb-3 rounded-md text-center font-semibold'>
              Booking Summary
            </div>
            <button className='bg-blue-400 text-white py-2 rounded-full w-[20vw]' onClick={handleBooking}>
              Confirm booking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
