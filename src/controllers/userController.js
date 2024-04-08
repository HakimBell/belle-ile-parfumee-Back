import User from "../models/userModel";

const createUser = async (req, res) => {
  try {
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
    });

    // Appel de la méthode crypto après l'initialisation de newUser
    newUser.password = await newUser.crypto(req.body.password);

    await newUser.save();
    console.log("New user saved", newUser);

    res.json({ newUser, message: "New user saved" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating user" });
  }
};

export default createUser;
