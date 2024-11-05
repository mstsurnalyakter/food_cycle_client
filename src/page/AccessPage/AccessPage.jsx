import React from 'react'
import CommonButton from '../../components/CommonButton';
import { Link } from 'react-router-dom';

const AccessPage = () => {
   return (
     <section className="flex flex-col items-center justify-center min-h-screen space-y-11">
       <img src="/logo.png" alt="logo" className='mb-4' />
       <div className="w-full md:w-1/2 flex flex-col space-y-4 items-center justify-center">
         <Link to={"/get_id"} className="w-full">
           <CommonButton text={"Get a new user id"} />
         </Link>
         <Link to={"/login"} className="w-full">
           <CommonButton text={"I have an account"} />
         </Link>
         <Link to={"/login"} className="w-full">
           <CommonButton text={"Guest login"} />
         </Link>
       </div>
     </section>
   );
}

export default AccessPage