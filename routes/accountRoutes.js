const express = require('express');
const { body } = require("express-validator");

const {
    createAccountController,
    listAccountController,

} = require("../controllers/accountControllers");

const router = express.Router();
router.post(
    "/account",
    [
        body("accountName").not().isEmpty().withMessage("accountName is required"),
        body("accountNumber")
        .not()
        .isEmpty()
        .withMessage("accountNumber is required"),
    ],
    createAccountController
);
router.get("/account", listAccountController);
module.exports = router;
// const router = express.Router();
// const {createAccountController,listAccountController} = require('../controllers/accountControllers')

// router.post('/account',createAccountController);
// router.get('/accounts',listAccountController)
// module.exports = router;