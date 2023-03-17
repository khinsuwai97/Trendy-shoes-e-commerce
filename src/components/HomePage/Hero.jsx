import React from 'react';
import nike from '../../images/Nike12.png';
import { ButtonMobile } from './Button';

const Hero = () => {
  return (
    <section id="home" className="md:pt-22 md:pb-[90px] pb-3 pt-6 ">
      <div className="xl:max-w-[1280px] w-full grid md:grid-cols-2 py-0 sm:px-[32px] px-[24px]">
        <div className=" sm:px-16 px-6 md:mt-20 z-10 max-w-[1300px] ">
          <h1 className="font-lato text-blueColor font-bold sm:text-[62px] ss:text-[44px] text-[34px] ss:leading-[80px] text-center ss:text-left leading-[40px]">
            Good Shoes will take you to good places
          </h1>
          <p className="font-lato font-normal sm:text-[20px] text-[18px] ss:leading-[30px] ss:text-left text-center mt-5 text-secondary3 leading-[25px] max-w-[470px] ">
            Everyone needs a killer pair of shoes for their routine. Buy an
            experince, not just shoes.
          </p>
          <div className="text-center ss:text-left mt-10">
            <ButtonMobile text="Shop Now" section="/products" />
          </div>
        </div>
        <div className="flex justify-center items-center relative ">
          <img src={nike} className="w-[90%] z-10" />
        </div>

        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>
    </section>
  );
};

export default Hero;
