import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Registration from './signin_signup/Registration';
import Login from './signin_signup/Login';
import Booking from './pages/Booking';
import Service from './pages/Service';
import Home from './pages/Home';
import ServiceList from './pages/ServiceList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <>
      <ToastContainer /> 
      <Routes>
        <Route path='/register' element={<Registration />} />
        <Route path='/' element={<Navigate to='/register' />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/services' element={<ServiceList />} />
        <Route path='/booking' element={<Booking />} />
        <Route path='/services/:serviceId' element={<Service />} />
      </Routes>
    </>
  );
}
