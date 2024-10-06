import React from 'react'
import first from '../Images/first.jpg';
import second from '../Images/second.jpeg';
import third from '../Images/venice.jpg';
import fourth from '../Images/venice-Italy.jpg';
import fifth from '../Images/venoo.jpg';



const Cities = () => {
  return (
    <div className='p-8 h-80 flex flex-col items-center justify-between'>
      <div className='flex flex-col items-center'>
        <h3 className='font-medium text-blue-700 text-2xl'>Our Cities</h3>
        <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, minima.</div>
      </div>

      <div className='flex justify-between items-stretch'>
        <img src={first} alt="" className='w-1/6 p-2 hover:p-0 cursor-pointer'/>
        <img src={second} alt="" className='w-1/6  p-2 hover:p-0 cursor-pointer'/>
        <img src={third} alt="" className='w-1/6  p-2 hover:p-0 cursor-pointer'/>
        <img src= {fourth} alt="" className='w-1/6  p-2 hover:p-0 cursor-pointer'/>
        <img src={fifth} alt="" className='w-1/6  p-2 hover:p-0 cursor-pointer'/>
      </div>
    </div>
  )
}

export default Cities
