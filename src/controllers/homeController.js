let login = async (req, res) =>{

    res.render('login.ejs')
}
let trangchu = async (req, res) => {
    console.log(req.user.email);
    res.render('user/trangchu.ejs', { user:req.user});
}
let vanbanchuaduyet = async (req, res) => {

    var data = [];
    var ob1 = {
        id: 13
    }
    var ob2 = {
        id: 14
    }
    data.push(ob1);
    data.push(ob2);
    res.render('user/vanbanchuaduyet.ejs', { data: data });
}
module.exports = {
    login: login,
    trangchu: trangchu,
 vanbanchuaduyet: vanbanchuaduyet,   
}
