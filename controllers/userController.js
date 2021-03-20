const UserModel = require("../models/userModel");
const { validationResult } = require("express-validator");
const { findOne } = require("../models/userModel");

const createUserController = async (req, res) => {
  const { userName, email, password } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
   const exists = UserModel.findOne({email: email})
   if (exists) {
       return res.status(400).json({ message:"Email already exists"})
   }
       
    const bcrypt = require("bcryptjs");
    const salt = bcrypt.genSaltSync(13);
    const hash = bcrypt.hashSync(password, salt);
    const user = await new UserModel({
      userName,
      email,
      password: hash,
    }).save();
    res.status(201).json({ message: "User created!", data: result });
  } catch (error) {
      console.log(error)
    res.status(500).json({ message: "Failed to create user", error: error });
  }
};

const viewUserController = (req, res) => {
  UserModel.find()
    .populate("account", "userName, email, password")
    .then((users) => {
      res.json({ data: users });
    })
    .catch((err) => console.log(err));
};

module.exports = {
  createUserController,
  viewUserController,
};