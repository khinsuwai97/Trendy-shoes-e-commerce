import React from 'react';
import { BiPlus, BiMinus } from 'react-icons/bi';

const CartQtyMobile = () => {
  return (
    <div
      className={`sm:hidden flex flex-row items-center gap-4 
       my-2`}
    >
      <div className="flex flex-row items-center gap-4  border-solid border-2 border-secondary2 px-2 py-1 ">
        <button className="cursor-pointer">
          <BiMinus />
        </button>
        <span className="text-[16px] font-lato">1</span>

        <button className="cursor-pointer">
          <BiPlus />
        </button>
      </div>
    </div>
  );
};

export default CartQtyMobile;
