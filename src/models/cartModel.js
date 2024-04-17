import { Schema, model } from "mongoose";

const cartSchema = new Schema({
  products: [
    {
      productId: {
        type: Schema.Types.ObjectId,
        ref: "Product",
      },
      quantity: { type: Number, default: 1 },
    },
  ],
  user: { type: Schema.Types.ObjectId, ref: "User" },
  active: {
    type: Boolean,
    default: true,
  },
});

const Cart = model("Cart", cartSchema);
export default Cart;
