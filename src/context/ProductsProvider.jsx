import { createContext, useContext, useState } from 'react';
import { shoesData } from '../data/data';

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [shoes, setShoes] = useState(shoesData);
  const [trendingShoes, setTrendingShoes] = useState(shoesData.slice(0, 4));
  const maxPrice = Math.max(...shoes.map((shoe) => shoe.price));
  const minPrice = Math.min(...shoes.map((shoe) => shoe.price));
  const [price, setPrice] = useState(maxPrice);
  const [searchTerm, setSearchTerm] = useState('');
  const [showPrice, setShowPrice] = useState(false);

  const handleShowPrice = () => {
    setShowPrice((prevShowPrice) => !prevShowPrice);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const resetPrice = () => {
    setPrice(maxPrice);
    setShowPrice(false);
  };
  const handleSort = (sortValue) => {
    const options = {
      'featured-p': [...shoes].sort((a, b) => a.id - b.id),
      'price-lowest': [...shoes].sort((a, b) => a.price - b.price),
      'price-highest': [...shoes].sort((a, b) => b.price - a.price),
      'name-a': [...shoes].sort((a, b) => a.name.localeCompare(b.name)),
      'name-z': [...shoes].sort((a, b) => b.name.localeCompare(a.name)),
    };

    setShoes(options[sortValue]);
  };

  return (
    <ProductsContext.Provider
      value={{
        shoes,
        trendingShoes,
        setShoes,
        handlePriceChange,
        price,
        maxPrice,
        minPrice,
        resetPrice,
        handleSort,
        searchTerm,
        setSearchTerm,
        showPrice,
        handleShowPrice,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
