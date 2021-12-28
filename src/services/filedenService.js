
var fileModel = require('../models/fileden.model');
var UserService = require('../services/userService');

let checkFileById = async function (id) {
    return new Promise((async (resolve, reject) => {
        try {
            let fileVanBanDen = await fileModel.checkFileById(id);
            if (fileVanBanDen.length != 0) {
                resolve(fileVanBanDen[0]);
            } else {
                resolve(null);
            }

        } catch (e) {
            resolve(null);
        }
    }));
}

let addFileText = async function (fileText) {
    return new Promise((async (resolve, reject) => {
        try {
            let file = await fileModel.addFileText(fileText);
         
            if (file != null) {
                resolve(file);
            }
            else {
                resolve(null);
            }
        } catch (e) {
            reject(e);
        }
    }));
}
let getVanBanChoPhanLoai = async function () {
    return new Promise((async (resolve, reject) => {
        try {
            let data = await fileModel.getVanBanChoPhanLoai(0);
            if (data != undefined) {
                resolve(data);
            } else {
                resolve(null);
            }



        } catch (e) {
            resolve(e);
        }
    }));
}
let upDateCategoryFileDen = async function (value, id) {
    return new Promise((async (resolve, reject) => {
        try {
            let fileDen = await fileModel.upDateCategoryFileDen(value, id);
            if (fileDen != null) {
                resolve(true);
            } else {
                resolve(null);
            }
        } catch (e) {
            resolve(null);
        }
    }));
}
let getVanBanChoPheDuyet = async function () {
    return new Promise((async (resolve, reject) => {
        try {
            let vanBanChuaPD = await fileModel.getVanBanChoPheDuyet(0);
            if (vanBanChuaPD != undefined) {
                resolve(vanBanChuaPD);
            }
            else {
                resolve(null);
            }

        } catch (e) {
            resolve(null);
        }
    }));
}
let getVanBanChoPheDuyetByIdcategory = async (id) => {
    return new Promise((async (resolve, reject) => {
        try {
            let data = await fileModel.getVanBanChoPheDuyetByIdcategory(id);
            if (data != undefined) {
                resolve(data);
            } else {
                resolve(null);
            }



        } catch (e) {
            resolve(e);
        }
    }));
}

let UpDateTrangThaiDocumment = async (TrangThai, idDocument) => {
    return new Promise((async (resolve, reject) => {
        try {
            let fileDen = await fileModel.UpDateTrangThaiDocumment(TrangThai, idDocument);
            if (fileDen != null) {
                resolve(true);
            } else {
                resolve(null);
            }
        } catch (e) {
            resolve(null);
        }
    }));
}

let checkIdChucVUCanPheDuyet = async (idLoaiVanBanDen) => {
    return new Promise((async (resolve, reject) => {
        try {

            var checkIdChucVuCanPheduyet = await fileModel.checkIdChucVUCanPheDuyet(idLoaiVanBanDen);

            if (checkIdChucVuCanPheduyet != undefined) {
                resolve(checkIdChucVuCanPheduyet[0].list_id_chuc_vu_can_phe_duyet.split(","));
            } else {
                resolve(null);
            }

        } catch (e) {
            resolve(null);
        }
    }))
}
let idChucVuCuoiCungdaPheDuyet = async (idVanBan) => {
    return new Promise((async (resolve, reject) => {
        try {
            var allUserXuLy = await fileModel.getAllUserDaXuLyVanBanByIdVanBan(idVanBan);
            if (allUserXuLy.length != 0) {
                var canbo = await UserService.checkbyid(allUserXuLy[allUserXuLy.length - 1].id_user);
                resolve(canbo.chuc_vu);
            } else {
                resolve(0);
            }

        } catch (e) {
            resolve(null);
        }
    }))
}
let idChuVUCanPhuyetTieptheo = async (idChuVUCanPheDuyet, idChuVuCuoiCungdaPheDuyet) => {
    return new Promise((async (resolve, reject) => {
        try {
            var idChuVUCanPhuyetTieptheo;
            for (let i = 0; i < idChuVUCanPheDuyet.length; i++) {
                if (idChuVUCanPheDuyet[i] == idChuVuCuoiCungdaPheDuyet) {
                    idChuVUCanPhuyetTieptheo = idChuVUCanPheDuyet[i + 1]
                }
            }

            resolve(idChuVUCanPhuyetTieptheo);
        } catch (e) {
            resolve(null);
        }
    }))
}
let checkIdXuDaXuLyVanBanChua = async (idVB, idUser) => {


    return new Promise((async (resolve, reject) => {
        try {

            var allUserXuLy = await fileModel.getAllUserDaXuLyVanBanByIdVanBan(idVB);

            if (allUserXuLy.length != 0) {
                var check = 0;

                for (let i = 0; i < allUserXuLy.length; i++) {
                    if (allUserXuLy[i].id_user == idUser) {
                        check = 1;
                    }
                }
                if (check == 1) {
                    console.log("user đã xử lý");
                    resolve(1);
                } else {
                    console.log("use chua xu ly");
                    resolve(2);
                }
            } else {
                console.log("chưa được ai xử lý");
                resolve(3);
            }
        } catch (e) {
            resolve(null);
        }
    }))


}
let addUserXulyVanBan = async function (userXuLyVb) {
    return new Promise((async (resolve, reject) => {
        try {
            let xuly = await fileModel.addUserXulyVanBan(userXuLyVb);
            console.log(xuly);

            if (xuly != null) {
                resolve(xuly);
            }
            else {
                resolve(null);
            }
        } catch (e) {
            reject(e);
        }
    }));
}

let vanBanDaPheDuyet = async () => {
    return new Promise((async (resolve, reject) => {
        try {
            let data = await fileModel.vanBanDaPheDuyet();
            if (data != undefined) {
                resolve(data);
            } else {
                resolve(null);
            }



        } catch (e) {
            resolve(e);
        }
    }));
}
module.exports = {
    checkFileById: checkFileById,
    addFileText: addFileText,
    getVanBanChoPhanLoai: getVanBanChoPhanLoai,
    upDateCategoryFileDen: upDateCategoryFileDen,
    getVanBanChoPheDuyet: getVanBanChoPheDuyet,
    getVanBanChoPheDuyetByIdcategory: getVanBanChoPheDuyetByIdcategory,
    UpDateTrangThaiDocumment: UpDateTrangThaiDocumment,
    checkIdChucVUCanPheDuyet: checkIdChucVUCanPheDuyet,
    idChucVuCuoiCungdaPheDuyet: idChucVuCuoiCungdaPheDuyet,
    idChuVUCanPhuyetTieptheo: idChuVUCanPhuyetTieptheo,
    checkIdXuDaXuLyVanBanChua: checkIdXuDaXuLyVanBanChua,
    addUserXulyVanBan: addUserXulyVanBan,
    vanBanDaPheDuyet: vanBanDaPheDuyet,
}
