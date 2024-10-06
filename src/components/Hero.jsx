import React from 'react';


const Hero = () => {
  return (
    <div className='bg-myHero bg-cover h-dvh bg-center'>
        <div className="flex justify-between h-1/6">
            <div>
                <div className='p-5 text-3xl font-sans font-bold text-white hover:text-green-950 cursor-pointer'>Online</div>
            </div>
            <div className= "flex flex-col pt-5 text-3xl font-sans font-bold text-white laptob:flex-row cursor-pointer ">
                <div className=' pr-5 hover:text-green-950'>Introduction</div>
                <div className=' pr-5 hover:text-green-950'>Places</div>
                <div className=' pr-5 hover:text-green-950'>Contact US</div>
            </div>
        </div>
        <section className='flex flex-col justify-center items-center h-5/6 font-sans text-orange-200 font-medium text-3xl'>
            <div>Italy</div>
            <div>Venice</div>
            <div>taken by <span className='text-red-500'>Omnjja</span></div>
        </section>

    </div>

  );
};

export default Hero;
