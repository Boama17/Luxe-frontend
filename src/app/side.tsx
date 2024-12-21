import profile from '../assets/img/profle.jpg';
export default function Side (){
    return (
        <div className="container font-[Poppins-regular] mt-10 ml-[20rem] h-[39rem] w-[30rem] rounded-3xl">
            <div className="content">
                <div className="discount flex flex-col rounded-2xl w-[8rem] ml-[4.3rem] mt-[4rem] shadow-2xl h-28 bg-[#ffffffd0]">
                    <span className="text-[0.6rem] ml-2 mt-2 tracking-wide">
                        Get discount up to 
                    </span>
                    <span className="text-3xl ml-2 mt-1 font-[Poppins-SemiBold]">
                        50%
                    </span>
                    <div className="mt-5 w-[7.2rem] border-gray-300 border-[2px] ml-[0.375rem] bg-[#ffffff14] rounded-2xl border-solid">
                        <div className="now -mt-1"><span className="text-[0.6rem] ml-6">Contact Now</span></div>
                    </div>
                </div>
                <div className="play flex flex-col rounded-2xl w-[12rem] ml-[16rem] mt-8 shadow-2xl h-24 bg-[#ffffffd0]">
            <div className="head flex ml-3 mt-3">
                <div className="green w-4 h-4 bg-green-800 rounded-full"></div>
                <span className="text-xs ml-3">House tour</span>
            </div>
            <div className="enter place-content-center rounded-xl w-[11.08rem] ml-2 mt-2 shadow-2xl h-[3.3rem]">
            <div className="play flex rounded-3xl w-20  h-8 bg-white ml-12"> 
                <span className="font-bold text-sm ml-3 place-content-center">Play</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 mt-1 ml-1">
                    <path d="M5.055 7.06C3.805 6.347 2.25 7.25 2.25 8.69v8.122c0 1.44 1.555 2.343 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.343 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256l-7.108-4.061C13.555 6.346 12 7.249 12 8.689v2.34L5.055 7.061Z" />
                </svg>

            </div>
            </div>
                </div>
                <div className="profile flex flex-col rounded-2xl w-[10rem] ml-[3rem] mt-8 shadow-2xl h-[6.6rem] bg-[#ffffffd0] ">
                   <div className="profile pt-3">
                    <img src={profile.src} alt="" className='h-8 w-7 ml-3 rounded-lg' />
                   </div> 
                   <div className="capt mt-3">
                    <p className='text-[0.4rem] ml-2 leading-[0.8rem] justify-center'>
                        Developed by expert architects with years of experience and a passion for creating expectional living spaces.
                    </p>
                   </div>
                </div>
                <div className="price flex flex-col rounded-2xl w-[8rem] ml-[18.5rem] mt-2 shadow-2xl h-28 bg-[#ffffffd0] shadow-3xl">
                <span className="text-[0.6rem] ml-2 mt-2 tracking-wide">
                    Green House
                    </span>
                    <span className="text-xl ml-2 mt-1 font-semibold font-[Ethereal]">
                    ＄<span className='-ml-1'>450,000</span>
                    </span>
                    <p className='text-[0.45rem] text-gray-500 ml-2 mt-5'>
                        Minimalist modern house for family
                    </p>
                </div>
                
            </div>
        </div>
    );

}