import React from 'react'
import Lottie from 'lottie-react'
import animationData from '../../assets/Animation.json'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react'


export function Contact() {
   useEffect(()=>{
    AOS.init({duration:3000});
  },[])
  AOS.init();

  return (
    <div className="w-full">
    
      {/* Hero Section */}
      <div className="relative w-full bg-white">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div style={{fontFamily:'GraublauWeb',fontWeight:'bold'}} className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
            
            <h1 className="mt-8 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
            Fill out the <span data-aos="fade-up" data-aos-duration="3000" data-aos-delay="100" className='text-[#4285F4]'>G</span><span data-aos="fade-up" data-aos-duration="3000" data-aos-delay="200" className='text-[#DB4437]'>o</span><span data-aos="fade-up" data-aos-duration="3000" data-aos-delay="300" className='text-[#F4B400]'>o</span><span data-aos="fade-up" data-aos-duration="3000" data-aos-delay="400" className='text-[#4285F4]'>g</span><span data-aos="fade-up" data-aos-duration="3000" data-aos-delay="500" className='text-[#0F9D58]'>l</span><span  data-aos="fade-up" data-aos-duration="3000" data-aos-delay="600" className='text-[#DB4437]'>e</span> Form!
            </h1>
            <p className="mt-8 text-lg text-gray-700">
            Please complete the Google Form to register for our upcoming event. Ensure all details are entered correctly to secure your spot.
            </p>

           
              <div>
                <Link to="/error">
                <button
                  type="button"
                  className="w-[100px] mt-4 rounded-md bg-black px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Register
                </button>
                </Link>
              </div>
          </div>
          <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
            <Lottie animationData={animationData}></Lottie>
          </div>
        </div>
      </div>  
    </div>
  )
}
