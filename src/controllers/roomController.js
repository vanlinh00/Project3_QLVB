var roomService = require('../services/roomService')
var UserService= require('../services/userService');
let danhSachPhongBan = async (req, res) => {
  const mess = req.flash('messages');
  var getAllRoom = await roomService.getAllRoom();
  console.log("khong in ra gi a");
   console.log(getAllRoom);
  res.render('room/listroom.ejs', { getAllRoom, mess, user: req.user });

}
let themPhongBan = async (req, res) => {

  var newRoom = {
    ma_phong: req.body.ma_phong,
    ten_phong: req.body.ten_phong,
    so_can_bo: req.body.so_can_bo,
    dia_chi: req.body.dia_chi,
    sdt_phong: req.body.sdt_phong
  }
  if (req.body.sdt_phong == "" || req.body.ma_phong == "" || req.body.ten_phong == "" || req.body.so_can_bo == "" || req.body.dia_chi == "") {
    req.flash('messages', "Vui lòng điền đầy đủ thông tin");
  }
  else {
    var room = await roomService.addRoom(newRoom);
    if (room !== null) {
      req.flash('messages', "thêm phòng ban thành công");
    } else {
      req.flash('messages', "thêm phòng ban thất bại");
    }
  }

  res.redirect("/phongban/danhsachphongban");
}
let xemDanhSachUerPhongBan = async (req, res) => {
  const mess = req.flash('messages');
  var message;
  var idPhongBan;
  if (mess.length > 0) {
    idPhongBan = mess[0].idPhong;
    message = mess[0].message;
    var getUserByIdRoom = await roomService.getUserByIdRoom(mess[0].idPhong);
  }
  else {
    message = "";
    idPhongBan = req.query.id;
    var getUserByIdRoom = await roomService.getUserByIdRoom(idPhongBan);
  }
  res.render('room/listuserInRoom.ejs', { idPhongBan, getUserByIdRoom, user: req.user,message })
}

let themUserVaoPhong = async (req, res) => {
  var chucVu = req.body.chuc_vu;
  var chucVuUser;
  if (0 == chucVu.localeCompare("Văn Thư")) {

    chucVuUser = 1;

  } else if (0 == chucVu.localeCompare("Lãnh đạo phòng HC-TC")) {
    chucVuUser = 2;
  }
  else if (0 == chucVu.localeCompare("Chánh văn phòng")) { chucVuUser = 3; }

  else if (0 == chucVu.localeCompare("Lãnh đạo UBND-TP")) { chucVuUser = 4; }

  else if (0 == chucVu.localeCompare("Lãnh đạo VP UBND-TP")) { chucVuUser = 5; }

  else if (0 == chucVu.localeCompare("Trưởng phòng")) { chucVuUser = 6; }
  else if (0 == chucVu.localeCompare("Phó trưởng phòng")) { chucVuUser = 7; }
  else if (0 == chucVu.localeCompare("Chuyên viên")) { chucVuUser = 8; }

  var addNewUser = {
    ho_ten: req.body.ho_ten,
    ngay_sinh: req.body.ngay_sinh,
    goi_tinh: req.body.goi_tinh,
    chuc_vu: chucVuUser,
    id_phong_ban: req.query.id,
    role:"1",
    email:req.body.email,
    password:req.body.password,
  }
 // console.log(addNewUser)
  var sendData;
  if (req.body.email==""||req.body.password==""||req.body.ho_ten == "" || req.body.ngay_sinh == "" || req.body.goi_tinh == "" || req.body.chuc_vu == "") {
    sendData = {
      idPhong: req.query.id,
      message: "Vui lòng điền đầy đủ thông tin"
    }
  } else {
    var newUser = await UserService.addUser(addNewUser)
    
    sendData = {
      idPhong: req.query.id,
      message: "Thêm cán bộ thành công"
    }
  }
  req.flash('messages', sendData);
  res.redirect('/phongban/xemphongban');

}

let editUserPhong= async (req, res) => {
  const mes = req.flash('messages');
  var user={
    email:"test@gmail.com",
    role:"2",
  }
res.render('room/edituser',{user,mes});
}
module.exports = {
  danhSachPhongBan: danhSachPhongBan,
  themPhongBan: themPhongBan,
  xemDanhSachUerPhongBan: xemDanhSachUerPhongBan,
  themUserVaoPhong: themUserVaoPhong,
  editUserPhong:editUserPhong,
}