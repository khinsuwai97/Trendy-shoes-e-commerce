import { Link } from 'react-router-dom';
import { BsFillPersonDashFill, BsFillPersonPlusFill } from 'react-icons/bs';

export const ButtonMobile = (props) => {
  return (
    <Link to={props.section}>
      <button
        className={`px-[20px] py-[8px] font-lato bg-blueColor text-[16px] text-white outline-none font-medium cursor-pointer rounded-[25px] whitespace-nowrap btn-mobile `}
        type="button"
      >
        {props.text}
      </button>
    </Link>
  );
};

export const Button = (props) => {
  return (
    <Link to={props.section}>
      <button
        className={`${
          props.cartTotal ? 'w-[100%]' : null
        } px-[47px] py-[8px] font-lato bg-blueColor text-[16px] text-white outline-none font-medium cursor-pointer whitespace-nowrap btn-mobile`}
        type="button"
        onClick={props.handleClick}
      >
        {props.text}
      </button>
    </Link>
  );
};

export const AuthButton = (props) => {
  return (
    <button
      className="sm:text-[25px] text-[25px] cursor-pointer text-secondary transition ease-in hover:scale-[1.1] bg-transparent sm:flex hidden items-center pb-2 "
      onClick={props.handleAuth}
    >
      {props.auth ? <BsFillPersonDashFill /> : <BsFillPersonPlusFill />}
      <span className="text-[16px] font-lato px-1 rounded-md py-1">
        {props.auth ? 'Sign Out' : 'Sign In'}
      </span>
    </button>
  );
};

export const MobileAuthButton = (props) => {
  return (
    <button
      className="sm:text-[25px] text-[25px] cursor-pointer text-secondary  bg-transparent items-center pb-2 flex "
      onClick={props.handleAuth}
    >
      <span
        className="text-[20px] font-lato px-1 
            rounded-md
            py-1"
      >
        {props.auth ? 'Sign Out' : 'Sign In'}
      </span>
      {props.auth ? <BsFillPersonDashFill /> : <BsFillPersonPlusFill />}
    </button>
  );
};

// export const SignInButtonInCart = (props) => {
//   return (
//     <button
//       className={`w-[100%] px-[47px] py-[8px] font-lato bg-blueColor text-[16px] text-white outline-none font-medium cursor-pointer whitespace-nowrap btn-mobile`}
//       type="button"
//       onClick={props.handleClick}
//     >
//       {props.text}
//     </button>
//   );
// };
