import React from 'react';

import { useCartContext } from '../../context/CartProvider';

const CartTotal = () => {
  const { total, shippingFees } = useCartContext();

  return (
    <section id="cartTotal" className=" md:pt-22 md:pb-[90px] pb-10 pt-6 ">
      <div className="flex items-center justify-center sm:justify-end">
        <div className="flex flex-col gap-4  md:w-[30%] sm:w-[40%] w-[100%] ">
          <div className="  border-solid border-2 border-gray-300 px-8  ">
            <div className="grid grid-row-2 items-center gap-3 py-4">
              <h5 className="flex justify-between paragraph">
                Subtotal :{' '}
                <span className="font-lato text-[16px] font-bold">
                  $ {total.toFixed(2)}
                </span>
              </h5>
              <p className="flex justify-between font-lato text-[16px]">
                Shipping Fee :
                <span className="font-lato text-[16px]">
                  $ {shippingFees.toFixed(2)}
                </span>
              </p>
            </div>
            <hr />
            <h5 className="flex justify-between py-4 font-lato text-[18px] font-bold">
              Order Total :
              <span className="font-lato text-[18px] font-bold">
                $ {`${Number(total + shippingFees).toFixed(2)}`}
              </span>
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartTotal;
