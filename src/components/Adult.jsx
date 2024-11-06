import React from 'react'
import useCategories from '../hooks/useCategories'
import Spinner from './Spinner';
import CategoryCard from './CategoryCard';

const Adult = () => {
    const { categories, categoriesLoading, categoriesRefetch }= useCategories();

    if (categoriesLoading) {
      return (
        <div className="flex items-center justify-center mt-10">
          <Spinner />
        </div>
      );
    }
  return (
    <div className='flex flex-col gap-10 my-12  items-center justify-center'>
        {
            categories?.length > 0 && categories.map(category=><CategoryCard category={category} id={category?._id} />)
        }
    </div>
  )
}

export default Adult