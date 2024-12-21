import one from '../assets/img/near.png';
import two from '../assets/img/second.png';
import three from '../assets/img/three.jpg';

export default function Section(){
    return(
        <div className="sect w-[33rem]">
        <div className="caption mt-4">
<span className="text-[1.1em] font-[Poppins-regular]">
Explore a curated selection of homes that fit your lifestyle and preferences. 
</span>
        </div>
        <div className="buttons flex">
        <div className="list w-max px-10 mt-8 -ml-2 py-3 bg-black text-sm text-white rounded-3xl  cursor-pointer">
            View Listings
        </div>
    <div className="circle px-5 py-5 rounded-full bg-black size-12 mt-8 ml-3  cursor-pointer">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-6 -ml-2 -mt-2">
  <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
</svg>

    </div>
        </div>

        <div className="small flex mt-24">
            <div className="first flex">
            <div className="pics flex -ml-2">
        <img src={one.src} alt="" className='rounded-full h-10 w-10'/>
        <img src={two.src} alt="" className='rounded-full h-10 w-10 -ml-2'/>
        <img src={three.src} alt="" className='rounded-full h-10 w-10 -ml-2'/>
            </div>
            <div className="txt text-sm ml-12 mt-1 w-[10rem]">
More than<br /><span className='-ml-0.5'>1000+</span> property
            </div>
            </div>
            <div className="second mt-0.5 ml-[30rem] text-sm">
                <div className="rating flex">
                <span className='mr-2 -mt-[0.1rem]'>5/5</span>
<div className="stars flex">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
</svg>
                </div>


</div>
<div className="review w-max font-light mt-1">
    <span>20 Reviews on Google</span>
</div>


            </div>
        </div>
    </div>
    );
}