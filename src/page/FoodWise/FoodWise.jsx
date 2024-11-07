import React from 'react'
import useFoodWise from '../../hooks/useFoodWise'
import Spinner from '../../components/Spinner';
import FoodWiseCard from '../../components/FoodWiseCard';
import NavigateLink from '../../components/NavigateLink';

const FoodWise = () => {
    const { foodWises, foodWisesLoading, foodWisesRefetch } = useFoodWise();
      if (foodWisesLoading) {
        return (
          <div className="flex items-center justify-center mt-10">
            <Spinner />
          </div>
        );
      }
      console.log(foodWises);
  return (
    <div className='mt-10 mb-16'>
        <NavigateLink link="" />
      <h2 className="text-primary text-2xl font-semibold mt-2">Food wise</h2>
      <p className='font-medium mt-1'>Tips For Reducing Food Waste</p>

      <div className="grid grid-cols-2  md:grid-cols-3 gap-10 my-12  items-center justify-center">
        {foodWises?.length > 0 &&
          foodWises.map((foodWise) => (
            <FoodWiseCard foodWise={foodWise} id={foodWise?._id} />
          ))}
      </div>
    </div>
  );
}

export default FoodWise