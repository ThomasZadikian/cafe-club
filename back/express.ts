import express, { Request, Response, NextFunction } from "express";
import cors from "cors";

/* const for import API functions for products */
const productsRoutes = require("./controllers/ProductsController/ProductsController");
const productsTypes = require("./controllers/ProductsController/ProductsTypeController");
const products = require("./controllers/ProductsController/ProductsDisplayController");

/* const for import API functions for users */
const insertUser = require("./controllers/UsersController/insertUserController");
const fetchUsers = require("./controllers/UsersController/fetchUsersController");
const fetchUser = require("./controllers/UsersController/fetchUserController");
const fetchUserConnect = require("./controllers/UsersController/fetchUserConnect");
const fetchUserWithJwt = require("./controllers/UsersController/fetchUserWithJwt");

const app = express();
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
app.use("/api/users", fetchUserWithJwt);

/* initialize value for Express */
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ error: "Route not found" });
});

app.listen(3001, "0.0.0.0", () => {
  console.log("Server is running on port 3001");
});
