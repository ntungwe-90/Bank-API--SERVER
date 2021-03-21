const express = require("express");

const { body } = require("express-validator");

const router = express.Router();

const {
  createAccountController,
  listAccountController,
  deleteAccountController,
} = require("../controllers/accountController");

router.post(
  "/account",
  [
    body("accountName").notEmpty().withMessage("accountName is required"),
    body("accountNumber")
      .notEmpty()
      .withMessage("accountNumber is required")
      .isNumeric()
      .withMessage("accountNumber is figures")
      .isLength()
      .withMessage({ min: 12, max: 12 }),
  ],
  createAccountController
);

router.get("/account/:id?", listAccountController);

router.delete("/account/:id?", deleteAccountController);

module.exports = router;
