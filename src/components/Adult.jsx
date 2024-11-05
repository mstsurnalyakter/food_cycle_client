import React from 'react'
import useCategories from '../hooks/useCategories'
import Spinner from './Spinner';

const Adult = () => {
    const { categories, categoriesLoading, categoriesRefetch }= useCategories();
    console.log(categories);
    if (categoriesLoading) {
      return (
        <div className="flex items-center justify-center mt-10">
          <Spinner />
        </div>
      );
    }
  return (
    <div>Adult</div>
  )
}

export default Adult