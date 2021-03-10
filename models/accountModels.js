const mongoose =require("mongoose");
const {Schema}=mongoose;

const accountSchema = new mongoose.Schema({
    accountName:String,
    accountNumber:Number,
    accountType:String,
    bankId:{type:Schema.Types.ObjectId,ref:"Bank"}

})
const accountModel=mongoose.model("Account",accountSchema)
