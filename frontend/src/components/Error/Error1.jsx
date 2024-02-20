import { ArrowLeft } from 'lucide-react'
import React from 'react'
import {Link} from 'react-router-dom'
import Lottie from 'lottie-react'
import sorryhire from '../../assets/sorryhire.json'

export function Error1() {
  return (
    <div className="py-10">
      <div style={{fontFamily:'GraublauWeb',fontWeight:'bold'}} className="text-center ">
        <p className="text-base font-semibold text-black"></p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-5xl">
            Sorry we are not hiring currently
        </h1>
        <p className="mt-4 text-base leading-7 text-gray-600">
            We are not currently hiring. Thank you for your interest and patience!
        </p>
        <div className="mt-4 flex items-center justify-center gap-x-3">
          <Link to="/aboutus">
            <button
            type="button"
            className="inline-flex items-center rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            <ArrowLeft size={16} className="mr-2" />
            Go back
          </button>
          </Link>
        </div>
        <div className='flex justify-center items-center mt-10 mx-auto'>
            <Lottie className='mx-auto h-[200px] w-[200px]' animationData={sorryhire}></Lottie>
        </div>
      </div>
    </div>
  )
}
