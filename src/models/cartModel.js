import { Schema, model } from "mongoose";

const cartSchema = new Schema({
  products: [
    {
      productId: {
        type: Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      quantity: { type: Number, default: 1 },
    },
  ],
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  active: {
    type: Boolean,
    default: true,
  },
  modifiedOn: {
    type: Date,
    default: Date.now,
  },
});

const Cart = model("Cart", cartSchema);
export default Cart;
