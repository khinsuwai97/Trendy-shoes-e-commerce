import React from 'react';
import Pages from './pages/Pages';
import { ProductsProvider } from './context/ProductsProvider';
import { CartProvider } from './context/CartProvider';
import { AuthProvider } from './context/AuthProvider';
import AuthWrapper from './pages/AuthWrapper';
const App = () => {
  return (
    <AuthWrapper>
      <AuthProvider>
        <ProductsProvider>
          <CartProvider>
            <Pages />
          </CartProvider>
        </ProductsProvider>
      </AuthProvider>
    </AuthWrapper>
  );
};

export default App;
