var UserService = require('../services/userService');
let admingetalluser = async function(req,res) {
    let data = await UserService.getalluser();
 res.render('admin/getalluser',{userData:data,name:"admin"});
}
let admin = function(req,res) {
    res.render('admin/trangchu',{name:"admin"});
}
let adminedituser=function(req,res) {
    var id=req.query.id;
    console.log("vao day roi"+id);

}
let adminviewuer= function(req,res) {

}
let admindeleteuser= function(req,res) {

}
module.exports={
    admingetalluser: admingetalluser,
    admin:admin,
    adminedituser:adminedituser,
    adminviewuer:adminviewuer,
    admindeleteuser:admindeleteuser,
}

