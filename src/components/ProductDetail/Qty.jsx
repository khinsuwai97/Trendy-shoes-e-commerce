import React from 'react';
import { BiPlus, BiMinus } from 'react-icons/bi';
import { useCartContext } from '../../context/CartProvider';
const Qty = () => {
  const { quantity, increaseQty, decreaseQty } = useCartContext();
  return (
    <div className={`flex flex-row items-center gap-4 my-2`}>
      <p className="text-[16px] font-lato">Quantity:</p>
      <div className="flex flex-row items-center gap-4  border-solid border-2 border-secondary2 px-2 py-1 ">
        <button className="cursor-pointer" onClick={decreaseQty}>
          <BiMinus />
        </button>
        <span className="text-[16px] font-lato">{quantity}</span>

        <button className="cursor-pointer" onClick={increaseQty}>
          <BiPlus />
        </button>
      </div>
    </div>
  );
};

export default Qty;
