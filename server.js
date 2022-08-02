const express= require('express')
const app = express();
const bodyParser=require('body-parser');
const serverConfig = require('./configs/server.config')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));




app.listen(serverConfig.PORT,()=>{
    console.log("Server is listen on port " + process.env.PORT)
})