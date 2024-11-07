import React from 'react'
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
    const {title,sub_url,image} = category || {};
    console.log(category);
  return (
    <Link to={`${sub_url}`}  className="md:w-96 w-80 relative">
      <figure>
        <img
        className='w-full rounded-3xl'
          src={image}
          alt={title}
        />
      </figure>
      <h2 className='bg-primary absolute w-full py-2 text-center text-white top-[-20px] rounded-t-[20px]'>{title}</h2>
    </Link>
  );
};

export default CategoryCard