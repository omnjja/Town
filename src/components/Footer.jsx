import React from 'react'

const Footer = () => {
  return (
    <div className='bg-foot bg-cover bg-center h-screen flex flex-col py-10 px-32'>
      <h1 className='text-3xl font-sans font-bold text-white pb-8'>Contact Us</h1>
      <p className='pb-16 font-sans font-medium text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere saepe exercitationem est repudiandae nobis iste aut minima, neque doloremque itaque harum facilis esse officia eum.</p>
      <div className='flex justify-between text-1xl font-sans font-bold text-white'>
        <div>Phone +201154067033</div>
        <div>Email omniahesham910@gmail.com</div>
      </div>
      <p className='pt-8 font-sans font-medium text-white'>Location: Egypt</p>
      <div className='py-8'>
        <input type="text" placeholder='confirm your email' className='text-white px-2 bg-transparent border-solid border-white border-2 rounded'/>
        <button className='rounded p-1  font-sans font-semibold text-white hover:bg-blue-900 ml-10 bg-gray-400'>Submit</button>
        <div className='flex flex-col items-center justify-end h-72 w-full text-1xl font-sans font-bold text-white'>copyright 2024 Mavi</div>
      </div>
    </div>
  );
};

export default Footer;
