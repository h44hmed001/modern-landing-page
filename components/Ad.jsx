import React from 'react'

const Ad = () => {
  return (
    <div className='lg:w-[1300px] mt-20 p-8 flex justify-between items-center rounded-lg mx-auto ad-bg-gradient '>
        <div className='flex flex-col'>
            <span className='text-[15px]'>Request Early Access to Get Started</span>
            <span className='font-semibold text-lg'>Register today & start exploring the endless possiblities.</span>
        </div>
        <div className='bg-black px-7  text-xs lg:text-lg text-white p-4 rounded-full'>
            Get Started
        </div>
      
    </div>
  )
}

export default Ad
