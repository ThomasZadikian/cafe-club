const express = require("express");
const cors = require("cors");
const app = express();

const productsRoutes = require("./controllers/ProductsController");
const productsTypes = require("./controllers/ProductsTypeController");
const products = require("./controllers/ProductsDisplayController");

app.use(express.json());
app.use(cors());

app.use("/api/products", productsRoutes);
app.use("/api/products", productsTypes);
app.use("/api/products", products);

app.post("/api/products", (req, res) => {
  const { productName, description, price, origin } = req.body;
  res.status(201).json({ message: "Product created successfully" });
});

app.post("/api/confirmation", (req, res) => {
  res.json({ message: "Le serveur est en marche" });
});

app.use((req, res, next) => {
  res.status(404).json({ error: "Route not found" });
});

const port = process.env.PORT || 3001;
app.listen(port, (error) => {
  if (error) {
    console.error("Error starting the server:", error);
  } else {
    console.log(`Server is running on port ${port}`);
  }
});
