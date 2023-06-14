import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem('cart')) || []
  );
  const [total, setTotal] = useState(
    JSON.parse(localStorage.getItem('total')) || 0
  );
  const [quantity, setQuantity] = useState(1);
  const shippingFees = 5;

  const increaseQty = () => {
    setQuantity((prevQty) => prevQty + 1);
  };

  const decreaseQty = () => {
    setQuantity((prevQty) => {
      if (prevQty - 1 < 1) return 1;
      return prevQty - 1;
    });
  };

  const addToCart = (shoe) => {
    const checkProductInCart = cart.find((item) => item.id === shoe.id);

    setTotal((prevTotal) => prevTotal + shoe.price * quantity);
    setQuantity(1);

    if (checkProductInCart) {
      const updatedItems = cart.map((item) => {
        return item.id === shoe.id
          ? { ...item, quantity: item.quantity + quantity }
          : item;
      });

      setCart(updatedItems);
    } else {
      setCart([...cart, { ...shoe }]);
    }
  };

  const removeFromCart = (shoe) => {
    const existingProduct = cart.find((item) => item.id === shoe.id);
    const removeItem = cart.filter((item) => item.id !== shoe.id);

    setTotal(
      (prevTotal) =>
        prevTotal - existingProduct.price * existingProduct.quantity
    );

    setCart(removeItem);
  };

  const clearCart = () => {
    setCart([]);
    setTotal(0);
  };

  const toggleQuantityInCart = (shoe, value) => {
    let updatedItems;
    const exisitingProduct = cart.find((item) => item.id === shoe.id);

    if (value === 'inc') {
      if (exisitingProduct) {
        updatedItems = cart.map((item) => {
          return item.id === shoe.id
            ? { ...item, quantity: item.quantity + quantity }
            : item;
        });
      }
      setCart(updatedItems);
      setTotal((prevTotal) => prevTotal + exisitingProduct.price);
    } else if (value === 'dec') {
      if (exisitingProduct && exisitingProduct.quantity > 1) {
        updatedItems = cart.map((item) => {
          return item.id === shoe.id
            ? { ...item, quantity: item.quantity - quantity }
            : item;
        });
      }

      if (exisitingProduct.quantity <= 1) {
        updatedItems = cart.filter((item) => item.id !== shoe.id);
      }

      setCart(updatedItems);
      setTotal((prevTotal) => prevTotal - exisitingProduct.price);
    }
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('total', JSON.stringify(total));
  }, [cart, total]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        quantity,
        increaseQty,
        decreaseQty,
        total,
        shippingFees,
        toggleQuantityInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
