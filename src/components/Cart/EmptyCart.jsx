import React from 'react';
import { Button } from '../HomePage/Button';

const EmptyCart = () => {
  return (
    <div className="h-screen ">
      <div className=" w-full flex flex-col justify-center items-center gap-4 mt-10">
        <h2 className="font-lato text-primary font-bold sm:text-[44px] text-[34px] ss:leading-[80px] text-center leading-[40px] mb-2 sm:mb-0">
          Your Cart is empty{' '}
        </h2>
        <Button text="Continue Shopping" section="/products" />
      </div>
    </div>
  );
};

export default EmptyCart;
