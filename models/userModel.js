const mongoose = require("mongoose");

const { Schema } = mongoose;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  accounts: [
    {
      id: {
        type: Schema.Types.ObjectId,
        ref: "Account",
      },
    },
  ],
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
