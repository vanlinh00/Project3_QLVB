
var fileModel = require('../models/fileden.model');

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
            console.log(file);

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
module.exports = {
    checkFileById: checkFileById,
    addFileText: addFileText,
    getVanBanChoPhanLoai: getVanBanChoPhanLoai,
    upDateCategoryFileDen: upDateCategoryFileDen,
    getVanBanChoPheDuyet: getVanBanChoPheDuyet,
    getVanBanChoPheDuyetByIdcategory: getVanBanChoPheDuyetByIdcategory,
}
