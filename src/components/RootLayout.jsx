import React, { useState } from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { AnimatePresence } from 'framer-motion';

const RootLayout = () => {
  const [toggleNav, setToggleNav] = useState(false);

  const handleToggleNav = () => {
    setToggleNav((prevToggleNav) => !prevToggleNav);
  };

  const closeNav = () => {
    setToggleNav(false);
  };
  return (
    <>
      <Navbar handleToggleNav={handleToggleNav} toggleNav={toggleNav} />
      <Sidebar
        closeNav={closeNav}
        handleToggleNav={handleToggleNav}
        toggleNav={toggleNav}
      />
      <AnimatePresence mode="wait">
        <main className="w-full">
          <Outlet />
        </main>
      </AnimatePresence>
    </>
  );
};

export default RootLayout;
