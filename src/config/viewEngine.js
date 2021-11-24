import express from "express";
let configViewEngine = (app) => {
    
   app.engine('ejs', require('express-ejs-extend')); // add this line
    app.use(express.static("./src/public"));
    app.set("view engine", "ejs");
    app.set("views", "./src/views")

}

module.exports = configViewEngine;