import "./input.css";
import React, { useState, useEffect } from "react";
import { getCurrentUser } from "./Services/UserServices/connectUserService";
import UserContext from "./Components/shared/UserContext";

import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./Components/AnimatedRoutes";
import { ProductProvider } from "./Components/shared/ProductContext";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const user = getCurrentUser();
    setUser(user);
  }, []);

  return (
    <ProductProvider>
      <Router>
        <UserContext.Provider value={{ user, setUser }}>
          <AnimatedRoutes />
        </UserContext.Provider>
      </Router>
    </ProductProvider>
  );
};

export default App;
