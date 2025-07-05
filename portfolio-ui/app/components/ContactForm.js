"use client"
import React from 'react'
import { useState } from 'react'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';

function ContactForm() {
  const [formData, setFormData] = useState(
    {
      name: "",
      email: "",
      message: ""
    }
  )

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const submitMessage = async (e) => {
    e.preventDefault();
    try {
      await emailjs.send("service_zebyorr", "template_o8nnigi", formData, "uN-8nsJnZatxK9gZn")
      console.log("submiit")
      toast.success('Message Send Successfully!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light"
      });
      window.location.hash = "#home";
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      console.log("error: ",error)
      toast.error('Failed to send message. Try again!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light"
      });
    }

  }

  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <form onSubmit={submitMessage} className='flex flex-col max-w-xl mx-auto gap-2.5 justify-center items-center text-center'>
        <input type="text" name="name" placeholder='Your Name' minLength={3} maxLength={20} value={formData.name} onChange={handleChange} required className='bg-gray-600 text-gray-300 sm:w-96 h-12 w-80 rounded-lg lg:text-xl sm:text-lg font-normal font-mono text-md p-2 m-2 focus:outline-none focus:ring-2 focus:ring-white' />
        <input type="email" name="email" placeholder='abc@gmail.com' pattern='^[^\s@]+@[^\s@]+\.[^\s@]+$' value={formData.email} onChange={handleChange} required className='bg-gray-600 sm:w-96 h-12 w-80 text-gray-300 rounded-lg lg:text-xl sm:text-lg font-normal font-mono text-md p-2 m-2 focus:outline-none focus:ring-2 focus:ring-white' />
        <textarea name="message" placeholder='Hii, Safdar I want to fix the meeting with you' minLength={30} value={formData.message} rows="10" onChange={handleChange} required className='bg-gray-600 sm:w-96 h-28 w-80 text-gray-300 rounded-lg lg:text-xl sm:text-lg font-normal font-mono text-md p-2 m-2 focus:outline-none focus:ring-2 focus:ring-white'></textarea>
        <button type="submit" className='bg-gray-600 hover:bg-gray-700 text-gray-300 hover:text-gray-400 sm:w-80 h-12 w-72 rounded-2xl lg:text-xl sm:text-lg cursor-pointer font-medium font-mono text-md p-2 m-2'>Send Message</button>
      </form>
    </div>
  )
}

export default ContactForm
