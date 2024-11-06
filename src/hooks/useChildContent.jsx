import React from 'react'
import useAxiosCommon from './useAxiosCommon';
import { useQuery } from '@tanstack/react-query';

const useChildContent = () => {
const axiosCommon = useAxiosCommon();
const {
  data: childContent = [],
  isLoading: childContentLoading,
  refetch: childContentRefetch,
} = useQuery({
  queryKey: ["childContent"],
  queryFn: async () => {
    const { data } = await axiosCommon(`/child_contents`);
    return data;
  },
});
return { childContent, childContentLoading, childContentRefetch };
}

export default useChildContent