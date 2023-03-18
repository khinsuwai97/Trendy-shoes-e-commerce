import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/HomePage/Hero';
import TrendingProducts from '../components/HomePage/TrendingProducts';
import Operations from '../components/HomePage/Operations';
import Banner from '../components/HomePage/Banner';
import CTA from '../components/HomePage/CTA';
import MainFooter from '../components/MainFooter';
const Home = () => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <TrendingProducts />
      <Operations />
      <Banner />
      <CTA />
      <MainFooter />
    </motion.div>
  );
};

export default Home;
