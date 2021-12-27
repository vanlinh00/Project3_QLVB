const db = require('../config/database.config');

const File = function (user) {
    this.id = user.id_user;
    this.name = user.name_user;
    this.pass = user.pass_user;
    this.sdt = user.sdt_user;
    this.linkavt = user.linkavt_user;
    this.listidblock = user.list_id_block;
}
File.checkFileById = (id) => {
    return new Promise((async (resolve, reject) => {
        try {
            db.query('SELECT * FROM base_document WHERE id = ?', id, (err, res) => {
                if (err) {
                    resolve(null);
                } else {
                    console.log('Check phone number successfully');
                    resolve(res);

                }
            })
        } catch (e) {
            reject(e);
        }
    }));
};

File.addFileText = (datanew) => {
    return new Promise((async (resolve, reject) => {
        try {
            db.query("INSERT INTO base_document SET ?", datanew, function (err, filetext) {
                if (err) {
                    resolve(null);
                } else {
                    resolve({ id: filetext.insertId, ...datanew });
                }
            });
        } catch (e) {
            resolve(null);
        }
    }));
};

File.getVanBanChoPhanLoai = (value) => {
    return new Promise((async (resolve, reject) => {

        try {
            db.query('SELECT * FROM base_document WHERE id_category = ?', value, (err, res) => {
                if (err) {

                    result(err, null);
                } else {

                    resolve(res);

                }
            })

        } catch (e) {
            reject(e);
        }
    }));
};

File.getVanBanChoPheDuyet = (id) => {
    return new Promise((async (resolve, reject) => {

        try {
            db.query('SELECT base_document.ten_vb AS name, base_document.id AS id,  base_document.nguoi_gui_den AS nguoi_gui_den, base_document.noi_gui_den AS noi_gui_den, category.ten AS category FROM base_document JOIN category ON base_document.id_category = category.id WHERE id_category != ?', id, (err, res) => {
                if (err) {
                    resolve(null);
                } else {

                    resolve(res);

                }
            })

        } catch (e) {
            resolve(null);
        }
    }));
};
File.getVanBanChoPheDuyetByIdcategory = (id) => {
    return new Promise((async (resolve, reject) => {

        try {
            db.query('SELECT base_document.ten_vb AS name, base_document.id AS id,  base_document.nguoi_gui_den AS nguoi_gui_den, base_document.noi_gui_den AS noi_gui_den, category.ten AS category FROM base_document JOIN category ON base_document.id_category = category.id WHERE id_category = ?', id, (err, res) => {
                if (err) {
                    resolve(null);
                } else {

                    resolve(res);

                }
            })

        } catch (e) {
            resolve(null);
        }
    }));
};

File.upDateCategoryFileDen = (value, id) => {
    return new Promise((async (resolve, reject) => {
        try {
            db.query("UPDATE base_document SET id_category = ? WHERE id = ?", [value, id],
                (err, res) => {
                    if (err) {
                        resolve(null);
                    } else {

                        resolve(res);
                    }
                })

        } catch (e) {
            reject(e);
        }
    }));
};

//  var sql = "SELECT users.name AS user, products.name AS favorite FROM users JOIN products ON users.favorite_product = products.id";
module.exports = File;
