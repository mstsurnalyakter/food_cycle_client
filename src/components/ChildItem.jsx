import React from 'react'
import useChildContent from '../hooks/useChildContent'
import { Link } from 'react-router-dom';

const ChildItem = ({content}) => {
    console.log(content);
    const {title, image,items,details,_id} = content || {};

  return (
    <div className="flex rounded-3xl bg-secondary items-center gap-5">
      <div className="">
        <img src={image} alt="" />
      </div>
      <div className=" ">
        <div className="">
          <h2 className="text-primary font-semibold">{title}</h2>
          <ul>
            {items?.map((item, index) => (
              <Link to={`/child_content_detail/${_id}`} className='flex items-center gap-1'>
                <div className='w-2 h-2 border-2 border-black bg-black'></div>
                <li key={index}>{item}</li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ChildItem