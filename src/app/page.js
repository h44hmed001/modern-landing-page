import Image from 'next/image'
import Navbar from '../../components/Navbar'
import Header from '../../components/Header'
import Brands from '../../components/Brands'
import WhatGpt from '../../components/WhatGpt'
import Features from '../../components/Features'
import Future from '../../components/Future'
import Ad from '../../components/Ad'
import Blog from '../../components/Blog'
// import Footer from '../../components/Footer'
import Wrapper from '../../components/Wrapper'

export default function Home() {
  return (
    <div className=''>
      <div className= 'w-full gradient_bg'>
        <Wrapper>
      <Navbar/>
      <Header/>
      <Brands/>
      <WhatGpt/>
      <Features/>
      <Future/>
      <Ad/>
      <Blog/>
      </Wrapper>
      
      </div>
      
    </div>
  )
}
