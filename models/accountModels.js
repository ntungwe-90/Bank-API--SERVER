const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AccountSchema = new Schema({
  accountName: {
    type: String,
  },

  accountNumber: {
    type: String,
  },

  accountType: {
    type: String,
    required: true,
  },

  bankId: {
    type: Schema.Types.ObjectId,
    ref: "Bank",
  },
});

const AccountModel = mongoose.model("Account", AccountSchema);

module.exports = AccountModel;
