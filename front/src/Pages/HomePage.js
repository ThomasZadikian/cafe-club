import React from "react";
import { motion } from "framer-motion";
import BestSalesProducts from "../Components/BestSalesProducts";

const HomePage = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <BestSalesProducts />
    </motion.main>
  );
};

export default HomePage;
