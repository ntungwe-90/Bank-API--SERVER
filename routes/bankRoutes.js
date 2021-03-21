const express = require("express");

const { body } = require("express-validator");

const router = express.Router();

const {
  listBankController,
  createBankController,
  updateBankController,
  deleteBankController,
} = require("../controllers/bankController");

router.get("/bank/:id?", listBankController);

router.post(
  "/bank",
  [
    body("name").notEmpty().withMessage("Bank name is required"),
    body("branch").notEmpty().withMessage("Bank branch is required"),
  ],
  createBankController
);

router.put("/bank", updateBankController);

router.delete("/bank", deleteBankController);
