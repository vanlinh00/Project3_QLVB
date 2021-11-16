
var UserService = require('../services/userService');
const db = require('../config/database.config');


let getallus = async (req, res) => {
    let data = await UserService.getalluser();
    res.send({ result: data });

}
let login = async (req, res) => {
 res.render('login.ejs');
}
let trangchu = async (req, res) => {
    res.render('user/trangchu.ejs',{vanlinh:"test"});
}

let themvanbanden = async (req, res) => {
    res.render('user/addvbden.ejs');
}

let vbdxemchitiet = async (req, res) => {
    res.render('user/xemchitietvb.ejs');
}

let themvanbandentc = async (req, res) => {
    let message =''
       //  console.log(req.file);
       console.log(req.body.email);
       message : "Error! in image upload."
         if (!req.file) {
             console.log("No file received");
               message = "Error! in image upload."
             res.render('user/indextestupfile',{message: message, status:'danger'});
         
           } else {
             console.log('file received');
            // console.log(req);
             var sql = "INSERT INTO `file`(`name`, `type`, `size`) VALUES ('" + req.file.filename + "', '"+req.file.mimetype+"', '"+req.file.size+"')";
     
                     var query = db.query(sql, function(err, result) {
                        console.log('inserted data');
                     });
             message = "Successfully! uploaded";
             res.redirect("/vanthu/themvanbanden");
             // res.render('user/indextestupfile',{message: message, status:'success'});
     
           }
}
let vanbanchuaduyet = async (req, res) => {
    res.render('user/vanbanchuaduyet.ejs');
}
let loginuser = async (req, res) => {
    console.log(req.body);
    let data = await UserService.checkuserlogin(req.body.email);
    if (data != 0) {
      //  console.log(data);
      res.redirect("/trangchu");
    } else {
        console.log(" tai khoan sai");
        res.redirect("/login");
    }

}



module.exports = {
    getallus: getallus,
    loginuser: loginuser,
    login: login,
    trangchu:trangchu,
    themvanbanden:themvanbanden,
    vanbanchuaduyet:vanbanchuaduyet,
    themvanbandentc:themvanbandentc,
    vbdxemchitiet:vbdxemchitiet,
}
