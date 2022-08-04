const express= require('express')
const app = express();
const bodyParser=require('body-parser');
const serverConfig = require('./configs/server.config')
const mongoose=require('mongoose');
const dbConfig=require('./configs/db.config');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


mongoose.connect(dbConfig.DB_URL);//so we have connected to this url.
const db=mongoose.connection;//so we can get the connected db object

db.on("error",()=>{
    console.log("Error while connecting to the db")
});
db.once("open",()=>{
    console.log("Connected to the db successfully")
})


require("./routes/notification.route")(app);

app.listen(serverConfig.PORT,()=>{
    console.log("Server is listen on port " + process.env.PORT)
})