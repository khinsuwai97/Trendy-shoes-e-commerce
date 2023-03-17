import React from 'react';
import { Link } from 'react-router-dom';

const CartHeader = () => {
  return (
    <div className="flex justify-between items-center mb-4">
      <h3 className="font-lato text-primary font-bold sm:text-[40px] text-[30px] ss:leading-[80px] leading-[40px] mb-2 sm:mb-0">
        Your Cart
      </h3>
      <button className="font-lato text-[16px] outline-none text-primary  border-b-2 border-grayColor hover:border-secondary3">
        <Link to="/products"> Continue shopping</Link>
      </button>
    </div>
  );
};

export default CartHeader;
