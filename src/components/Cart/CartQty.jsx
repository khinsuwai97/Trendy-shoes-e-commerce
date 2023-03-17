import React from 'react';
import { BiPlus, BiMinus } from 'react-icons/bi';
import { useCartContext } from '../../context/CartProvider';

const CartQty = ({ shoe }) => {
  const { toggleQuantityInCart } = useCartContext();
  return (
    <div className={`flex  flex-row items-center gap-4 my-2`}>
      <div className="flex flex-row items-center gap-4  border-solid border-2 border-secondary2 sm:px-2 px-1 ms:py-1 py-[2px] ">
        <button
          className="cursor-pointer"
          onClick={() => toggleQuantityInCart(shoe, 'dec')}
        >
          <BiMinus />
        </button>
        <span className="text-[16px] font-lato">{shoe.quantity}</span>

        <button
          className="cursor-pointer"
          onClick={() => toggleQuantityInCart(shoe, 'inc')}
        >
          <BiPlus />
        </button>
      </div>
    </div>
  );
};

export default CartQty;
