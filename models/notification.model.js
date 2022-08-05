//we have to define the  schema for the notification model.
const mongoose=require('mongoose');
const constants=require("../utils/constants")
const notificationSchema=new mongoose.Schema({
    subject:{
        type:String,
        required:true
    },
    recepientEmails:{
        type:String,//comma seperated mails will be needed 
        required:true
    },
    content:{
        type:String,
        required:true
    },
    requester:{
        type:String
    },
    status:{
        type:String,
        default:constants.status.unsent,
        enum:[constants.status.unsent,constants.status.sent]
    },
    createdAt:{
        type:Date,
        immutable:true,
        default:()=>{
            return Date.now();
        }
    },
    updatedAt:{
        type:Date,
        default:()=>{
            return Date.now();
        }
    }


});

module.exports=mongoose.model("notification",notificationSchema);//so we need to pass the name of the model(that is how we needed the model name to be created in db) along with the schema

