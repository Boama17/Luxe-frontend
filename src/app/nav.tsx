"use client"
import Ham from "./items";
import phone from '../assets/img/phone.svg';

export default function Nav() {
  return (
    <nav className="w-full px-4 lg:px-14 py-6 lg:py-10 font-[Poppins]">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <span className="font-bold text-base lg:text-lg">
          LuxeRealty
        </span>
        
        <div className="flex items-center gap-4 lg:gap-8">
          <div className="hidden md:flex items-center gap-2">
            <img src={phone.src} alt="" className='w-4 h-4'/>
            <div className="font-semibold text-sm lg:text-base cursor-pointer">
              054 359 8039
            </div>
          </div>
          <Ham />
        </div>
      </div>
    </nav>
  );
}