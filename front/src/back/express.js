const express = require("express");
const cors = require("cors");
const app = express();

/* const for import API functions for products */
const productsRoutes = require("./controllers/ProductsController/ProductsController");
const productsTypes = require("./controllers/ProductsController/ProductsTypeController");
const products = require("./controllers/ProductsController/ProductsDisplayController");

/* const for import API functions for users */
const insertUser = require("./controllers/UsersController/insertUserController");
const fetchUsers = require("./controllers/UsersController/fetchUsersController");
const fetchUser = require("./controllers/UsersController/fetchUserController");
const fetchUserConnect = require("./controllers/UsersController/fetchUserConnect");

app.use(express.json());
app.use(cors());

/* routes for products */
app.use("/api/products", productsRoutes);
app.use("/api/products", productsTypes);
app.use("/api/products", products);

/* routes for users */
app.use("/api/users", insertUser);
app.use("/api/users", fetchUsers);
app.use("/api/users", fetchUser);
app.use("/api/users", fetchUserConnect);

/* initialize value for Express */

app.use((res) => {
  res.status(404).json({ error: "Route not found" });
  console.log(res);
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
