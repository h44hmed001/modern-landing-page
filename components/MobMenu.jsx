import React from 'react'

const MobMenu = () => {
  return (
    <div className='text-white flex flex-col lg:hidden bg-[#040c18] p-6 gap-3 rounded-2xl right-0 top-[40px] absolute'>
      <span className="cursor-pointer">Home</span>
          <span className="cursor-pointer">What is GPT?</span>
          <span className="cursor-pointer">Open AI</span>
          <span className="cursor-pointer">Case Studies</span>
          <span className="cursor-pointer">Library</span>
          <div className='flex flex-col md:hidden gap-3'>
          <span className=' cursor-pointer'>Sign In</span>
            <span className='bg-[#FF4820] rounded-md flex cursor-pointer items-center justify-center w-[140px] h-[58px] '>Sign Up</span>
            </div>
    </div>
  )
}

export default MobMenu
