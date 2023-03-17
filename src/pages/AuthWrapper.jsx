import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const AuthWrapper = ({ children }) => {
  const { isLoading, error } = useAuth0();

  if (isLoading) {
    return (
      <h1 className="font-lato text-[24px] h-screen flex justify-center items-center">
        Loading....
      </h1>
    );
  }
  if (error) {
    return (
      <h1 className="font-lato text-[24px] h-screen flex justify-center items-center">
        {error.message}
      </h1>
    );
  }
  return <>{children}</>;
};

export default AuthWrapper;
