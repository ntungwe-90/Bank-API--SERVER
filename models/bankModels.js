//Import mongoose
const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const BankSchema = new Schema({
  name: {
    type: String,
  },
  branch: {
    type: String,
  },

  address: {
    type: String,
  },

  location: {
    type: String,
  },

  phone: {
    type: String,
  },

  accountNumber: {
    type: String,
  },

  accounts: [
    {
      accountsId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Account",
      },
    },
  ],
});

const BankModel = mongoose.model("Bank", BankSchema);
