import express, { Request, Response, NextFunction } from "express";
import cors from "cors";

/* const for import API functions for products */
import productsRoutes from "./controllers/ProductsController/ProductsController"; 
import productsTypes from "./controllers/ProductsController/ProductsTypeController";
import products from "./controllers/ProductsController/ProductsDisplayController";

// /* const for import API functions for users */
import insertUser from "./controllers/UsersController/insertUserController";
import fetchUsers from "./controllers/UsersController/fetchUsersController";
import fetchUser from "./controllers/UsersController/fetchUserController";
import fetchUserConnect from "./controllers/UsersController/fetchUserConnect";
import fetchUserWithJwt from "./controllers/UsersController/fetchUserWithJwt";

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
});
