import React, { useEffect } from 'react'
import  {TypeAnimation}  from 'react-type-animation';
import demo from '../../assets/demo.jpg'
import hey from '../../assets/hey.png'
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img4 from '../../assets/img4.jpg'
import img5 from '../../assets/img5.jpg'
import img6 from '../../assets/img6.jpg'
import img7 from '../../assets/img7.jpg'
import img8 from '../../assets/img8.jpg'
import img9 from '../../assets/img9.jpg'
import img10 from '../../assets/img10.jpg'
import img11 from '../../assets/img11.jpg'
import img12 from '../../assets/img12.jpg'
import event2 from '../../assets/event2.jpg'
import event3 from '../../assets/event3.jpg'
import video1 from '../../assets/video1.mp4'
import video2 from '../../assets/video2.mp4'
import video3 from '../../assets/video3.mp4'
import AOS from 'aos'
import 'aos/dist/aos.css';



export function Home(props) {

  useEffect(()=>{
    AOS.init({duration:2000});
  },[])
  AOS.init();

  return (
    
    <>
      <div className="relative w-full overflow-x-hidden">
      
      {/* Hero Section */}
       <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
          <div className="absolute inset-x-0 -top-[4rem] -z-10 transform-gpu overflow-hidden blur-3xl md:-top-[10rem]">
            <svg
              className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
              viewBox="0 0 1155 678"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
                fillOpacity=".6"
                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
              />
              <defs>
                <linearGradient
                  id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                  x1="1155.49"
                  x2="-78.208"
                  y1=".177"
                  y2="474.645"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#9089FC" />
                  <stop offset={1} stopColor="#FF80B5" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <h1 data-aos="zoom-in" transition={{ duration: 1.5 }} style={{fontFamily:'GraublauWeb',fontWeight:'bold'}} className="mt-8 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
            Hey There Verto! 
          </h1>
          <h1 className="mt-8 text-[20px] font-bold tracking-tight text-black md:text-4xl lg:text-3xl">
            <span style={{fontFamily:'GraublauWeb',fontWeight:'bold'}} className="mt-8 text-[20px] font-bold tracking-tight text-black md:text-4xl lg:text-3xl">Welcome to </span>
            <TypeAnimation 
          sequence={[
            ' Undiscovered',
            1500, // wait 1s before replacing "Mice" with "Hamsters"
            ' Path',
            1500
          ]}
          speed={50}
          style={{fontFamily:'GraublauWeb',fontWeight:'bold'}}
          className="mt-8 text-[20px] text-[#CB00CC] font-bold tracking-tight md:text-4xl lg:text-3xl"   
          repeat={Infinity}></TypeAnimation> 
          </h1>
          <p style={{fontFamily:'GraublauWeb',fontWeight:'bold'}} className="mt-6 text-lg leading-8 text-gray-600">
              We the entire community of Undiscovered Path, 
              We extend a warm and enthusiastic welcome to you all! Whether you're a returning member
               or a newcomer, we're thrilled to have you join us on this exciting journey filled with creativity, diversity, and fun.
            </p>
        </div>
       <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
          <img src={hey}></img>
        </div>
      </div>

      <hr className="mt-6 max-w-7xl mx-auto" />
      <div >
        <h1  animate={{y:0}} transition={{ duration: 1.5 }}  style={{fontFamily:'GraublauWeb',fontWeight:'bold'}} className='flex justify-center items-center text-3xl font-bold mt-10 mb-10 lg:text-5xl'>Our Past Events</h1>
      </div>
      <hr className=" m-12 max-w-7xl mx-auto" />

      <div className='w-full h-screen relative'>
        <video autoPlay muted loop src={video1} className='absolute inset-0 w-full h-full object-cover'></video>
        <div className='absolute inset-0 bg-black opacity-50'></div>
        <h1 data-aos="fade-up" style={{fontFamily:'GraublauWeb',fontWeight:'bold'}} className=' absolute inset-0  flex justify-start items-end m-8 text-3xl text-white lg:text-5xl'>
          Mr. Punjab BodyBuilding Championship 2024
        </h1>
    </div>
      <div className='w-full h-screen relative'>
        <video autoPlay muted loop src={video2} className='absolute inset-0 w-full h-full object-cover'></video>
        <div className='absolute inset-0 bg-black opacity-50'></div>
        <h1 data-aos="fade-up" style={{fontFamily:'GraublauWeb',fontWeight:'bold'}} className='absolute inset-0  flex justify-start items-end m-8  text-white text-3xl lg:text-5xl'>
          Virasat-E-Khalsa
        </h1>
    </div>
      <div className='w-full h-screen relative'>
        <video autoPlay muted loop src={video3} className='absolute inset-0 w-full h-full object-cover'></video>
        <div className='absolute inset-0 bg-black opacity-50'></div>
        <h1 data-aos="fade-up" style={{fontFamily:'GraublauWeb',fontWeight:'bold'}} className='absolute inset-0  flex justify-start items-end m-8  text-white text-3xl lg:text-5xl'>
          Slow Cycle Race : Journey Back to Childhood
        </h1>
    </div>
      
      <div className='w-full h-screen relative'>
         <img src={event3} className='absolute inset-0 w-full h-full object-cover' alt='Demo' />
        <div className='absolute inset-0 bg-black opacity-50'></div>
        <h1 data-aos="fade-up" style={{fontFamily:'GraublauWeb',fontWeight:'bold'}} className='absolute inset-0  flex justify-start items-end m-8  text-white text-3xl lg:text-5xl'>
          Meditation  & Yoga for Mental Health
        </h1>
    </div>
    <div className='w-full h-screen relative'>
        <img src={event2} className='absolute inset-0 w-full h-full object-cover' alt='Demo' />
        <div className='absolute inset-0 bg-black opacity-50'></div>
        <h1 data-aos="fade-up" style={{fontFamily:'GraublauWeb',fontWeight:'bold'}} className='absolute inset-0  flex justify-start items-end m-8  text-white text-3xl lg:text-5xl'>
          Invoking Inner Powers
        </h1>
    </div>

      
      <hr className="mt-6 max-w-7xl mx-auto" />
      <div>
        <h1 style={{fontFamily:'GraublauWeb',fontWeight:'bold'}} className='flex justify-center items-center font-bold mt-10 mb-10 text-3xl lg:text-5xl'>Our Upcoming Events</h1>
      </div>
      <hr className=" m-12 max-w-7xl mx-auto" />

      <div className='w-full h-screen relative'>
        <img src={demo} className='absolute inset-0 w-full h-full object-cover' alt='Demo' />
        <div className='absolute inset-0 bg-black opacity-50'></div>
        <h1 data-aos="fade-up" style={{fontFamily:'GraublauWeb',fontWeight:'bold'}} className='absolute inset-0  flex justify-start items-end m-8  text-white text-3xl lg:text-5xl'>
          Farming in rainy season
        </h1>
    </div>
      <div className='w-full h-screen relative'>
        <img src={demo} className='absolute inset-0 w-full h-full object-cover' alt='Demo' />
        <div className='absolute inset-0 bg-black opacity-50'></div>
        <h1 data-aos="fade-up" style={{fontFamily:'GraublauWeb',fontWeight:'bold'}} className='absolute inset-0  flex justify-start items-end m-8  text-white text-3xl lg:text-5xl'>
          Farming in rainy season
        </h1>
    </div>

     

          <hr className="mt-6 max-w-7xl mx-auto" />
      <div>
        <h1 style={{fontFamily:'GraublauWeb',fontWeight:'bold'}} className='flex justify-center items-center  font-bold mt-10 mb-10 text-3xl lg:text-5xl'>Our Community Glimps</h1>
      </div>
      <hr className=" m-12 max-w-7xl mx-auto" />

     <article>
    <div class='flex'>
        <ul class='glimsul'>
            <li class='glimsli'><img class='glimsimg' src={img1}/></li>
            <li class='glimsli'><img class='glimsimg' src={img2} /></li>
            {/* <li class='glimsli'><img class='glimsimg' src={img3} /></li> */}
            <li class='glimsli'><img class='glimsimg' src={img5} /></li>
            <li class='glimsli'><img class='glimsimg' src={img4} /></li>
            <li class='glimsli'><img class='glimsimg' src={img6} /></li>
            <li class='glimsli'><img class='glimsimg' src={img7} /></li>
            <li class='glimsli'><img class='glimsimg' src={img8} /></li>
            <li class='glimsli'><img class='glimsimg' src={img9} /></li>
            <li class='glimsli'><img class='glimsimg' src={img10} /></li>
            <li class='glimsli'><img class='glimsimg' src={img11} /></li>
            <li class='glimsli'><img class='glimsimg' src={img12} /></li>
        </ul>
    </div>
    <div>
        <ul class='glimsul'>
            <li class='glimsli'><img class='glimsimg' src={img1} /></li>
            <li class='glimsli'><img class='glimsimg' src={img2} /></li>
            {/* <li class='glimsli'><img class='glimsimg' src={img3} /></li> */}
            <li class='glimsli'><img class='glimsimg' src={img5} /></li>
            <li class='glimsli'><img class='glimsimg' src={img4} /></li>
            <li class='glimsli'><img class='glimsimg' src={img6} /></li>
            <li class='glimsli'><img class='glimsimg' src={img7} /></li>
            <li class='glimsli'><img class='glimsimg' src={img8} /></li>
            <li class='glimsli'><img class='glimsimg' src={img9} /></li>
            <li class='glimsli'><img class='glimsimg' src={img10} /></li>
            <li class='glimsli'><img class='glimsimg' src={img11} /></li>
            <li class='glimsli'><img class='glimsimg' src={img12} /></li>
        </ul>
    </div>
</article>


    <hr className=" m-12 max-w-7xl mx-auto" />
    </div>
    </>
  )
}
