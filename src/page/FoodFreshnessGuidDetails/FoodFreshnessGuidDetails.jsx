import React from 'react'
import { useParams } from 'react-router';
import useAxiosCommon from '../../hooks/useAxiosCommon';
import Spinner from '../../components/Spinner';
import { useQuery } from '@tanstack/react-query';
import NavigateLink from '../../components/NavigateLink';

const FoodFreshnessGuidDetails = () => {
    const { id } = useParams();

    const axiosCommon = useAxiosCommon();
    const {
      data = {},
      isLoading,
      refetch,
    } = useQuery({
      queryKey: ["childContentDetails"],
      queryFn: async () => {
        const { data } = await axiosCommon(`/food_freshness_guid/${id}`);
        return data;
      },
    });

    if (isLoading) {
      return (
        <div className="flex items-center justify-center mt-48">
          <Spinner />
        </div>
      );
    }

    const {
      title,
      image,
      details
    } = data || {};
    console.log(data);
    const { causes_spoilage, home_solutions, market_solutions, detailsImage } =
      details || {};
      console.log(detailsImage);

    console.log(
      causes_spoilage,
      detailsImage,
      home_solutions,
      market_solutions
    );
  return (
    <div className="mt-12 ">
      <NavigateLink link="" />
      <div>
        <h2 className="text-primary   text-2xl font-semibold mt-2">{title}</h2>
        <div>
          <h2 className="text-primary text-xl font-medium mt-2">
            Causes of Spoilage
          </h2>
          <ul className="list-disc ml-4">
            {causes_spoilage?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="bg-primary  space-y-6 px-10 min-h-[calc(100vh-337px)] mx-[-20px] mt-36 rounded-t-3xl relative">
          <div className="absolute top-[-100px] right-0">
            <img src={detailsImage} alt="" />
          </div>
          <div className="space-y-7">
            <div className="pt-40">
              <h2 className="text-[#FFEB3B] font-bold text-2xl">
                Home Solutions:
              </h2>
              <ul className="text-white space-y-1">
                {home_solutions?.length > 0 &&
                  home_solutions?.map((item, index) => (
                    <li className="list-disc ml-4" key={index}>
                      {item}
                    </li>
                  ))}
              </ul>
            </div>
            <div>
              <h2 className="text-[#FFEB3B] font-bold text-2xl space-y-1">
                Market Solutions:
              </h2>
              <ul className="text-white">
                {causes_spoilage?.length > 0 &&
                  causes_spoilage?.map((item, index) => (
                    <li className="list-disc ml-4" key={index}>
                      {item}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodFreshnessGuidDetails