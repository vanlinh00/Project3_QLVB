import express from "express";
import homeController from "../controllers/homeController";
const db = require('../config/database.config');
var multer = require('multer');
const DIR = './uploads';
let router = express.Router();
const path = require('path');

let initWebRoutes = (app) => {

  let storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, DIR);
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
  });

  let upload = multer({ storage: storage });

  // login
  router.get('/login', homeController.login);
  router.post('/login', homeController.loginuser);

  router.get('/trangchu', homeController.trangchu);

  router.get('/vanthu/themvanbanden', homeController.themvanbanden);
  router.post('/vanthu/themvanbanden', upload.single('profile'), homeController.themvanbandentc);

  router.get('/vanthu/vanbanchuaduyet', homeController.vanbanchuaduyet);
  router.get('/vanbanden/xemchitiet', homeController.vbdxemchitiet);
  return app.use("/", router);
}

module.exports = initWebRoutes;