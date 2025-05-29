"use client";
import green from "../../assets/img/green.png";
import purple from "../../assets/img/purple.png";
import amber from "../../assets/img/amber.png";
import React from "react";
import Image from "next/image";
import Flora from "@/components/ui/flora";

export default function About() {
  return (
    <div className="cont bg-white pb-12 font-sans">
      <div className="hero flex flex-col lg:flex-row items-center lg:items-start px-6 lg:px-12 md:pt-24 pt-12">
        <div className="flex items-center gap-7 me-12 mb-8 lg:mb-0">
         <Flora />
          <span className="font-[Poppins-Regular] text-sm">(About Us)</span>
        </div>
        <p className="lg:ms-auto lg:me-auto font-[Poppins-regular] leading-loose font-bold lg:max-w-[41rem] text-base text-center lg:text-left">
          We believe that finding the perfect home or office space should be an
          enjoyable and stress-free experience. Our team of dedicated
          professionals brings a wealth of knowledge and experience to the table.
          With a deep understanding of the <br /> local market and a commitment
          to personalized service, we strive to make every transaction seamless
          and satisfying.
        </p>
      </div>

      <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-[Poppins-Regular] gap-8 px-6 lg:px-12 mt-10 pb-16 max-w-7xl mx-auto">
        <div className="card bg-[#e8f9e8] p-8 w-full h-auto min-h-[28rem] rounded-2xl transition-transform transform hover:scale-105 hover:shadow-lg">
          <Image
            src={green}
            className="mx-auto"
            alt="Experienced icon"
            width={200}
            height={200} 
          />
          <h2 className="mt-6 text-3xl font-[Poppins] text-left">Experienced</h2>
          <p className="text-sm mt-4 leading-[1.5rem] text-left text-gray-600 font-[Poppins-regular]">
            With over 10 years of experience in the real estate industry, we know
            what it takes to find the perfect home for you.
          </p>
        </div>

        <div className="card bg-[#cdc9dc] p-8 w-full h-auto min-h-[28rem] rounded-2xl transition-transform transform hover:scale-105 hover:shadow-lg">
          <Image
            src={purple}
            className="mx-auto"
            alt="Extensive Network icon"
            width={200}
            height={200}
            priority
          />
          <h2 className="mt-6 text-3xl font-[Poppins] text-left">
            Extensive Network
          </h2>
          <p className="text-sm mt-4 leading-[1.5rem] text-left text-gray-600 font-[Poppins-regular] ">
            We have a wide network that includes the best properties across the
            city and surrounding areas.
          </p>
        </div>

        <div className="card bg-[#f6f3d0] p-8 w-full h-auto min-h-[28rem] rounded-2xl transition-transform transform hover:scale-105 hover:shadow-lg">
          <Image
            src={amber}
            className="mx-auto"
            alt="Top-Notch Customer Service icon"
            width={200}
            height={200}
            priority
          />
          <h2 className="mt-6 text-3xl font-[Poppins] text-left">
            Top-Notch Customer Service
          </h2>
          <p className="text-sm mt-4 leading-[1.5rem] text-left text-gray-600 font-[Poppins-regular]">
            Our team is available 24/7 to assist you with friendly and
            professional service.
          </p>
        </div>
      </div>
    </div>
  );
}