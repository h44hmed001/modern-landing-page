import React from 'react'
import Feature from './Feature'

const WhatGpt = () => {
  return (
    <div className='xl:w-[1300px] md:w-[680px] w-[340.29px]   mt-28 whatGpt-bg lg:p-16 p-3   mx-auto'>
        <Feature className="lg:flex   w-full justify-between " paragraph="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by." heading="What is GPT-3" />
        <div className='lg:flex  mt-20 w-full justify-between items-start'>
        <h1 className=' font-bold lg:text-[34px] max-w-[400px] lg:leading-[45px] bg-clip-text lg:text-8xl text-transparent bg-gradient-to-r  from-[#AE67FA] to-[#F49867] '>The possibilities are beyond your imagination</h1>
        <p className='text-[#FF8A71] cursor-pointer '>Explore The Library</p>
        </div>
        <div className='lg:flex  mt-20 gap-4'>
        <Feature className="lg:w-[334px]  flex flex-col gap-12" heading="Chatbots" paragraph="We so opinion friends me message as delight. Whole front do of plate heard oh ought." />
        <Feature className="lg:w-[334px] flex flex-col gap-12" heading="Knowledgebase" paragraph="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
        <Feature className="lg:w-[334px] flex flex-col gap-12" heading="Education" paragraph="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
        </div>
    </div>
  ) 
}

export default WhatGpt
