import React from 'react';
import { Link } from 'react-router-dom';
import Nike from '../../images/bannerPhoto.png';

const Banner = () => {
  return (
    <section className="md:py-[90px] py-14">
      <div className="max-w-[1280px] my-0 mx-auto py-0 sm:px-[32px] px-[24px]">
        <div className="w-full bg-blueColor box-shadow  rounded-[30px] py-[40px] px-[65px]">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
            <div className="flex flex-col gap-4 justify-center">
              <p className="text-white font-lato sm:text-[20px] text-[18px]">
                Up to 50% OFF
              </p>
              <h2 className="text-white font-lato font-bold sm:text-[62px] ss:text-[44px] text-[34px] ss:leading-[70px] leading-[40px] uppercase">
                Special Offer
              </h2>
              <p className="text-white font-lato sm:text-[20px] text-[18px] ">
                March 1 to April 30{' '}
              </p>
            </div>
            <div className="flex md:flex-row flex-col items-center ">
              <img
                src={Nike}
                alt="shoe photo"
                className="sm:w-[80%] w-[90%] z-10"
              />
            </div>
            <div className="flex flex-col gap-4 justify-center items-start ">
              <h2 className="text-white font-lato font-bold sm:text-[62px] ss:text-[44px] text-[34px] ss:leading-[70px] leading-[40px]">
                Pick the Perfect Pair
              </h2>
              <p className="text-white font-lato sm:text-[20px] text-[18px]">
                Discover our latest trends
              </p>
              <button
                className={`px-[20px] py-[8px] font-lato bg-white text-[16px] text-blueColor outline-none cursor-pointer rounded-[25px] whitespace-nowrap btn-mobile `}
                type="button"
              >
                <Link to="/products">Shop Now</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
