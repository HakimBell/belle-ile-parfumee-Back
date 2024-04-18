import { Schema, model } from "mongoose";

const cartItemSchema = new Schema({
  product: { type: Schema.Types.ObjectId, ref: "Product" },
  quantity: { type: Number, default: 1 },
});

const cartSchema = new Schema({
  items: [cartItemSchema],
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  active: { type: Boolean, default: true },
});

const Cart = model("Cart", cartSchema);

export default Cart;
