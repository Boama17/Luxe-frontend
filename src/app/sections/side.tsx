import Image from 'next/image';
import profile from '../../assets/img/profle.jpg';
import heroBg from '../../assets/img/hero.png';
import nearImg from '../../assets/img/near.png';

export default function Side() {
    return (
        <div className="container md:mt-7 -mt-5 ms-auto me-auto font-[Poppins-regular] md:h-[40rem] h-[40rem] md:w-[30rem] w-[25rem] rounded-3xl relative overflow-hidden">
            {/* Background image using Next.js Image component */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={heroBg}
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    className="rounded-3xl"
                />
            </div>
            
            <div className="content pt-0.5 relative z-10">
                <div className="discount flex flex-col rounded-2xl w-[8rem] md:ml-[4.3rem] ms-8 mt-[4rem] shadow-2xl h-28 bg-[#ffffffd0]">
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
                
                <div className="tour flex flex-col rounded-2xl w-[10rem] md:w-[12rem] ms-[14rem] md:ms-[16rem] mt-8 shadow-2xl h-24 bg-[#ffffffd0]">
                    <div className="head flex ml-3 mt-3">
                        <div className="green w-4 h-4 bg-green-800 rounded-full"></div>
                        <span className="text-xs ml-3">House tour</span>
                    </div>
                    <div className="relative rounded-xl w-[8rem] md:w-[11.08rem] ms-auto me-auto mt-2 shadow-2xl h-[3.3rem] overflow-hidden">
                        <Image
                            src={nearImg}
                            alt="House tour"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-xl"
                        />
                        <div className="absolute inset-0 flex justify-center items-center">
                            <div className="play flex rounded-3xl w-20 h-8 bg-white"> 
                                <span className="font-bold text-sm ml-3 place-content-center">Play</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 mt-1 ml-1">
                                    <path d="M5.055 7.06C3.805 6.347 2.25 7.25 2.25 8.69v8.122c0 1.44 1.555 2.343 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.343 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256l-7.108-4.061C13.555 6.346 12 7.249 12 8.689v2.34L5.055 7.061Z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="profile flex flex-col rounded-2xl w-[10rem] md:ml-[3rem] ms-[2rem] mt-8 shadow-2xl h-[6.6rem] bg-[#ffffffd0]">
                    <div className="profile pt-3">
                        <Image
                            src={profile}
                            alt="Developer profile"
                            width={32}
                            height={32}
                            className="h-8 w-8 ml-3 rounded-full"
                        />
                    </div> 
                    <div className="capt mt-3">
                        <p className='text-[0.4rem] ms-2 leading-[0.8rem] justify-center'>
                            Developed by expert architects with years of experience and a passion for creating exceptional living spaces.
                        </p>
                    </div>
                </div>
                
                <div className="price flex flex-col rounded-2xl w-[8rem] md:ms-[18.5rem] ms-auto me-8 shadow-2xl h-28 bg-[#ffffffd0] shadow-3xl">
                    <span className="text-[0.6rem] ms-2 mt-2 tracking-wide">
                        Green House
                    </span>
                    <span className="text-xl ms-2 mt-1 font-semibold font-[Ethereal]">
                        ＄<span className='-ms-1'> 450,000</span>
                    </span>
                    <p className='text-[0.45rem] text-gray-500 ms-2 mt-5'>
                        Minimalist modern house for family
                    </p>
                </div>
            </div>
        </div>
    );
}