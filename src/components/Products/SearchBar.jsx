import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { useProductsContext } from '../../context/ProductsProvider';
const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useProductsContext();
  return (
    <form
      className="flex justify-center items-center relative"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="text"
        placeholder="Search"
        className="sm:py-[10px] py-[6px] w-[70%]  sm:w-[100%]  px-[50px] rounded-[10px] font-lato font-[16px] placeholder:text-secondary3 border-solid border-2 border-secondary3  "
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        className="text-[20px] text-secondary3 top-[50%] left-[0%] translate-x-[-150%] opacity-[70%] hover:opacity-100 "
        type="sumbit"
      >
        <BiSearch />
      </button>
    </form>
  );
};

export default SearchBar;
