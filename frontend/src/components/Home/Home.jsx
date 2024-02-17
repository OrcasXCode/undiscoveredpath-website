import React from 'react'
import  {TypeAnimation}  from 'react-type-animation';
import demo from '../../assets/demo.jpg'
// import event1 from '../../assets/event1.jpg'
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpg'
import img5 from '../../assets/img5.jpg'
import video1 from '../../assets/video1.mp4'



export function Home(props) {



  return (
    
    <>
      <div className="relative w-full overflow-x-hidden">
      
      <div className="relative h-screen isolate z-0 bg-white px-6 pt-14 lg:px-8">
        <div className="relative mx-auto max-w-2xl py-24">
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
          <div className="text-center">
           <h1 style={{fontFamily:'GraublauWeb',fontWeight:'bold'}} className="mt-8 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
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
        </div>
      </div>

          <hr className="mt-6 max-w-7xl mx-auto" />
      <div>
        <h1 style={{fontFamily:'GraublauWeb',fontWeight:'bold'}} className='flex justify-center items-center text-5xl font-bold mt-10 mb-10'>Our Past Events</h1>
      </div>
      <hr className=" m-12 max-w-7xl mx-auto" />

      <div className='w-full h-screen relative'>
        <video autoPlay muted loop src={video1} className='absolute inset-0 w-full h-full object-cover'></video>
        <div className='absolute inset-0 bg-black opacity-50'></div>
        <h1 style={{fontFamily:'GraublauWeb',fontWeight:'bold'}} className='absolute inset-0  flex justify-start items-end m-8 text-5xl text-white'>
          Mr. Punjab BodyBuilding Championship
        </h1>
    </div>
      <div className='w-full h-screen relative'>
        <img src={demo} className='absolute inset-0 w-full h-full object-cover' alt='Demo' />
        <div className='absolute inset-0 bg-black opacity-50'></div>
        <h1 style={{fontFamily:'GraublauWeb',fontWeight:'bold'}} className='absolute inset-0  flex justify-start items-end m-8 text-5xl text-white'>
          Farming in rainy season
        </h1>
    </div>
      <div className='w-full h-screen relative'>
        <img src={demo} className='absolute inset-0 w-full h-full object-cover' alt='Demo' />
        <div className='absolute inset-0 bg-black opacity-50'></div>
        <h1 style={{fontFamily:'GraublauWeb',fontWeight:'bold'}} className='absolute inset-0  flex justify-start items-end m-8 text-5xl text-white'>
          Farming in rainy season
        </h1>
    </div>
      <div className='w-full h-screen relative'>
        <img src={demo} className='absolute inset-0 w-full h-full object-cover' alt='Demo' />
        <div className='absolute inset-0 bg-black opacity-50'></div>
        <h1 style={{fontFamily:'GraublauWeb',fontWeight:'bold'}} className='absolute inset-0  flex justify-start items-end m-8 text-5xl text-white'>
          Farming in rainy season
        </h1>
    </div>
      <div className='w-full h-screen relative'>
        <img src={demo} className='absolute inset-0 w-full h-full object-cover' alt='Demo' />
        <div className='absolute inset-0 bg-black opacity-50'></div>
        <h1 style={{fontFamily:'GraublauWeb',fontWeight:'bold'}} className='absolute inset-0  flex justify-start items-end m-8 text-5xl text-white'>
          Farming in rainy season
        </h1>
    </div>

      
      <hr className="mt-6 max-w-7xl mx-auto" />
      <div>
        <h1 style={{fontFamily:'GraublauWeb',fontWeight:'bold'}} className='flex justify-center items-center text-5xl font-bold mt-10 mb-10'>Our Upcoming Events</h1>
      </div>
      <hr className=" m-12 max-w-7xl mx-auto" />

      <div className='w-full h-screen relative'>
        <img src={demo} className='absolute inset-0 w-full h-full object-cover' alt='Demo' />
        <div className='absolute inset-0 bg-black opacity-50'></div>
        <h1 style={{fontFamily:'GraublauWeb',fontWeight:'bold'}} className='absolute inset-0  flex justify-start items-end m-8 text-5xl text-white'>
          Farming in rainy season
        </h1>
    </div>
      <div className='w-full h-screen relative'>
        <img src={demo} className='absolute inset-0 w-full h-full object-cover' alt='Demo' />
        <div className='absolute inset-0 bg-black opacity-50'></div>
        <h1 style={{fontFamily:'GraublauWeb',fontWeight:'bold'}} className='absolute inset-0  flex justify-start items-end m-8 text-5xl text-white'>
          Farming in rainy season
        </h1>
    </div>
      <div className='w-full h-screen relative'>
        <img src={demo} className='absolute inset-0 w-full h-full object-cover' alt='Demo' />
        <div className='absolute inset-0 bg-black opacity-50'></div>
        <h1 style={{fontFamily:'GraublauWeb',fontWeight:'bold'}} className='absolute inset-0  flex justify-start items-end m-8 text-5xl text-white'>
          Farming in rainy season
        </h1>
    </div>
      <div className='w-full h-screen relative'>
        <img src={demo} className='absolute inset-0 w-full h-full object-cover' alt='Demo' />
        <div className='absolute inset-0 bg-black opacity-50'></div>
        <h1 style={{fontFamily:'GraublauWeb',fontWeight:'bold'}} className='absolute inset-0  flex justify-start items-end m-8 text-5xl text-white'>
          Farming in rainy season
        </h1>
    </div>
      <div className='w-full h-screen relative'>
        <img src={demo} className='absolute inset-0 w-full h-full object-cover' alt='Demo' />
        <div className='absolute inset-0 bg-black opacity-50'></div>
        <h1 style={{fontFamily:'GraublauWeb',fontWeight:'bold'}} className='absolute inset-0  flex justify-start items-end m-8 text-5xl text-white'>
          Farming in rainy season
        </h1>
    </div>

          <hr className="mt-6 max-w-7xl mx-auto" />
      <div>
        <h1 style={{fontFamily:'GraublauWeb',fontWeight:'bold'}} className='flex justify-center items-center text-5xl font-bold mt-10 mb-10'>Our Community Glimps</h1>
      </div>
      <hr className=" m-12 max-w-7xl mx-auto" />

     <article>
      <div>
        <ul>
          <li><img src={img1} style={{ height: "300px" }} /></li>
          <li><img src={img2} style={{ height: "300px" }} /></li>
          <li><img src={img3} style={{ height: "300px" }} /></li>
          <li><img src={img5} style={{ height: "300px" }} /></li>
          <li><img src={img4} style={{ height: "300px" }} /></li>   
        </ul>
      </div>
      <div>
        <ul>
          <li><img src={img1} style={{ height: "300px" }} /></li>
          <li><img src={img2} style={{ height: "300px" }} /></li>
          <li><img src={img3} style={{ height: "300px" }} /></li>
          <li><img src={img5} style={{ height: "300px" }} /></li>
          <li><img src={img4} style={{ height: "300px" }} /></li>
        </ul>
      </div>
    </article>

    <hr className=" m-12 max-w-7xl mx-auto" />
    </div>
    </>
  )
}
