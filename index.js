// import external modules
const express = require("express");
const bodyParser = require("body-parser");
// const mongoose = require("mongoose");

//connect to mongoose
// mongoose.connect("mongodb+srv://ntungwe:pose2011990@cluster0.k48si.mongodb.net/bank?retryWrites=true&w=majority", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// create a server instance
const server = express();

// we register bodyparser middleware to parse our request
server.use(bodyParser.json());

//database
const banksDB = [];

// bank model
class BankModel {
  constructor({ name, location, branch, phone, address, accountNumber }) {
    this.name = name;
    this.location = location;
    this.branch = branch;
    this.phone = phone;
    this.address = address;
    this.accountNumber = accountNumber;
  }
  save() {
    banksDB.push(this);
    return this;
  }
  static all() {
    return banksDB;
  }
  static update(updatedInfo = []) {
    banksDb = banksDb.map((bank) => {
      if (bank.name === updatedInfo) {
        return { ...bank, ...updatedInfo };
      }
      return bank;
    });
  }

  static delete({ name }) {
    let deletedBank = null;
    banksDb = banksDb.filter((bank) => {
      if (bank.name !== name) {
        return true;
      }
      deletedBank = bank;
      return false;
    });

    return deletedBank;
  }
}

//controllers

const listBanksController = (req, res) => {
  const banks = BankModel.all();
  res.json({ data: banks });
};

const createBankController = (req, res) => {
  // create banks
  const { name, location, branch, phone, address, accountNumber } = req.body;

  const bank = new BankModel({
    name,
    location,
    branch,
    phone,
    address,
    accountNumber,
  });
  bank.save();
  res.json({ message: "created successful", data: bank });
};

const updateBankController = (req, res) => {
  // update banks
  const { name, location, branch, phone, address, accountNumber } = reg.body;
  const updatedBank = BankModel.update({
    name,
    location,
    branch,
    phone,
    address,
    accountNumber,
  });
  res.json({ message: "successfully updated bankinfo", data: updatedBank });
};
const deleteBankController = (req, res) => {
  // delete a bank
  const { name } = req.body;
  const deletedBank = BankModel.delete({ name });
  res.json({ message: "successfully deleted bankinfo", data: deletedBank });
};

// define our routes
// view banks-get method
server.get("/bank", listBanksController);
//create bank-post method
server.post("/banks", createBankController);
//update bank-put method
server.put("/bank", updateBankController);
// delete bank delete method
server.delete("/bank", deleteBankController);

//start server
server.listen(3005, () => console.log("my server is ready"));
