import React from 'react'
import Lottie from 'lottie-react'
import hiring from '../../assets/hiring.json'
import { Link } from 'react-router-dom'
export function Recruitment() {
  return (
    <section>
      <div style={{fontFamily:'GraublauWeb',fontWeight:'bold'}} className="px-2 lg:flex lg:flex-row lg:items-center">
        <div className="w-full lg:w-1/2">
          <div className="my-10 lg:my-0 lg:px-10">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              We Are Hiring !
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600">
              Hey, Vertos! We're currently hiring. Fill out the form for a chance to become a member of our community, Undiscovered Path!
            </p>

            <form action="#" method="POST" className="mt-8 max-w-xl">
              <div className="flex flex-col sm:flex-row sm:items-center">
                <div className="flex w-full max-w-sm items-center space-x-2">
                  <Link to="/error-recruitment">
                  <button
                    type="button"
                    className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Register
                  </button>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <Lottie animationData={hiring}></Lottie>
        </div>
      </div>
    </section>
  )
}
