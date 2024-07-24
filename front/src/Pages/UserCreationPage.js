import React from "react";
import { motion } from "framer-motion";
import UserForm from "../Components/UserForm";

const UserCreationPage = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <UserForm />
    </motion.main>
  );
};

export default UserCreationPage;
