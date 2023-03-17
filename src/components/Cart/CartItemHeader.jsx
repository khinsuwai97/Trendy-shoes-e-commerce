import React from 'react';

const CartItemHeader = () => {
  return (
    <div className="cart-container sm:gap-0 gap-36 items-center mb-4">
      <h5 className="font-lato text-[18px] ">Item</h5>
      <div className="flex justify-between">
        <h5 className="font-lato text-[18px] justify-self-end">Quantity</h5>
        <h5 className="font-lato text-[18px] sm:flex hidden  ">Subtotal</h5>
      </div>
    </div>
  );
};

export default CartItemHeader;
