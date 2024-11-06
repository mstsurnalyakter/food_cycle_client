import React from 'react'
import useAxiosCommon from '../../hooks/useAxiosCommon';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';
import Spinner from '../../components/Spinner';
import ExamItem from '../../components/ExamItem';

const ChildContentDetail = () => {
    const { id } = useParams();

    const axiosCommon = useAxiosCommon();
    const {
      data = {},
      isLoading,
      refetch,
    } = useQuery({
      queryKey: ["childContentDetails"],
      queryFn: async () => {
        const { data } = await axiosCommon(`/child_contents/${id}`);
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

    const {details,_id} = data || {};
    const { title, description, exam, video_completed } = details || {};


  return (
    <div className="space-y-3">
      <div>
        <iframe
          className="w-full h-[400px] lg:h-[500px]"
          src={details.video}
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div>
        <h2 className="text-primary font-bold  text-3xl mb-5">{title}</h2>
        <p>{description}</p>
      </div>
      <div>
        <h2 className="text-primary font-bold mb-5 text-3xl">
          Video Completed
        </h2>
        <progress
          className="progress progress-primary mb-5 w-64 h-6"
          value={video_completed}
          max="100"
        ></progress>
      </div>
      <div>
        <h2 className="text-primary font-bold mb-5  text-3xl">Exam</h2>
        <ExamItem exam={exam} id={_id} />
      </div>
    </div>
  );
}

export default ChildContentDetail