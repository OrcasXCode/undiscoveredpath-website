import React,{useEffect} from 'react'
import logo from '../../assets/logo.png'
import shalu from '../../assets/shalu.jpg'
import naveen from '../../assets/naveen.jpg'
import akashdeep from '../../assets/akashdeep.jpg'
import sarnet from '../../assets/sarnet.jpg'
import nikhil from '../../assets/nikhil.jpg'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css';

const users = [
  {
    name: 'AKASHDEEP SINGH',
    image:akashdeep,
    position: 'FOUNDER,CEO',
    data:'fade-up',
    duration:2000,
    delay:300
  },
  {
    name: 'SHALU YADAV',
    image:shalu,
    position: 'CO-CEO',
    data:'fade-up',
    duration:2000,
    delay:100
  },
  {
    name: 'NAVEEN KUMAR',
    image:naveen,
    position: 'COO',
    data:'fade-up',
    duration:2000,
    delay:200
  },
  
  {
    name: 'SARNEET SINGH',
    image:sarnet,
    position: 'CFO',
    data:'fade-up',
    duration:2000,
    delay:400
  },
  {
    name: 'NIKHIL LASKOTRA',
    image:nikhil,
    position: 'CMO',
    data:'fade-up',
    duration:2000,
    delay:500
  },
]

export function About() {

  useEffect(()=>{
    AOS.init({duration:1000});
  },[])
  AOS.init();

  return (
    <div>
    
      <div className="mx-auto max-w-7xl px-4">
        
        
        {/* Hiring Banner */}
        <div className="flex flex-col items-center gap-x-4 gap-y-4 py-16 md:flex-row">
          <div style={{fontFamily:'GraublauWeb',fontWeight:'bold'}} className="space-y-6">
            
            <p data-aos="fade-right" data-aos-duration="1000" className="text-3xl font-bold md:text-4xl">We&apos;re just getting started</p>
            <p data-aos="fade-right" data-aos-duration="1000" className="text-base text-gray-600 md:text-lg">
              Our philosophy is simple — hire a team of diverse, passionate people and foster a
              culture that empowers you to do your best work.
            </p>
            <Link to="https://docs.google.com/forms/d/e/1FAIpQLScKXYX3UHp29ShCVp6zo0ajyCwBQO8H3nSVdsEL1zT9NtnhSA/viewform?usp=sf_link ">
              <button
              data-aos="fade-right" data-aos-duration="1000"
              type="button"
              className=" mt-4 rounded-md w-[100px] bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Join Now
            </button>
            </Link>
          </div>
          <div className="flex items-center justify-center mx-auto md:mt-o mt-10 w-full">
            <img
              data-aos="fade-left" data-aos-duration="1000"
              src={logo}
              alt="Getting Started"
              className="rounded-lg h-[400px] w-[400px]"
            />
          </div>
        </div>

        {/* greetings */}
        <div style={{fontFamily:'GraublauWeb',fontWeight:'bold'}} className="mt-16 flex items-center">
          <div className="space-y-6 md:w-3/4">
            <p className="text-3xl font-bold text-gray-900 md:text-4xl">Meet our team</p>
            <p className="max-w-4xl text-base text-gray-700 md:text-xl">
              Our community <span className='text-[#CB00CC] '>Undiscovered Path</span>, is managed by a team of eminent students alongside all other students of Lovely Proffesional University.
            </p>
            <div></div>
          </div>
        </div>
        
        {/* TEAM */}
        <div style={{fontFamily:'GraublauWeb',fontWeight:'bold'}} className="grid grid-cols-1 gap-4 gap-y-6 border-b border-gray-300 py-12 pb-20 md:grid-cols-2 lg:grid-cols-4">
          {users.map((user) => (
            <div data-aos={user.data} data-aos-duration={user.duration} data-aos-delay={user.delay} className="rounded-md border" key={user.name}>
              <img
                src={user.image}
                alt={user.name}
                className=" h-[250px] w-full rounded-lg object-cover "
              />
              <p className="mt-6 w-full px-2 text-xl  font-semibold text-gray-900">{user.name}</p>
              <p className="w-full px-2 pb-6 text-sm font-semibold text-gray-500">
                {user.position}
              </p>
            </div>
          ))}
        </div>
        
      </div>
      <hr className="mt-6" />
    
    </div>
  )
}
