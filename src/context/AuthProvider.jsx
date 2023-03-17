import React, { createContext, useContext } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  const handleSignIn = () => {
    loginWithRedirect();
  };

  const handleSignOut = () => {
    logout({ logoutParams: { returnTo: window.location.origin } });
  };

  return (
    <AuthContext.Provider
      value={{ handleSignIn, handleSignOut, isAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
