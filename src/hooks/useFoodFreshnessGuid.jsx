import React from 'react'
import useAxiosCommon from './useAxiosCommon';
import { useQuery } from '@tanstack/react-query';

const useFoodFreshnessGuid = () => {
    const axiosCommon = useAxiosCommon();
    const {
      data: foodFreshnessGuid = [],
      isLoading: foodFreshnessGuidLoading,
      refetch: foodFreshnessGuidRefetch,
    } = useQuery({
      queryKey: ["foodWise"],
      queryFn: async () => {
        const { data } = await axiosCommon(`/food_freshness_guid`);
        return data;
      },
    });
    return {
      foodFreshnessGuid,
      foodFreshnessGuidLoading,
      foodFreshnessGuidRefetch,
    };
}

export default useFoodFreshnessGuid