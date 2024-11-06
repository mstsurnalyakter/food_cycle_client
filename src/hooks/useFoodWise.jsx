import React from 'react'
import useAxiosCommon from './useAxiosCommon';
import { useQuery } from '@tanstack/react-query';

const useFoodWise = () => {
    const axiosCommon = useAxiosCommon();
    const {
      data: foodWises = [],
      isLoading: foodWisesLoading,
      refetch: foodWisesRefetch,
    } = useQuery({
      queryKey: ["foodWise"],
      queryFn: async () => {
        const { data } = await axiosCommon(`/foodWise`);
        return data;
      },
    });
    return { foodWises, foodWisesLoading, foodWisesRefetch };
}

export default useFoodWise