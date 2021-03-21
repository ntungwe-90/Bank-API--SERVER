const UserModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");

const createUserController = (req, res) => {
  const { username, email, password } = req.body;

  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  bcrypt.hash(password, 10).then((hashedPassword) => {
    const user = new UserModel({ username, email, password: hashedPassword });

    user
      .save()
      .then((result) => {
        if (result) {
          res
            .status(201)
            .json({ message: "User created successfully!", data: result });
        } else res.json({ message: "Failed to create User" });
      })
      .catch((error) => console.log(error))
      .catch((err) => console.log(err));
  });
};

module.exports = { createUserController };
