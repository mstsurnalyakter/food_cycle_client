import { useQuery } from '@tanstack/react-query';
import useAxiosCommon from './useAxiosCommon';

const useCategories = () => {
 const axiosCommon = useAxiosCommon();
 const {
   data: categories = [],
   isLoading: categoriesLoading,
   refetch: categoriesRefetch,
 } = useQuery({
   queryKey: ["categories"],
   queryFn: async () => {
     const { data } = await axiosCommon(`/categories`);
     return data;
   },
 });
 return { categories, categoriesLoading, categoriesRefetch };
}

export default useCategories