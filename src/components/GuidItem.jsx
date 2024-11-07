import React from 'react'
import { Link } from 'react-router-dom';

const GuidItem = ({ content }) => {
  const {_id:id,image,title} = content || {};
  console.log(content);
  return (
    <Link
      to={`/food_freshness_guid_details/${id}`}
      className="flex rounded-3xl bg-secondary w-96 items-center gap-5"
    >
      <div className="">
        <img src={image} alt="" />
      </div>
      <div className=" ">
        <div className="">
          <h2 className="text-primary font-semibold">{title}</h2>
        </div>
      </div>
    </Link>
  );
};

export default GuidItem