import { ArrowLeft } from 'lucide-react'
import React from 'react'
import {Link} from 'react-router-dom'
import Lottie from 'lottie-react'
import sorry from '../../assets/sorry.json'

export function Error() {
  return (
    <div className="py-10">
      <div style={{fontFamily:'GraublauWeb',fontWeight:'bold'}} className="text-center ">
        <p className="text-base font-semibold text-black"></p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-5xl">
            Sorry No Upcoming Events found
        </h1>
        <p className="mt-4 text-base leading-7 text-gray-600">
            We know you're excited for the events, but unfortunately we are still planning them. We'll notify you and get back to you soon.
        </p>
        <div className="mt-4 flex items-center justify-center gap-x-3">
          <Link to="/">
            <button
            type="button"
            className="inline-flex items-center rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            <ArrowLeft size={16} className="mr-2" />
            Go back
          </button>
          </Link>
        </div>
        <div className=' mt-[80px] mx-auto  w-[600px] h-[500x]'>
            <Lottie animationData={sorry}></Lottie>
        </div>
      </div>
    </div>
  )
}
