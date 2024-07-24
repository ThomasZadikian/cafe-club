import React from "react";
import { motion } from "framer-motion";
import ConnectForm from "../Components/shared/ConnectForm";

const UserConnectPage = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ConnectForm />
    </motion.main>
  );
};

export default UserConnectPage;
