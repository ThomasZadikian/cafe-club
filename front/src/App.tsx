import "./input.css";
import React, { useState, useEffect } from "react";
import { UserProvider } from "./Context/UserContext";

import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./Components/AnimatedRoutes";
import { ProductProvider } from "./Context/ProductContext";

const App = () => {
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const user = getCurrentUser();
  //   setUser(user);
  // }, []);

  return (
    <ProductProvider>
      <Router>
        <UserProvider>
          <AnimatedRoutes />
        </UserProvider>
      </Router>
    </ProductProvider>
  );
};

export default App;
