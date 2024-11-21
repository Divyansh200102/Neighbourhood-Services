import React from 'react';

const Authform = ({ type, formData, handleChange, handleSubmit }) => {
  const { username, email, password } = formData;

  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
      {/* Left Side: Form */}
      <div className='bg-white p-6 rounded shadow-md w-80 ml-24'>
        <h2 className='text-xl font-semibold mb-4 text-center'>
          {type === 'register' ? 'Register' : 'Login'}
        </h2>
        <form onSubmit={handleSubmit}>
          {type === 'register' && (
            <div className='mb-4'>
              <label className='block text-sm font-medium text-gray-700'>Username:</label>
              <input
                type='text'
                name='username'
                value={username}
                onChange={handleChange}
                required
                className='mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500'
              />
            </div>
          )}
          <div className='mb-4'>
            <label className='block text-sm font-medium text-gray-700'>Email:</label>
            <input
              type='email'
              name='email'
              value={email}
              onChange={handleChange}
              required
              className='mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500'
            />
          </div>
          <div className='mb-4'>
            <label className='block text-sm font-medium text-gray-700'>Password:</label>
            <input
              type='password'
              name='password'
              value={password}
              onChange={handleChange}
              required
              className='mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500'
            />
          </div>
          <button
            type='submit'
            className='w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none'
          >
            {type === 'register' ? 'Register' : 'Login'}
          </button>
        </form>
      </div>

      {/* Right Side: Image */}
      <div className='hidden md:block w-1/2 h-full ml-60 overflow-hidden'>
        <img
          src='/main_image.jpeg' // Replace with your image URL
          alt='Your Alt Text'
          className='object-cover w-full h-full ransform scale-110'
        />
      </div>
    </div>
  );
};

export default Authform;
