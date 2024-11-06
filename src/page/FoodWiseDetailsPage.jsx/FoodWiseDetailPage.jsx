import React from 'react'
import FoodWiseDetailPageHeader from '../../components/FoodWiseDetailPageHeader'
import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import useAxiosCommon from '../../hooks/useAxiosCommon';
import DetailItem from '../../components/DetailItem';

const FoodWiseDetailPage = () => {
     const { id } = useParams();

     const axiosCommon = useAxiosCommon();
     const {
       data= {},
       isLoading,
       refetch,
     } = useQuery({
       queryKey: ["foodWiseDetails"],
       queryFn: async () => {
         const { data } = await axiosCommon(`/food_wise/${id}`);
         return data;
       },
     });

     const {details_page_image,details,title} = data || [];

     console.log(data);


     console.log(id);
  return (
    <div>
        <FoodWiseDetailPageHeader image={details_page_image} title={title} />
        <div className='grid grid-cols-1 mt-20 gap-10'>
            {
                details?.length > 0 && details?.map(detail=> <DetailItem detail={detail} />)
            }
        </div>
    </div>
  )
}

export default FoodWiseDetailPage