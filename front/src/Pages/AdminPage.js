import React from "react";
import { motion } from "framer-motion";
import ProductForm from "../Components/ProductForm";

const AdminPage = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ProductForm />
    </motion.main>
  );
};

export default AdminPage;
