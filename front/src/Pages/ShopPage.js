import React from "react";
import { motion } from "framer-motion";
import ShopCards from "../Components/ShopCards";

const ShopPage = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ShopCards />
    </motion.main>
  );
};

export default ShopPage;
