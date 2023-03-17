import React from 'react';
import { Button } from './Button';
import ProductItems from './ProductItems';
import { useProductsContext } from '../../context/ProductsProvider';

const TrendingProducts = () => {
  const { trendingShoes } = useProductsContext();
  return (
    <section id="trending" className="md:py-[90px] py-14">
      <div className="max-w-[1280px] my-0 mx-auto py-0 sm:px-[32px] px-[24px]">
        <div className="mb-10">
          <h2 className="font-lato text-primary font-bold sm:text-[44px] text-[34px] ss:leading-[80px] text-center leading-[40px] mb-2 sm:mb-0 ">
            Trending Products
          </h2>
          <div className="w-[100px] h-1 bg-blueColor mx-auto my-0"></div>
        </div>

        <div className="grid md:grid-cols-4 grid-cols-2 gap-5  ">
          {trendingShoes.map((shoe) => (
            <ProductItems shoe={shoe} key={shoe.id} trending={true} />
          ))}
        </div>
        <div className="flex justify-center items-center mt-10">
          <Button text="View All Products" section="/products" />
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
