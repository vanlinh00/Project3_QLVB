import express from "express";
import { isBuffer } from "util";
import homeController from "../controllers/homeController";
import vanbandenController from "../controllers/vanbandenController";
import adminController from "../controllers/adminController";
import roomController from "../controllers/roomController";



var multer = require('multer');
const DIR = './uploads';
let router = express.Router();
const path = require('path');

//moi them
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')

const initializePassport = require('../config/passport-config')


initializePassport(
  passport,
  email => users.find(user => user.email === email),
  id => users.find(user => user.id === id)
)



let initWebRoutes = (app) => {

  app.use(flash())
  app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  }))
  app.use(passport.initialize())
  app.use(passport.session())
  app.use(methodOverride('_method'))
  app.locals.error = null;





  app.get('/login', checkNotAuthenticated, homeController.login)

  app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
    successRedirect: '/trangchu',
    failureRedirect: '/login',
    failureFlash: true
  }))

  app.get('/register', checkNotAuthenticated, (req, res) => {
    res.render('testlogin/register.ejs')
  })

  app.post('/register', checkNotAuthenticated, async (req, res) => {
    try {
      res.redirect('/login')
    } catch {
      res.redirect('/register')
    }
  })


  app.delete('/logout', (req, res) => {
    req.logOut()
    res.redirect('/login')
  })

  function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next()
    }

    res.redirect('/login')
  }

  function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return res.redirect('/trangchu')
    }
    next()
  }

  /*  trên là  phần authentication */

  let storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, DIR);
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
  });

  let upload = multer({ storage: storage });


  /* phần user*/

  /*phần trang chủ*/
  router.get('/trangchu', checkAuthenticated, homeController.trangchu);

  /* phần văn bản đến*/
  router.get('/vanthu/themvanbanden', checkAuthenticated, vanbandenController.themvanbanden);
  router.post('/vanthu/themvanbanden', checkAuthenticated, upload.single('profile'), vanbandenController.themvanbandentc);

  router.get('/vanbanden/vanbanchophanloai', checkAuthenticated, vanbandenController.vanbanchophanloai);
  router.get('/vanbanden/vanbanchophanloai/phanloai', checkAuthenticated, vanbandenController.vanbanchophanloaiphanloai);
  router.post('/vanbanden/vanbanchophanloai/phanloai', checkAuthenticated, vanbandenController.postvanbanchophanloaiphanloai);

  router.get('/vanbanden/vanbanchopheduyet', checkAuthenticated, vanbandenController.vanbanchopheduyet);
  router.get('/vanbanden/vanbanchopheduyet/pheduyet', checkAuthenticated, vanbandenController.vanbanchopheduyetpheduyet);
  router.post('/vanbanden/vanbanchopheduyet/pheduyet', checkAuthenticated, vanbandenController.postVanBanChoPheDuyetPheduyet);
  router.post('/vanbanden/xoavanbanden', checkAuthenticated, vanbandenController.xoaVanBanDen);

  router.get('/vanbanden/vanbandapheduyet', checkAuthenticated, vanbandenController.vanBanDaPheDuyet);

  /* quản lý phòng ban*/
  router.get('/phongban/danhsachphongban',checkAuthenticated, roomController.danhSachPhongBan);
  router.post('/phongban/xoaphongban',checkAuthenticated, roomController.xoaPhongBan);
  router.post('/phongban/themphongban',checkAuthenticated, roomController.themPhongBan);

  router.get('/phongban/xemphongban',checkAuthenticated, roomController.xemDanhSachUerPhongBan);
  router.post('/phongban/themuservaophong',checkAuthenticated, roomController.themUserVaoPhong);
  router.post('/phongban/xoauser',checkAuthenticated, roomController.xoaUser);
 
  router.get('/phongban/edituserphong',roomController.editUserPhong);



  /* phần admin */

  router.get('/admin', adminController.admin);
  router.get('/admin/getalluser', adminController.admingetalluser);
  router.get('/admin/users/edit', adminController.adminedituser);
  router.get('/admin/users/view', adminController.adminviewuer);
  router.get('/admin/users/delete', adminController.admindeleteuser);

  return app.use("/", router);

}

module.exports = initWebRoutes;