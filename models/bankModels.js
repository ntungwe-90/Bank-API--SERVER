//Bank Model
const mongoose =require("mongoose")
const {Schema}=mongoose
const BankSchema = new mongoose.Schema({
    name:String,
    location:String,
    branch:String,
    address:String,
    phone:String,
    accounts:[{type:Schema.Types.ObjectId,ref:"Account"}]

})

const BankModel = mongoose.model("Bank",BankSchema)

module.exports=BankModel;
