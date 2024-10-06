import React from 'react'

const Places = () => {
  return (
    <div className='flex flex-col laptob:flex-row content-center p-8 bg-gradient-to-b from-sky-800 to-gray-500'>
      <div className='flex flex-col justify-evenly items-center w-1/3 text-center'>
        <h3 className='text-3xl font-sans font-bold text-white'>First Place</h3>
        <h5 className='font-sans text-blue-200 hover:text-blue-400 cursor-pointer'>Click To Show</h5>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius dignissimos maxime repellendus laborum voluptate quibusdam.</p>
      </div>
      <div className='flex flex-col justify-evenly items-center w-1/3 text-center'>
        <h3 className='text-3xl font-sans font-bold text-white'>Second Place</h3>
        <h5 className='font-sans text-blue-200 hover:text-blue-400 cursor-pointer'>Click To show</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta maxime a quas doloremque deserunt minima.</p>
      </div>
      <div className='flex flex-col justify-evenly items-center w-1/3 text-center'>
        <h3 className='text-3xl font-sans font-bold text-white'>Third Place</h3>
        <h5 className='font-sans text-blue-200 hover:text-blue-400 cursor-pointer'>Click To show</h5>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque illo ratione illum corrupti minus.</p>
      </div>
    </div>
  );
};

export default Places;
