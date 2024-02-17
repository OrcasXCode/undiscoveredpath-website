import React from 'react'
import logo from '../../assets/logo.png'
import shalu from '../../assets/shalu.jpg'
import naveen from '../../assets/naveen.jpg'
import akashdeep from '../../assets/akashdeep.jpg'
import sunil from '../../assets/sunil.png'
import ashish from '../../assets/ashish.jpg'
import { Link } from 'react-router-dom'

const users = [
  {
    name: 'SHALU YADAV',
    image:shalu,
    position: 'CEO -  Chief Executive Officer',
  },
  {
    name: 'NAVEEN',
    image:naveen,
    position: 'CO-CEO - Co-Chief Executive Officer.',
  },
  {
    name: 'AKASHDEEP',
    image:akashdeep,
    position: 'CFO - Chief Financial Officer',
  },
  {
    name: 'SUNIL KUMAR MEHTA',
    image:sunil,
    position: 'MD - Managing Director',
  },
  {
    name: 'B SAI ASHISH',
    image:ashish,
    position: 'HR - Human Resources',
  },
]

export function About() {

  return (
    <div>
    
      <div className="mx-auto max-w-7xl px-4">
        
        
        {/* Hiring Banner */}
        <div className="flex flex-col items-center gap-x-4 gap-y-4 py-16 md:flex-row">
          <div style={{fontFamily:'GraublauWeb',fontWeight:'bold'}} className="space-y-6">
            
            <p className="text-3xl font-bold md:text-4xl">We&apos;re just getting started</p>
            <p className="text-base text-gray-600 md:text-lg">
              Our philosophy is simple — hire a team of diverse, passionate people and foster a
              culture that empowers you to do your best work.
            </p>
            <Link to="/error-recruitment">
              <button
              type="button"
              className=" mt-4 rounded-md w-[100px] bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Join Now
            </button>
            </Link>
          </div>
          <div className="flex items-center justify-center mx-auto md:mt-o mt-10 w-full">
            <img
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
              Our community, Undiscovered Path, is managed by a team of eminent students alongside all other students of Lovely Proffesional University.
            </p>
            <div></div>
          </div>
        </div>
        
        {/* TEAM */}
        <div style={{fontFamily:'GraublauWeb',fontWeight:'bold'}} className="grid grid-cols-1 gap-4 gap-y-6 border-b border-gray-300 py-12 pb-20 md:grid-cols-2 lg:grid-cols-4">
          {users.map((user) => (
            <div className="rounded-md border" key={user.name}>
              <img
                src={user.image}
                alt={user.name}
                className="h-[300px] w-full rounded-lg object-cover "
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
