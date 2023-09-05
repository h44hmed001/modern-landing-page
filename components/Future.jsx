import Image from 'next/image'
import React from 'react'

const Future = () => {
  return (
    <div className='mt-8 lg:flex items-end  justify-between lg:w-[1300px] mx-auto '>
        <Image width={546} height={607.53} src="/future.png"/>
        <div className='flex mt-6 lg:mt-0 mb-6 flex-col gap-5'>
            <p className='text-[#71E5FF]'>Request Early Access to Get Started</p>
            <h1 className=' font-[900] text-[36px] lg:w-[500px]  bg-clip-text text-3xl text-transparent bg-gradient-to-r from-[#AE67FA] to-[#F49867] '>The possibilities are beyond your imagination</h1>
            <p className='text-[#81AFDD] lg:w-[479px]'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
            <p className='text-[#FF8A71]'>Request Early Access to Get Started</p>
        </div>
      
    </div>
  )
}

export default Future
