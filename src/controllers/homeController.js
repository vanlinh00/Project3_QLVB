let login = async (req, res) =>{

    res.render('login.ejs')
}
let trangchu = async (req, res) => {
    console.log(req.user.email);
    res.render('user/trangchu.ejs', { user:req.user});
}

module.exports = {
    login: login,
    trangchu: trangchu,   
}
