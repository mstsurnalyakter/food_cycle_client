import React from 'react'
import { Link } from 'react-router-dom';
import CommonButton from '../../components/CommonButton';

const LoginPage = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen space-y-11">
      <img src="/logo.png" alt="logo" className="mb-4" />
      <div className="w-full md:w-1/2 flex flex-col space-y-4 items-center justify-center">
        <input
          type="text"
          placeholder="User ID"
          className="rounded-full text-xl p-3 placeholder:text-primary font-bold border-2 border-primary outline-none text-primary w-full "
        />
        <Link to={"/login"} className="w-full">
          <CommonButton text={"login"} />
        </Link>
      </div>
    </section>
  );
}

export default LoginPage