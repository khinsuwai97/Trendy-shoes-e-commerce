import React from 'react';
import CartTotal from './CartTotal';
import CartHeader from './CartHeader';
import CartItem from './CartItem';
import CartItemHeader from './CartItemHeader';
import EmptyCart from './EmptyCart';
import { useCartContext } from '../../context/CartProvider';
import { motion } from 'framer-motion';
const Cart = () => {
  const { cart, clearCart } = useCartContext();

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section id="cart" className="md:pt-22 md:pb-[90px] pb-3 pt-6  w-screen">
        <div className="max-w-[1280px] my-0 mx-auto py-0 sm:px-[32px] px-[24px]">
          {cart.length === 0 && <EmptyCart />}

          {cart.length >= 1 && (
            <div>
              <CartHeader />
              <div>
                <CartItemHeader />
                <hr className="mb-6" />
                {/* item */}
                {cart.map((shoe) => {
                  return <CartItem shoe={shoe} key={shoe.id} />;
                })}
              </div>
              <div className="flex justify-end items-center mt-6">
                <button
                  className={`px-3 sm:py-1 py-[4px] font-lato bg-blueColor text-[16px] text-white outline-none font-medium cursor-pointer whitespace-nowrap btn-mobile`}
                  type="button"
                  onClick={clearCart}
                >
                  Clear Cart
                </button>
              </div>
              <CartTotal />
            </div>
          )}
        </div>
      </section>
    </motion.div>
  );
};

export default Cart;
