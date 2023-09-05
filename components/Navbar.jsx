"use client"
import Image from "next/image";
import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import MobMenu from "./MobMenu";
const Navbar = () => {
  const [mobMenu,setMobMenu]=useState(false)

  return (
    <div className="flex relative  items-center justify-between lg:px-[6rem] lg:py-[2rem] ">
      <div className="flex items-center gap-10">
        <Image width={62.5} height={12.5} src="/logo.png" />
        <div className="lg:flex hidden font-[550] items-center gap-7  text-white">
          
          <span className="cursor-pointer">Home</span>
          <span className="cursor-pointer">What is GPT?</span>
          <span className="cursor-pointer">Open AI</span>
          <span className="cursor-pointer">Case Studies</span>
          <span className="cursor-pointer">Library</span>
        </div>
      </div>
      <div className="flex gap-3 items-center">
      <div className=' md:flex hidden text-white items-center gap-5'>
            <span className=' cursor-pointer'>Sign In</span>
            <span className='bg-[#FF4820] rounded-md flex cursor-pointer items-center justify-center w-[140px] h-[58px] '>Sign Up</span>
            
        </div>
        <div onClick={()=>setMobMenu(true)} className={`text-white ${mobMenu&&"hidden"}  lg:hidden`}>
        <MenuIcon/>
        </div>
        <div onClick={()=>setMobMenu(false)} className={`text-white ${!mobMenu&&"hidden"}  lg:hidden`}>
        <CloseIcon/>
        </div>
        </div>
        {mobMenu&&<MobMenu/>}
    </div>

  );
};

export default Navbar;
