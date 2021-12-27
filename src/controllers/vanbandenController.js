var filedenService = require('../services/filedenService');


const WordExtractor = require("word-extractor");

// thêm văn bản
let themvanbanden = async (req, res) => {
    const mess = req.flash('messages');
    res.render('user/themvanbanden', { user: req.user, mes: mess });
}
let themvanbandentc = async (req, res) => {
    //    type: req.file.mimetype,
    //    size: req.file.size,
    //    path: req.file.path,
    var ten_vb = req.body.ten_vb
    var nguoi_gui_den = req.body.nguoi_gui_den
    var noi_gui_den = req.body.noi_gui_den
    var thoi_gian_nhan = req.body.thoi_gian_nhan
    var ma_co_quan = req.body.ma_co_quan
    var so_ki_hieu = req.body.so_ki_hieu

    if (req.file == undefined || so_ki_hieu == "" || ma_co_quan == "" || nguoi_gui_den == "" || ten_vb == "" || noi_gui_den == "" || thoi_gian_nhan == "") {

        req.flash('messages', "vui lòng nhập đầy đủ tham số");
    }
    else {
        var fileDen = {
            ten_vb: req.body.ten_vb,
            nguoi_gui_den: req.body.nguoi_gui_den,
            noi_gui_den: req.body.noi_gui_den,
            thoi_gian_nhan: req.body.thoi_gian_nhan,
            ma_co_quan: req.body.ma_co_quan,
            so_ki_hieu: req.body.so_ki_hieu,
            name: req.file.filename,
        }
        var data = await filedenService.addFileText(fileDen);
        if (data !== null) {
            req.flash('messages', "thêm văn bản thành công");

        }
    }
    res.redirect("/vanthu/themvanbanden");
}

let vanbanchophanloai = async (req, res) => {
    var vanbanchophanloai = await filedenService.getVanBanChoPhanLoai();
    const mess = req.flash('messages');
    res.render("user/vanbanchophanloai", { alldatavb: vanbanchophanloai, user: req.user, mess });

}
let vanbanchophanloaiphanloai = async (req, res) => {
    let fileVanbanDen = await filedenService.checkFileById(req.query.id);
    let namefileworld = fileVanbanDen.name;
    const extractor = new WordExtractor();
    const extracted = extractor.extract("../Project3_QLVB/uploads/" + namefileworld);
    extracted.then(function (doc) {
        var fileVanBan = {
            id: fileVanbanDen.id,
            name: fileVanbanDen.tenvb,
            contentvb: doc.getBody(),
        }
        res.render("user/vanbanchophanloaiphanloai", { user: req.user, fileVanBan });
    });
}
let postvanbanchophanloaiphanloai = async (req, res) => {
    if (req.body.radio != null) {
        var fileDen = await filedenService.upDateCategoryFileDen(parseInt(req.body.radio), req.query.id);
        if (fileDen != null) {
            req.flash('messages', "phân loại văn bản thành công");
        } else {
            req.flash('messages', "phân loại văn bản thất bạn");
        }
    }
    res.redirect("/vanbanden/vanbanchophanloai")
}

let vanbanchopheduyet = async (req, res) => {
    const message = req.flash("messages");
    var vanBanChoPheDuyet;
    var idLoaiVanBanDen = req.query.id;
    if (idLoaiVanBanDen == undefined) {
        vanBanChoPheDuyet = await filedenService.getVanBanChoPheDuyet();
    } else {
        vanBanChoPheDuyet = await filedenService.getVanBanChoPheDuyetByIdcategory(idLoaiVanBanDen);

    }

    res.render("user/vanbanchopheduyet.ejs", {
        vanBanChoPheDuyet,
        user: req.user,
        message: message
    });

}
let vanbanchopheduyetpheduyet = async (req, res) => {
    let fileVanbanDen = await filedenService.checkFileById(req.query.id);
    let namefileworld = fileVanbanDen.name;
    const extractor = new WordExtractor();
    const extracted = extractor.extract("../Project3_QLVB/uploads/" + namefileworld);
    extracted.then(function (doc) {
        var fileVanBan = {
            id: fileVanbanDen.id,
            name: fileVanbanDen.tenvb,
            id_category:fileVanbanDen.id_category,
            contentvb: doc.getBody(),
        }
        res.render("user/vanbanchopheduyetpheduyet", { user: req.user, fileVanBan });
    });
}
let postVanBanChoPheDuyetPheduyet = async (req, res) => {
    if (req.body.radio != null) {
        // var fileDen = await filedenService.upDateCategoryFileDen(parseInt(req.body.radio), req.query.id);
        // if (fileDen != null) {
        //     req.flash('messages', "phân loại văn bản thành công");
        // }else{
        req.flash('messages', "Phê duyệt văn bản thất bạn");
        //   }    
    }
    res.redirect("/vanbanden/vanbanchopheduyet")
}

module.exports = {
    themvanbanden: themvanbanden,
    themvanbandentc: themvanbandentc,
    vanbanchophanloai: vanbanchophanloai,
    vanbanchophanloaiphanloai: vanbanchophanloaiphanloai,
    postvanbanchophanloaiphanloai: postvanbanchophanloaiphanloai,
    vanbanchopheduyet: vanbanchopheduyet,
    vanbanchopheduyetpheduyet: vanbanchopheduyetpheduyet,
    postVanBanChoPheDuyetPheduyet: postVanBanChoPheDuyetPheduyet,
}