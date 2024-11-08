import React from 'react'
import Header from '../../components/Header'
import Adult from '../../components/Adult'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center mt-10">
        <button className="bg-primary text-white py-2 px-9 shadow-lg rounded-tl-lg rounded-bl-lg">
          Adult
        </button>
        <Link to="/child">
          <button className="bg-secondary py-2 px-9 text-primary shadow-lg rounded-tr-lg rounded-br-lg">
            Child
          </button>
        </Link>
      </div>
      <Adult />
    </div>
  );
}

export default HomePage