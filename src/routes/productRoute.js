import { Router } from "express";
import {
  allProducts,
  addProduct,
  deleteProduct,
  updateProduct,
  getProductById,
  addToCart,
} from "../controllers/productController";

const productRouter = Router();

productRouter.post("/add-product", addProduct);
productRouter.get("/all", allProducts);
productRouter.delete("/:id/delete-product", deleteProduct);
productRouter.post("/:id/addToCart/:userId", addToCart);
productRouter.put("/:id/update-product", updateProduct);
productRouter.get("/:id", getProductById);
export default productRouter;
