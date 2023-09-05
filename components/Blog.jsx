import React from "react";
import Article from "./Article";

const Blog = () => {
  const images=[
    {
      src:"/blog1.png"
    },
    {
      src:"/blog2.png"
    },
    {
      src:"/blog3.png"
    },
    {
      src:"/blog4.png"
    },
    
  ]
  return (
    <div className="lg:max-w-[1300px] mt-20 mx-auto">
      <h1 className=" font-[900] mb-7 lg:mb-0 lg:text-[62px] text bg-clip-text text-8xl text-transparent bg-gradient-to-r text-[20px] from-[#AE67FA] to-[#F49867] ">
        A lot is happening,
        <br />
        We are blogging about it.
      </h1>
      <div className="lg:flex gap-4  items-center ">
      <Article imageSrc="/blog5.png" date="Sep 26, 2021" heading="GPT-3 and Open  AI is the future. Let us explore how it is?" />
      <div className="mt-20 lg:gap-4 gap-6 flex flex-col  lg:grid lg:grid-cols-2 ">
        {images.map((image)=><Article date="Sep 26, 2021" imageSrc={image.src} heading="GPT-3 and Open  AI is the future. Let us explore how it is?" />)}
      </div>
      </div>
    </div>
  );
};

export default Blog;
