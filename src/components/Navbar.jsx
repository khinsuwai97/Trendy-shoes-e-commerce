import React from 'react';
import { AiOutlineShopping } from 'react-icons/ai';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { navLinks } from '.';
import { Link as LinkS } from 'react-scroll';
import { useCartContext } from '../context/CartProvider';
import { AuthButton } from './HomePage/Button';
import { useAuthContext } from '../context/AuthProvider';

const Navbar = ({ handleToggleNav }) => {
  const { cart } = useCartContext();
  const { handleSignIn, handleSignOut, isAuthenticated } = useAuthContext();

  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="w-full py-0 px-[48px]  ">
      <nav className="md:h-[90px] h-[80px] flex items-center justify-between  ">
        <div className="sm:hidden flex items-center">
          <button onClick={handleToggleNav}>
            <FaBars className="text-[28px] cursor-pointer text-blueColor" />
          </button>
        </div>

        <div>
          <Link
            to="/"
            className="font-lobsterTwo sm:text-[40px] text-[30px] text-blueColor font-bold cursor-pointer tracking-[0.75px] no-underline z-50"
          >
            Trendy
          </Link>
        </div>

        <ul className="list-none sm:flex hidden items-center justify-center gap-8  md:h-[90px] text-primary ">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className="no-underline font-lato cursor-pointer text-[24px] nav-Link"
            >
              <Link to={link.id}>{link.title}</Link>
            </li>
          ))}
          <li className="no-underline font-lato cursor-pointer text-[24px] nav-Link">
            <LinkS to="trending">Trending</LinkS>
          </li>
        </ul>

        <div className="flex flex-row items-center sm:gap-6 gap-2 sm:pt-3 pt-4">
          {!isAuthenticated && (
            <AuthButton auth={isAuthenticated} handleAuth={handleSignIn} />
          )}
          {isAuthenticated && (
            <AuthButton auth={isAuthenticated} handleAuth={handleSignOut} />
          )}
          <Link
            to="/cart"
            className="sm:text-[35px] text-[30px] self-center text-secondary"
          >
            <button className="relative bg-transparent cursor-pointer transition ease-in hover:scale-[1.1]">
              <AiOutlineShopping />
              <span
                className="absolute bg-blueColor w-[25px] h-[25px] rounded-[50%]  text-white text-[16px] text-center font-lato font-semibold top-[-8%] 
            left-[55%] "
              >
                {totalQuantity}
              </span>
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
