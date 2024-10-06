import React from 'react';
import myIntro from '../Images/intro.jpg'

const Intro = () => {
  return (
    <div className='p-8 flex flex-col laptob:flex-row justify-evenly items-center'>
      <div  className='w-1/3'>
        <img src={myIntro} alt="" />
      </div>
      <div className='w-1/3 flex flex-col justify-evenly items-start'>
        <h1 className=' text-3xl font-sans font-meduim text-blue-600 mb-5'>Introduction</h1>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo provident voluptatibus similique, iusto eius earum.</div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum magni at tempora maxime quaerat reiciendis.</div>
        <button className='bg-blue-800 rounded p-1 text-white hover:bg-blue-900 mt-5'>Read More</button>
      </div>
    </div>
  );
};

export default Intro;
