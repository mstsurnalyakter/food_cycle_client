import React from 'react'
import useFoodFreshnessGuid from '../../hooks/useFoodFreshnessGuid';
import Spinner from '../../components/Spinner';
import NavigateLink from '../../components/NavigateLink';
import GuidItem from '../../components/GuidItem';

const FoodFreshnessGuid = () => {
    const {
      foodFreshnessGuid,
      foodFreshnessGuidLoading,
      foodFreshnessGuidRefetch,
    } = useFoodFreshnessGuid();
    console.log(foodFreshnessGuid);
     if (foodFreshnessGuidLoading) {
       return (
         <div className="flex items-center justify-center mt-10">
           <Spinner />
         </div>
       );
     }
   return (
     <div className="my-12 ">
       <NavigateLink link="" />
       <div className="flex justify-between items-center">
         <div>
           <h2 className="text-primary text-2xl font-semibold mt-2">
             FoodCycle
           </h2>
           <p className="font-medium mt-1">Food Freshness Guid</p>
         </div>
         <button>See All</button>
       </div>

       <div className="flex flex-col gap-6 mt-10">
         {foodFreshnessGuid?.length > 0 &&
           foodFreshnessGuid?.map((content) => (
             <GuidItem content={content} key={content?._id} />
           ))}
       </div>
     </div>
   );
}

export default FoodFreshnessGuid