import React from 'react'

const CommonButton = ({text}) => {
  return (
    <>
      <button className="btn rounded-full text-xl bg-primary text-white pb-11 pt-4 flex items-center justify-center hover:bg-primary w-full  ">
        {text}
      </button>
    </>
  );
}

export default CommonButton