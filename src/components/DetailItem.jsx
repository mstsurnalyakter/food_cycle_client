import React from 'react'

const DetailItem = ({ detail }) => {
  console.log("detail", detail);
  const {icon,mark_text,description} = detail || {};

  return <div className='flex items-center gap-3'>
    <div>
      <img className='w-20 sm:w-10' src={icon} alt="" />
    </div>
    <div className='font-medium'>
      <span className='text-primary'>{mark_text}:</span>
      <span> {description}</span>
    </div>
  </div>;
};

export default DetailItem