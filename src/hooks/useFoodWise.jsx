import React from 'react'
import useAxiosCommon from './useAxiosCommon';

const useFoodWise = () => {
    const axiosCommon = useAxiosCommon();
    const {
      data: foodWise = [],
      isLoading: foodWiseLoading,
      refetch: foodWiseRefetch,
    } = useQuery({
      queryKey: ["foodWise"],
      queryFn: async () => {
        const { data } = await axiosCommon(`/foodWise`);
        return data;
      },
    });
    return { foodWise, foodWiseLoading, foodWiseRefetch };
}

export default useFoodWise