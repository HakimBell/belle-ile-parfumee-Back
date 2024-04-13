import { mongoose, Schema } from "mongoose";
import bcrypt from "bcryptjs";
const userSchema = new Schema({
  name: { type: String, required: true },
  firstName: { type: String },
  email: { type: String, unique: true, required: true },
  password: {
    type: String,
    required: true,
    min: [6, "Must be at least 6 characters"],
  },
  address: { type: String, required: true },
  zipCode: {
    type: Number,
    min: [1000, "Zip Code is too short"],
    max: 99999,
    // required: true,
  },
  phoneNumber: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
  cart: [{ type: Schema.Types.ObjectId, ref: "Product" }],
});

userSchema.methods.crypto = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  return hash;
};
userSchema.methods.verifPass = async (password, elderPassword) => {
  const result = await bcrypt.compare(password, elderPassword);
  return result;
};

const User = mongoose.model("User", userSchema);

export default User;
