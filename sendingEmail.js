/*
This file will contain the sample code for sending the email notification.
*/
//we are going to use a nodemailer module

const nodemailer = require("nodemailer");

const transporter=nodemailer.createTransport({//this transporter object can be used to send the mail 
    port: 465,// is the port to connect to (defaults to 587 if is secure is false or 465 if true)
    host: "smtp.gmail.com",
    secure: true, // use TLS(transport layer security)
    auth: {
      user: "sarveshrocksa1@gmail.com",
      pass: "cvqbuipyzufbmojn",//token that is generated
    },
  });

//sending mail.

const mailDataObj={//the content that we want to sent
    //so this from email id will be the once whos smtp credentials we are using here.
    to:"r.srisarvesh@gmail.com",
    subject:"Checking how the email sending is working",
    text:"Sample text content",
    html:"<b>Hello world</b>"
}

transporter.sendMail(mailDataObj,(err,data)=>{
       if(err)
       {
        console.log(err.message);
       }
       else{
        console.log("Email sent successfully");
       }
})