const accountModel = require("../models/accountModels");
const { validationResult } = require("express-validator");

const createAccountController = async (req, res) => {
  const { accountName, accountNumber, accountType, bankId } = req.body;
  //finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors });
  }
  try {
    const account = new accountModel({
      accountName,
      accountNumber,
      accountType,
      bankId,
    }).save();
    res
      .status(202)
      .json({ message: "Account created successfully", data: account });
  } catch (error) {
    res.status(500).json({
      message: "something went wrong please try again",
      error: error,
    });
  }
};

const listAccountController = (req, res) => {
  accountModel
    .find()
    .populate("bankId", "name loction branch phone")
    .then((accounts) => {
      res.json({ data: accounts });
    })
    .catch((err) => console.log(err));
};

module.exports = {
  createAccountController,
  listAccountController,
};
