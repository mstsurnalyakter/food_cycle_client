// import React from 'react'
// import CommonButton from '../../components/CommonButton';
// import { Link } from 'react-router-dom';

// const AccessPage = () => {
//    return (
//      <section className="flex flex-col items-center justify-center min-h-screen space-y-11">
//        <img src="/logo.png" alt="logo" className="mb-4" />
//        <div className="w-full md:w-1/2 flex flex-col space-y-4 items-center justify-center">
//          <Link to={"/get_id"} className="w-full">
//            <CommonButton text={"Get a new user id"} />
//          </Link>
//          <Link to={"/login"} className="w-full">
//            <CommonButton text={"I have an account"} />
//          </Link>
//          <Link to={"/login"} className="w-full">
//            <CommonButton text={"Guest login"} />
//          </Link>
//        </div>
//      </section>
//    );
// }

// export default AccessPage

import React, { useState } from "react";
import CommonButton from "../../components/CommonButton";
import { Link, useNavigate } from "react-router-dom";

const AccessPage = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleGetIdClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleExploreClick = () => {
    setShowModal(false);
    navigate("/login"); // Navigate to login page
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen relative">
      {/* Page Content Wrapper */}
      <div
        className={`w-full flex flex-col items-center justify-center space-y-11 transition ${
          showModal ? "blur-3xl" : ""
        }`}
      >
        <img src="/logo.png" alt="logo" className="mb-4" />
        <div className="w-full md:w-1/2 flex flex-col space-y-4 items-center justify-center">
          <button onClick={handleGetIdClick} className="w-full">
            <CommonButton text={"Get a new user id"} />
          </button>
          <Link to={"/login"} className="w-full">
            <CommonButton text={"I have an account"} />
          </Link>
          <Link to={"/login"} className="w-full">
            <CommonButton text={"Guest login"} />
          </Link>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0  flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-secondary  pb-5 rounded-t-3xl rounded-b-3xl rounded-lg shadow-lg text-center relative z-10 ">
            <h2 className="text-2xl py-2 rounded-t-3xl  font-semibold mb-4 bg-primary text-white">
              Congratulations!
            </h2>
            <div className="px-3 space-y-2">
              <p>Welcome,A765478.</p>
              <p>This is your user Id. Please remember and keep it safe</p>
              <div className="mt-6">
                <button
                  onClick={handleExploreClick}
                  className="text-white px-6 py-2 rounded-3xl bg-primary"
                >
                  Explore
                </button>
              </div>
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-whit"
              >
                &times;
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AccessPage;
