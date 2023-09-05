import React from 'react'

const Feature = ({className,headingClass,heading,paragraph}) => {
  return (
    <div className='w-full '>
        <div className='w-[34px] mb-5 bg-gradient-to-r from-[#AE67FA] to-[#F49867] h-[3px]'/>
        
        <div className={className}>
        {heading&&<h1 className={`text-white ${headingClass} max-w-[180px] flex-[1] font-semibold text-[24px]`} >{heading}</h1>}
        {paragraph&&<p className='text-[#81AFDD] break-all max-w-[731px] flex-[2]'>{paragraph}</p>}
        </div>
    </div>
  )
}

export default Feature
