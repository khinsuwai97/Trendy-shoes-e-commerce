import React from 'react';
import { Link } from 'react-router-dom';

const ProductItems = ({ shoe, trending }) => {
  return (
    <>
      <Link
        className="box-shadow px-6 py-3 cursor-pointer"
        to={`/products/${shoe.id}`}
        key={shoe.id}
      >
        <div className="relative overflow-hidden ">
          <img
            src={shoe.image}
            alt={shoe.name}
            className="w-[100%] h-[100%] top-0 left-0"
          />
          {trending && (
            <img
              src={shoe.image1}
              alt={shoe.name}
              className="w-[100%] h-[100%] top-0 left-0 absolute opacity-0 cursor-pointer hover:opacity-100 transition ease-in duration-300 "
            />
          )}
        </div>
        <p className="font-lato text-[16px] font-semibold mt-5">{shoe.name}</p>
        <p className="font-lato text-[16px]">$ {shoe.price.toFixed(2)}</p>
      </Link>
    </>
  );
};

export default ProductItems;
