import { Router } from "express";
import {
  allProducts,
  addProduct,
  deleteProduct,
  updateProduct,
  getProductById,
  addToCart,
  getAllProductsFromCart,
} from "../controllers/productController";

const productRouter = Router();

productRouter.post("/add-product", addProduct);
productRouter.get("/all", allProducts);
productRouter.delete("/:id/delete-product", deleteProduct);
productRouter.post("/:id/addToCart/:userId", addToCart);
productRouter.put("/:id/update-product", updateProduct);
productRouter.get("/:id", getProductById);
productRouter.get("/:userId/cart", getAllProductsFromCart);
export default productRouter;
