import React from 'react'
import NavigateLink from './NavigateLink';
import NavLinkDetails from './NavLinkDetails';
import { Link } from 'react-router-dom';

const FoodWiseDetailPageHeader = ({ image, title }) => {
  return (
    <>
      <header className="bg-primary px-10 py-14 rounded-b-[35px] mx-[-20px]">
        <div className="">
          <Link to="/home_page/food_wise">
            <img src="/right-arrow2.png" alt="right-arrow" />
          </Link>

          <h3 className="text-white mt-3 font-medium text-2xl">{title}</h3>
        </div>
        <div className="flex mt-6 items-center justify-center">
          <img src={image} alt="" />
        </div>
      </header>
    </>
  );
};

export default FoodWiseDetailPageHeader