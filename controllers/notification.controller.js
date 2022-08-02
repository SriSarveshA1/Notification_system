const Notification= require("../models/notification.model");

//controller to create the notification
//validation of the notificationRequest body should be done in the middleware
exports.acceptNotificationRequest = async (req,res)=>{

    //Create notification object based on the request body.
    
    try{
        const notificationObj={
            subject: req.body.subject,
            recepientEmails:req.body.recepientEmails,
            content:req.body.content,
            requester:req.body.requester,
            status:req.body.status
        }
        //save the notification request in the mongodb
       const notification=await Notification.create(notificationObj);
    
        //send the tracking id back to the caller 
           // _id can be considered as the tracking id 

        req.status(201).send({
            message:"Request Accepted",
            trackingId:notification._id//so we are sending the objectId of the notification
        })
    }
    catch(err){
        res.status(500).send({
            message: err.message
        })
    }
    
}


//controller to fetch notification details based on the notification_id passed  

 exports.getNotificationDetails=async (req,res)=>{
        
       try{
        const trackingId=req.params.id;

        const notification=await Notification.findOne({_id:trackingId});
 
        res.status(200).send(notification);
       }
       catch(err){

        res.status(500).send({message:err.message});
        
       }

 }