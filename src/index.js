import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
const path = require('path');



  
import initWebRoutes from './route/web';
require('dotenv').config();



let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, 'public')));

//them


viewEngine(app);
initWebRoutes(app);

  

let port = process.env.PORT ;
//Port === undefined => port = 6969

app.listen(port, () => {
    //callback
    console.log("Backend Nodejs is runing on the port : " + port)
})


