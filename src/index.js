import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const port = process.env.PORT;
import mongoose from "mongoose";
import cors from "cors";
import {
  addProduct,
  allProducts,
  deleteProduct,
  updateProduct,
} from "./controllers/productController";

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(process.env.MONGO_URI);
  console.log(`[📚 DATABASE ] MongoDB est connecté !!`);
}

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get("/", (req, res) => res.send("Bienvenue"));
app.use("/add-product", addProduct);
app.use("/all", allProducts);
app.use("/:id/delete-product", deleteProduct);
app.use("/:id/update-product", updateProduct);
app.listen(port, () =>
  console.log(`[SERVER] is running on http://localhost:${port}`)
);
