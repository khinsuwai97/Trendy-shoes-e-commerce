import React from 'react';
import CartQty from './CartQty';
import { RiDeleteBinLine } from 'react-icons/ri';
import { useCartContext } from '../../context/CartProvider';

const CartItem = ({ shoe }) => {
  const { removeFromCart } = useCartContext();
  return (
    <div>
      <div className=" cart-container items-center justify-between my-4 sm:gap-4 gap-0">
        <div className="flex gap-8 items-center ">
          <img
            src={shoe.image}
            alt={shoe.name}
            className="md:w-[20%] w-[40%] h-[100%] box-shadow"
          />
          <div>
            <div className="flex flex-col gap-1">
              <p className="max-w-[200px] font-lato text-[16px] font-bold">
                {shoe.name}
              </p>
              <p className="font-lato text-[16px]">$ {shoe.price.toFixed(2)}</p>
              <p className="font-lato text-[16px]">Size: {shoe.size}</p>
            </div>
          </div>
        </div>

        {/* Quantity */}

        <div className="flex sm:flex-row flex-col justify-between items-center gap-4 sm:justify-self-auto justify-self-end">
          <CartQty shoe={shoe} />

          <button
            className="cursor-pointer"
            onClick={() => removeFromCart(shoe)}
          >
            <RiDeleteBinLine className="text-[20px] text-secondary3 cursor-pointer" />
          </button>
          <div className="sm:flex hidden ">
            <p>$ {(shoe.price * shoe.quantity).toFixed(2)}</p>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default CartItem;
