
import React from "react";
import Header from "@/components/Header";
import Image from "next/image";

const page = () => {
  return (
    <div className="h-screen">
      <Header />
      <div className="flex flex-col md:flex-row h-[100%]">
        
         {/* Left Side Content  */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start p-6 md:p-20 md:pt-[200px]">
          <h1 className="text-[32px] md:text-[38px] font-bold font-Libre Bodoni">
            IMPECCABLE CRAFTSMANSHIP AND FINESSE
          </h1>
          <p className="mt-4 h-auto md:h-[147px] w-full md:w-[500px] text-[18px] md:text-[18px] font-Libre Bodoni text-[#787054]">
            An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.
          </p>
          <button className="md:text-[20px]  bg-[#A29875]  md:w-[250px] h-[80px]  p-2 mt-10 font-Libre Bodoni rounded-lg text-white">
            Explore Now
          </button>
        </div>
        
        {/* Right Side Image */}
        <div className="  flex justify-center items-center p-4 md:p-14 pt-8 md:pt-[120px]">
          <Image
            src="/images/figma_image.svg"
            alt="hero_image"
            width={462}
            height={647}
            className="w-[350px] sm:w-[400px] md:w-[350px] h-auto"
            
          />
          </div> 
     

      </div>
    </div>
  );
};

export default page;

