import React from "react";
import { motion } from "framer-motion";
import ShopCards from "../Components/shared/ShopCards";

type ShopPageProps = {};

const ShopPage: React.FC<ShopPageProps> = () => {
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
