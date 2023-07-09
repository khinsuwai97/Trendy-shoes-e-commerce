import React from 'react';
import FilterAndSort from './FilterAndSort';
import SearchBar from './SearchBar';
import ProductItems from '../HomePage/ProductItems';
import { useProductsContext } from '../../context/ProductsProvider';
import { motion } from 'framer-motion';

const Products = () => {
  const { shoes, price, searchTerm } = useProductsContext();

  const filterShoes = shoes.filter((shoe) => shoe.price <= price);

  const shoeProducts = filterShoes.filter((shoe) =>
    searchTerm === ''
      ? shoe
      : shoe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const errorText = (
    <div className="h-screen">
      <h5 className="font-lato text-center sm:text-[20px] text-[16px]">
        Sorry, no products matched your search
      </h5>
    </div>
  );

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="md:py-[90px] py-14">
        <div className="max-w-[1280px] my-0 mx-auto py-0 sm:px-[32px] px-[24px]">
          <div
            className={`flex sm:flex-row justify-between sm:items-center sm:gap-0 gap-4 flex-col-reverse 
          }`}
          >
            <h2 className="font-lato text-[16px] justify-self-end ">
              <span className="font-bold">{shoeProducts.length}</span> Products
              Found
            </h2>
            <SearchBar shoes={shoes} />
          </div>

          <hr className="border border-solid border-grayColor my-4" />
          <FilterAndSort shoes={shoes} />
          {shoeProducts.length < 1 && errorText}
          <div className="grid md:grid-cols-4 grid-cols-2 gap-5  ">
            {shoeProducts.map((shoe) => (
              <ProductItems shoe={shoe} key={shoe.id} />
            ))}
          </div>

          {/* Sort */}
        </div>
      </section>
    </motion.div>
  );
};

export default Products;
