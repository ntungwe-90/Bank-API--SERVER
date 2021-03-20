const accountModel = require("../models/accountModels");
const { validationResult } = require("express-validator");

//Create Account Controllers
const createAccountController = (req, res) => {
  const { accountName, accountNumber, accountType, bankId } = req.body;

  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const account = new AccountModel({
    accountName,
    accountNumber,
    accountType,
    bankId,
  });

  account
    .save()
    .then((result) => {
      if (result) {
        res
          .status(201)
          .json({ message: "Account created successfully!", data: result });
      } else res.json({ message: " account failed" });
    })
    .catch((error) => console.log(error));
};

const listAccountController = (req, res) => {
  const { id } = req.params;

  if (id) {
    AccountModel.find({ _id: id })
      .populate("bankId")
      .then((accounts) => {
        res.json({ data: accounts });
      })
      .catch((err) => console.log(err));
  } else {
    AccountModel.find()
      .populate("bankId")
      .then((accounts) => {
        res.json({ data: accounts });
      })
      .catch((err) => console.log(err));
  }
};

const deleteAccountController = (req, res) => {
  const { id } = req.body;
  AccountModel.findByIdAndRemove(id).then((deletedAccount) => {
    if (deletedAccount) {
      AccountModel.deleteMany({ bankId: deletedAccount._id })
        .then((result) => {
          res.json({ message: "Account deleted", data: deletedAccount });
        })
        .catch((err) => console.log(err));

      return;
    }

    res.json({ message: "Account unavailable" });
  });
};

module.exports = {
  createAccountController,
  listAccountController,
  deleteAccountController,

};
