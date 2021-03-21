//import express
const express = require('express');
//import express-validator
const { body } = require('express-validator');
const userModel = require('../models/userModel');
//import an instance of express router
const router = express.Router();
//import controllers
const {createUserController} = require('../controllers/userController');

//create controllers
router.post('/signup',[body("username")
.notEmpty()
.withMessage("Username is required"),
body("email")
.isEmail()
.withMessage("Email is invalid")
.custom((value, {req}) => {
    //check if email is already taken
return userModel.findOne({email: value}).then(userDoc => {
    if(userDoc) {
        return Promise.reject("Email is already taken")
    }
})
}),
body("password")
.notEmpty()
.withMessage("Password should have at least 6 characters")
.isLength()
.withMessage({min: 6}) ], createUserController);



module.exports = router;