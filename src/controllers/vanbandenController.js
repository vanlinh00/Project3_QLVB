var filedenService = require('../services/filedenService');
let themvanbanden = async (req, res) => {
    res.render("user/themvanbanden", { user: req.user });
}
let themvanbandentc = async (req, res) => {
    var fileden = {
        tenvb: req.body.tenvb,
        nguoiguiden: req.body.nguoiguiden,
        noiguiden: req.body.noiguiden,
        ngayguiden: req.body.ngayguiden,
        // ngayduyet:
        name: req.file.filename,
        // mota:
        type: req.file.mimetype,
        size: req.file.size,
        path: req.file.path,
        // list_id_nguoi_duyet:
        // id_nguoitat:
    }
    var data = await filedenService.addfiletext(fileden);
    console.log("đã thêm được");
    res.redirect("/vanthu/themvanbanden");
    console.log(data);

}

let vanbanchophanloai = async (req, res) => {
    var vanbanchophanloai = await filedenService.getvanphanchophanloai();
    console.log(vanbanchophanloai);
    res.render("user/vanbanchophanloai", { alldatavb: vanbanchophanloai, user: req.user });
}
let vanbanchophanloaiphanloai = async (req, res) => {
    console.log(req.query.id);
    res.render("user/vanbanchophanloaiphanloai", { user: req.user });
}
module.exports = {
    themvanbanden: themvanbanden,
    themvanbandentc: themvanbandentc,
    vanbanchophanloai: vanbanchophanloai,
    vanbanchophanloaiphanloai: vanbanchophanloaiphanloai,
}