
var filedenService = require('../services/filedenService');
let login = async (req, res) =>{

    res.render('login.ejs')
}
let trangchu = async (req, res) => {
   // console.log(req.user.email);
   var allVanBanDenDaDuyet= await filedenService.vanBanDaPheDuyet();
   var allVanBanDen= await filedenService.allvanBanDen();
   //console.log(allVanBanDen.length);
  // console.log(allVanBanDenDaDuyet.length);
    res.render('user/trangchu.ejs', { 
        user:req.user,
        lengthVBDChuaDuyet: allVanBanDen.length-allVanBanDenDaDuyet.length,
        lengthVBDaDuyet:allVanBanDenDaDuyet.length,
    });
}

module.exports = {
    login: login,
    trangchu: trangchu,   
}
