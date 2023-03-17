import React from 'react';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

const Stars = ({ stars, review }) => {
  const reviewStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span key={index}>
        {stars > number ? (
          <BsStarFill />
        ) : stars > index ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });
  return (
    <div className="flex flex-row gap-4 items-center">
      <div className="flex flex-row gap-1 text-blueColor">{reviewStars}</div>
      <p className="font-lato text-[16px]">{`(${review} customers review)`}</p>
    </div>
  );
};

export default Stars;
