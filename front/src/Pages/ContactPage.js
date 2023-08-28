import React from "react";
import { motion } from "framer-motion";
import ProductForm from "../Components/ProductForm";

const ContactPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ProductForm />
    </motion.div>
  );
};

export default ContactPage;
