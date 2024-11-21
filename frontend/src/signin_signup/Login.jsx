import React from 'react'
import { useState } from 'react'
import Authform from '../Components/Authform'

const Login = () => {
    const [formData, setFormData] = useState({
        username:'',
        password:'',
    })

    

    const handleChange=(e)=>{
       setFormData({...formData,[e.target.name]: e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("Form submitted sucessfully",formData);
    }
  return (
    <Authform
    type='login'
    formData={formData}
    handleChange={handleChange}
    handleSubmit={handleSubmit}
    />
  )
}

export default Login