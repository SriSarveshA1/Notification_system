const nodemailer = require("nodemailer");

module.exports=nodemailer.createTransport({//this transporter object can be used to send the mail 
    port: 465,// is the port to connect to (defaults to 587 if is secure is false or 465 if true)
    host: "smtp.gmail.com",
    secure: true, // use TLS(transport layer security)
    auth: {
      user: "sarveshrocksa1@gmail.com",
      pass: "cvqbuipyzufbmojn",//token that is generated
    },
  });
//so we have exported this transporter object which can be plugged and used latter in other places