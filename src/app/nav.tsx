import phone from '../assets/img/phone.svg';
export default function Nav(){
        return(
            <div className="flex w-64 gap-8 mt-12 ml-14 font-[Poppins]">
                <div className="content flex">
                <span className="font-bold text-base">
                    LuxeRealty
                </span>
            <div className="right mt-1 flex ml-[28rem]">
                <div className="phone flex ">
                   <img src={phone.src} alt="" className='size-4 -ml-4 mt-0.5'/>
            <div className="h3 font-semibold text-sm mt-0.5 ml-2 w-max cursor-pointer"> 054 359 8039 </div>
            <div className="menu mt-0.5 cursor-pointer">
                <div className="flex -mt-4 ml-10">
                <div className=" bg-white flex rounded-3xl px-5 py-2">
                    <span className="text-sm mr-5 mt-[0.45rem] -ml-3 pl-2">MENU</span>
                    <div className="bars w-8 bg-black h-8 content-center rounded-full -mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-5 ml-[0.4rem]">
                            <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                    </svg>
                    </div>
                    </div>
                </div>
                
            </div>
                </div>
            </div>
               
                </div>
            
            </div>
        );
}