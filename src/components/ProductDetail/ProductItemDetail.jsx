import React, { useState, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../HomePage/Button';
import Stars from './Stars';
import Qty from './Qty';
import { useProductsContext } from '../../context/ProductsProvider';
import { useCartContext } from '../../context/CartProvider';

const sizes = [
  '5',
  '5.5',
  '6',
  '6.5',
  '7',
  '7.5',
  '8',
  '8.5',
  '9',
  '9.5',
  '10',
  '10.5',
  '11',
  '11.5',
  '12',
];

const ProductItemDetail = () => {
  const [selectSize, seSelectSize] = useState('6');
  const { shoes } = useProductsContext();
  const { id } = useParams();
  const { addToCart, quantity } = useCartContext();

  const handleSelectSize = (size) => {
    seSelectSize(size);
  };

  const detailOfShoe = useMemo(() => {
    return shoes.find((shoe) => shoe.id === +id);
  }, [shoes]);

  const handleAddToCart = () => {
    addToCart({
      size: selectSize,
      id: detailOfShoe.id + selectSize,
      image: detailOfShoe.image,
      name: detailOfShoe.name,
      price: detailOfShoe.price,
      quantity,
    });
  };

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section id="home" className="md:pt-22 md:pb-[90px] pb-3 pt-6 ">
        <div className="xl:max-w-[1280px] w-full flex flex-row gap-4 mb-4 pl-[70px]">
          <button className="font-lato text-[16px] text-secondary2">
            <Link to="/">Home</Link>
          </button>
          <span>/</span>
          <button className="font-lato text-[16px] text-secondary2">
            <Link to="/products"> Back to products</Link>
          </button>
        </div>
        <div className="xl:max-w-[1280px] w-full grid md:grid-cols-2 py-0 sm:px-[32px] px-[24px] gap-10 ">
          <div className="px-8 py-3">
            <img src={detailOfShoe.image} className="w-[100%]" />
          </div>

          <div>
            <h2 className="font-lato text-primary font-bold sm:text-[34px] text-[24px] ss:leading-[50px]  leading-[35px] mb-4 sm:mb-3 max-w-[600px]">
              {detailOfShoe.name}
            </h2>
            <div className="flex flex-col gap-4 mb-4">
              <Stars
                stars={detailOfShoe.rating.rate}
                review={detailOfShoe.rating.count}
              />
              <p className="sm:text-[20px] text-[18px] font-bold font-lato">
                $ {detailOfShoe.price.toFixed(2)}
              </p>
              <p className="font-lato text-[16px] leading-[28px] max-w-[600px]">
                {detailOfShoe.description}
              </p>
              <p className="font-lato text-[16px]">Size:</p>
              <div className="grid grid-cols-5 gap-1 max-w-[600px]">
                {sizes.map((size) => (
                  <button
                    className={`px-[10px] py-[8px] font-lato text-[16px] outline-none font-medium cursor-pointer border-solid border-2 whitespace-nowrap ${
                      selectSize === size ? 'bg-blueColor' : null
                    }`}
                    key={size}
                    onClick={() => handleSelectSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
              {/* qt */}
              <Qty />

              <div>
                <Button
                  text="Add to Cart"
                  section="/cart"
                  handleClick={handleAddToCart}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ProductItemDetail;
