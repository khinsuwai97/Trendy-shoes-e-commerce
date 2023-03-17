import { BiWorld, BiCheckShield } from 'react-icons/bi';
import { GrTag } from 'react-icons/gr';
import { HiOutlineLockClosed } from 'react-icons/hi';

import {
  BsInstagram,
  BsLinkedin,
  BsFacebook,
  BsTwitter,
  BsYoutube,
} from 'react-icons/bs';

export const navLinks = [
  { id: 'home', title: 'Home' },
  { id: 'products', title: 'Products' },
];

export const operations = [
  {
    id: '1',
    title: 'Worldwide Shipping',
    text: 'We ensure safe and secure shipping to all destinations worldwide.',
    icon: <BiWorld />,
  },
  {
    id: '2',
    title: 'Best Quality',
    text: 'We source all our shoes from original and authentic suppliers to give you the best.',
    icon: <BiCheckShield />,
  },
  {
    id: '3',
    title: 'Best Value',
    text: 'We have priced our shoes with a just and best-value price to suit their unique and high quality.',
    icon: <GrTag />,
  },
  {
    id: '4',
    title: 'Secure Payments',
    text: 'We ensure that all payments through our website are secure by using high standard direct checkouts.',
    icon: <HiOutlineLockClosed />,
  },
];

export const footerLinks = [
  {
    title: 'SHOPPING WITH US',
    links: [
      {
        name: 'Shipping & Tracking',
      },
      {
        name: 'Returns & Exchanges',
      },
      {
        name: 'Promotions',
      },
      {
        name: 'Student Discount',
      },
      {
        name: 'Gift Boxes',
      },
    ],
  },
  {
    title: 'CUSTOMER CARE',
    links: [
      {
        name: 'Order Status',
      },
      {
        name: 'Privilege Membership',
      },
      {
        name: 'Contact Us',
      },
      {
        name: 'FAQ',
      },
      {
        name: 'Counterfeit Education',
      },
    ],
  },
  {
    title: 'ABOUT US',
    links: [
      {
        name: 'Store Locator',
      },
      {
        name: 'Brand Profile',
      },
      {
        name: 'Sustainability',
      },
      {
        name: 'Franchising Opportunities',
      },
      {
        name: 'Virtual Store Experience',
      },
    ],
  },
];

export const socialMedia = [
  {
    id: 'social-media-1',
    icon: <BsInstagram />,
    link: 'https://www.instagram.com/',
  },
  {
    id: 'social-media-2',
    icon: <BsFacebook />,
    link: 'https://www.facebook.com/',
  },
  {
    id: 'social-media-3',
    icon: <BsTwitter />,
    link: 'https://www.twitter.com/',
  },
  {
    id: 'social-media-4',
    icon: <BsLinkedin />,
    link: 'https://www.linkedin.com/',
  },
  {
    id: 'social-media-5',
    icon: <BsYoutube />,
    link: 'https://www.youtube.com/',
  },
];
