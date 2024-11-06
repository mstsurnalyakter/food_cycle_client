import React from 'react'
import NavigateLink from '../../components/NavigateLink'
import useChildContent from '../../hooks/useChildContent';
import Spinner from '../../components/Spinner';
import ChildItem from '../../components/ChildItem';

const Child = () => {
   const { childContent, childContentLoading, childContentRefetch } =
     useChildContent();
      if (childContentLoading) {
        return (
          <div className="flex items-center justify-center mt-48">
            <Spinner />
          </div>
        );
      }

  return (
    <div className="my-12 ">
      <NavigateLink link="" />
      <div className='flex justify-between items-center'>
        <div>
          <h2 className="text-primary text-2xl font-semibold mt-2">
            For Kid Under 12
          </h2>
          <p className="font-medium mt-1">Vedio animations - Exam</p>
        </div>
        <button>See All</button>
      </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
          {
            childContent?.length > 0 && childContent?.map(content=><ChildItem content={content} key={content?._id} />)
          }
        </div>
    </div>
  );
}

export default Child