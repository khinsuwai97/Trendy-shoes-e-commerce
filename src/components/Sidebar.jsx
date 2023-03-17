import React from 'react';
import { navLinks } from '.';
import { FaTimes } from 'react-icons/fa';
import { MobileAuthButton } from './HomePage/Button';
import { Link } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import { useAuthContext } from '../context/AuthProvider';

const Sidebar = ({ toggleNav, closeNav }) => {
  const { handleSignIn, handleSignOut, isAuthenticated } = useAuthContext();
  return (
    <aside className={toggleNav ? 'sidebar show-sidebar' : 'sidebar'}>
      <div className="flex justify-between items-center pt-[16px] px-[24px] mb-5">
        <Link
          className="font-lobsterTwo text-[28px] text-blueColor font-bold  tracking-[0.75px] cursor-pointer no-underline z-50"
          to="/"
          onClick={closeNav}
        >
          Trendy
        </Link>
        <button onClick={closeNav}>
          <FaTimes className="text-[28px] cursor-pointer text-blueColor z-50" />
        </button>
      </div>
      <ul className="text-left pt-[16px] px-[24px] ">
        {navLinks.map((link) => {
          return (
            <li
              key={link.id}
              className="no-underline font-lato font-normal cursor-pointer text-[20px] text-primary mb-8 links "
            >
              <Link to={`${link.id}`} onClick={closeNav}>
                {link.title}
              </Link>
            </li>
          );
        })}

        <li className="no-underline font-lato font-normal cursor-pointer text-[20px] text-primary mb-8 links ">
          <LinkS to="trending" onClick={closeNav}>
            Trending
          </LinkS>
        </li>
        <li>
          {!isAuthenticated && (
            <MobileAuthButton
              auth={isAuthenticated}
              handleAuth={handleSignIn}
            />
          )}
        </li>
        <li>
          {isAuthenticated && (
            <MobileAuthButton
              auth={isAuthenticated}
              handleAuth={handleSignOut}
            />
          )}
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
