
var UserService = require('../services/userService');

let getallus = async (req, res) => {
    let data = await UserService.getalluser();
    res.send({ result: data });

}
let login = async (req, res) => {
    res.render('test/about.ejs');
}

let loginuser = async (req, res) => {
    let a = "0982691498";
    let data = await UserService.checkuserlogin(a);
    console.log(data+"HIHIHI")
    if (data != 0) {
        console.log(data);
      //  res.redirect("/login");
    } else {
        res.redirect("/login");
    }

}

module.exports = {
    getallus: getallus,
    loginuser: loginuser,
    login: login,
}
