import Image from 'next/image'
import React from 'react'

const Article = ({imageSrc,heading,date}) => {
  return (
    <div className='cursor-pointer w-fit'>
        <Image src={imageSrc }  width={420} height={130} />
        <div className="bg-[#042C54] w-fit break-all lg:break-normal  text-white p-4" >
            <p className='font-[700]'>{date}</p>
            <h1 className='font-[500]'>{heading}</h1>
            <p className='pt-10'>Read full article</p>
        </div>
        
      
    </div>
  )
}

export default Article
