import React from 'react'
import { Link } from 'react-router-dom'
import CommonButton from '../../components/CommonButton';

const StartPage = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen space-y-11">
      <div className="flex flex-col items-center justify-center">
        <img src="/logo.png" alt="logo" />
        <p className="text-primary mt-1">Food waste management & Recycle</p>
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <Link to={"/d"} className='w-full'>
          {/* <button className="btn bg-primary text-white hover:bg-primary w-full  ">
            Get Started
          </button> */}
          <CommonButton text={"Get Started"} />
        </Link>
      </div>
    </section>
  );
}

export default StartPage