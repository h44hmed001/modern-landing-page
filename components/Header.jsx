import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='lg:px-[6rem]  lg:flex xl:justify-between mt-10 items-center lg:py-[2rem]'>
        {/* Header Content */}
        <div className=' xl:w-[900px] '>
          <h1 className=' font-[900] lg:leading-[72px] bg-clip-text   text-transparent bg-gradient-to-r text-[20px] lg:text-[62px] from-[#AE67FA] to-[#F49867] '>Let’s Build Something amazing with GPT-3 OpenAI</h1>
          <p className='text-[#81AFDD]  mt-[20px]  whitespace-break-spaces lg:leading-[27.32px]'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
          <div className='flex mt-[20px]'>
            <input className='bg-[#052D56] w-full text-[#3D6184] outline-none p-4 placeholder:text-[#3D6184]  ' placeholder='Your Email Address' type='email'/>
            <span className='bg-[#FF4820]  flex cursor-pointer items-center justify-center text-white w-[140px] h-[58px] '>Get Started</span>
          </div>
          <div className='lg:flex mt-[20px] text-white items-center gap-3'>
          <Image width={181.79} height={38} alt="" src="/people.png" /> 
          <p>1,600 people requested access a visit in last 24 hours</p>
          </div>
        </div>
        {/* Header Image */}

        <div>
          <Image width={667.41} height={701.59} src="/ai.png"/>

        </div>
      
    </div>
  )
}

export default Header
