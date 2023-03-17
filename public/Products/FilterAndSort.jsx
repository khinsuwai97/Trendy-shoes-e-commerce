import React, { useState } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { useProductsContext } from '../../context/ProductsProvider';
import { formatPrice } from '../../Utils/format';

const FilterAndSort = () => {
  const {
    handlePriceChange,
    price,
    maxPrice,
    minPrice,
    resetPrice,
    handleSort,
    sort,
    handleShowPrice,
    showPrice,
  } = useProductsContext();

  const handleSortChange = (e) => {
    handleSort(e.target.value);
  };

  return (
    <div className="flex sm:flex-row flex-col justify-between gap-4 mb-10 ">
      <div>
        <div className="flex flex-row relative ">
          <p className="font-lato text-[16px] sm:mr-5 mr-2">Filter:</p>

          <button
            className="flex font-lato text-[16px]"
            onClick={handleShowPrice}
          >
            Price
            <RiArrowDropDownLine className="text-[30px]" />
          </button>
        </div>

        {showPrice && (
          <div className="max-w-[250px] box-shadow px-4 py-2 rounded-[10px] border-solid border-2 border-grayColor bg-white absolute z-10">
            <p className="font-lato text-[16px] ">
              The hightest price is $ {maxPrice.toFixed(2)}
            </p>
            <hr className="my-3" />
            <div className="flex flex-row justify-between ">
              <p className="font-bold font-lato">{formatPrice(price)}</p>

              <button
                className=" font-lato text-blueColor outline-none cursor-pointer"
                onClick={resetPrice}
              >
                Reset
              </button>
            </div>
            <input
              type="range"
              name="price"
              min={minPrice}
              max={maxPrice}
              value={price}
              onChange={handlePriceChange}
            />
          </div>
        )}
      </div>

      {/* Price */}
      <div>
        <form className="flex flex-row">
          <label htmlFor="sort" className="font-lato text-[16px] sm:mr-5 mr-2">
            Sort by:
          </label>
          <select
            name="sort"
            id="sort"
            value={sort}
            className="font-lato text-[16px]"
            onChange={handleSortChange}
          >
            <option value="featured-p">Featured</option>
            <option value="name-a">Name (A - Z)</option>
            <option value="name-z">Name (Z - A)</option>
            <option value="price-lowest">Price (lowest)</option>
            <option value="price-highest">Price (highest)</option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default FilterAndSort;
