import mongoose, { Schema } from "mongoose";
const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  ml: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
});

const Product = mongoose.model("Product", productSchema);

export default Product;
