import User from "../models/userModel";
import { generateAuthToken } from "../middlewares/auth";

const createUser = async (req, res) => {
  try {
    const newUser = new User({
      name: req.body.name,
      firstname: req.body.firstname,
      email: req.body.email,
      password: req.body.password,
      address: req.body.address,
      phoneNumber: req.body.phoneNumber,
    });
    newUser.password = await newUser.crypto(req.body.password);

    await newUser.save();
    const token = generateAuthToken({
      email: newUser.email,
      name: newUser.name,
    });
    console.log(token);
    res.json({ newUser, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating user" });
  }
};

const login = async (req, res) => {
  const email = req.body.email;
  try {
    const user = await User.findOne({ email }).select("+password");
    const verify = await user.verifPass(req.body.password, user.password);
    if (!verify) {
      const error = new Error("Invalid Password");
      console.log(error);
      res.json({ message: "Invalid Password", error });
      throw error;
    }
    const token = generateAuthToken(user);
    res.json({ user, token });
  } catch (error) {
    console.error(error);
  }
};

export { createUser, login };
