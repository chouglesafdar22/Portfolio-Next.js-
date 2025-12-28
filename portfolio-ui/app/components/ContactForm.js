"use client"
import React from 'react'
import { useState } from 'react'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import Link from 'next/link';
import { SecondaryButton } from './Button';

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
      toast.success(`${formData.name} Your Message Send Successfully`, {
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
      toast.error(`${formData.name} Failed to send your message. Try again!`, {
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
      <div className='flex flex-col gap-[1px]'>
        <form onSubmit={submitMessage} className='flex flex-col max-w-xl mx-auto gap-2.5 justify-center items-center text-center'>
          <input type="text" name="name" placeholder='Name' minLength={3} maxLength={20} value={formData.name} onChange={handleChange} required className='bg-gray-600 text-gray-300 sm:w-96 h-12 w-80 rounded-lg lg:text-xl sm:text-lg font-normal font-mono text-base p-2 m-2 focus:outline-none focus:ring-2 focus:ring-white' />
          <input type="email" name="email" placeholder='Email' pattern='^[^\s@]+@[^\s@]+\.[^\s@]+$' value={formData.email} onChange={handleChange} required className='bg-gray-600 sm:w-96 h-12 w-80 text-gray-300 rounded-lg lg:text-xl sm:text-lg font-normal font-mono text-base p-2 m-2 focus:outline-none focus:ring-2 focus:ring-white' />
          <textarea name="message" placeholder='Message' minLength={30} value={formData.message} rows="10" onChange={handleChange} required className='bg-gray-600 sm:w-96 h-28 w-80 text-gray-300 rounded-lg lg:text-xl sm:text-lg font-normal font-mono text-base p-2 m-2 focus:outline-none focus:ring-2 focus:ring-white'></textarea>
          <button type="submit" className='bg-gray-600 hover:bg-gray-700 text-gray-300 hover:text-gray-400 sm:w-80 h-12 w-72 rounded-2xl lg:text-xl sm:text-lg cursor-pointer font-medium font-mono text-base p-2 m-2'>Send Message</button>
        </form>
        <p className='text-gray-300 lg:text-lg sm:text-base font-medium font-mono text-sm p-2 m-2'>or</p>
        <Link href={"https://cal.com/safdarchougle"} target='_blank' rel="noopener noreferrer">
          <button className='bg-gray-600 hover:bg-gray-700 text-gray-300 hover:text-gray-400 sm:w-80 h-12 w-72 rounded-2xl lg:text-xl sm:text-lg cursor-pointer font-medium font-mono text-base p-2 m-2'>Schedule Meeting</button>
        </Link>
      </div>
    </div>
  )
}

export default ContactForm
