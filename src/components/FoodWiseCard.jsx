import React from 'react'
import { Link } from 'react-router-dom';

const FoodWiseCard = ({ foodWise }) => {
  const {_id,title,image,details_page_image,details}= foodWise || {};
  return (
    <Link to={`/home_page/food_wise/${_id}`} className="relative">
      <figure>
        <img
          className="w-full h-48 sm:h-56 lg:h-80 rounded-3xl"
          src={image}
          alt={title}
        />
      </figure>
      <h2 className="bg-primary absolute w-full py-2 text-center text-white bottom-[-20px] rounded-b-[20px]">
        {title}
      </h2>
    </Link>
  );
};

export default FoodWiseCard