import User from "../models/userModel";

const createUser = async (req, res) => {
  try {
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
    });
    newUser.password = await newUser.crypto(req.body.password);

    await newUser.save();
    console.log("New user saved", newUser);

    res.json({ newUser, message: "New user saved" });
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
    res.json({ user, message: "Login succesfull" });
  } catch (error) {
    console.error(error);
  }
};

export { createUser, login };
