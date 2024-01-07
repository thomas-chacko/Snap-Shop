const userModel = require("../models/userSchema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// register api
const register = async (req, res) => {
  const { name, email, password } = req.body;

  // validate the user information
  if (!name || !email || !password) {
    res.status(404).json("Please enter name email and password");
    return;
  }
  try {
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      res.status(400).json("email already in use");
    } else {
      // Hash the password before saving it to the database
      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = new userModel({
        name,
        email,
        password: hashedPassword,
      });

      // Save the new user to the database
      await newUser.save();
      res.status(201).json(newUser);
    }
  } catch (error) {
    res.status(500).json("an error occured.", error);
  }
};

// login api
const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json("Please enter email and password");
    return;
  }
  try {
    const user = await userModel.findOne({ email });
    if (user) {
      // Compare the entered password with the hashed password in the database
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (passwordMatch) {
        // create a jwt token
        const token = jwt.sign({ userId: user._id }, process.env.JwtSecretKey);
        res.status(201).json({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token,
        });
      } else {
        res.status(400).json("Invalid email or password");
      }
    } else {
      res.status(400).json("Invalid email or password");
    }
  } catch (error) {
    res
      .status(500)
      .json("An error occurred during login. Please try again later.");
  }
};

module.exports = { register, login };
