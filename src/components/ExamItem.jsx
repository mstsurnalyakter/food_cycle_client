import React from 'react'
import { Link } from 'react-router-dom';

const ExamItem = ({ exam, commonId }) => {
  const { image, items, title } = exam || {};

  console.log(exam);
  return (
    <Link
      to={`/quiz/${commonId}`}
      className="flex rounded-3xl bg-secondary w-96 items-center gap-5"
    >
      <div className="">
        <img src={image} alt="" />
      </div>
      <div className=" ">
        <div className="">
          <h2 className="text-primary font-semibold">{title}</h2>
          <ul>
            {items?.map((item, index) => (
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 border-2 border-black bg-black"></div>
                <li key={index}>{item}</li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </Link>
  );
};

export default ExamItem