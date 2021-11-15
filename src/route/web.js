import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getallus);
      
    // login
    router.get('/login', homeController.login);
    router.get('/loginuser', homeController.loginuser);
    
    return app.use("/", router);
}

module.exports = initWebRoutes;