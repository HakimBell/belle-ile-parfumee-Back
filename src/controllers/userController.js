import User from "../models/userModel";
import { generateAuthToken } from "../middlewares/auth";

const createUser = async (req, res) => {
  try {
    const newUser = new User({
      lastname: req.body.lastname,
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
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    const verify = await user.verifPass(req.body.password, user.password);
    if (!verify) {
      return res.status(400).json({ message: "Invalid Password" });
    }
    const token = generateAuthToken(user);
    res.json({ user, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export { createUser, login };
