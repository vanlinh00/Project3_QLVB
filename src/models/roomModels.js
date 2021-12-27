const db = require('../config/database.config');
const Room = function (user) {
    this.id = user.id_user;
    this.name = user.name_user;
    this.pass = user.pass_user;
    this.sdt = user.sdt_user;
    this.linkavt = user.linkavt_user;
    this.listidblock = user.list_id_block;
}
Room.addRoom = (dataNew)=>{
    return new Promise((async (resolve, reject) => {
        try {
            db.query("INSERT INTO phong_ban SET ?", dataNew, function (err, res) {
                if (err) {
                    resolve(null);
                } else {
                    resolve({ id: res.insertId, ...dataNew });
                }
            });
        } catch (e) {
            resolve(null);
        }
    }));
}
Room.getAllRoom = () => {
    return new Promise((async (resolve, reject) => {
        try {
            db.query("SELECT * FROM phong_ban", function (err, user) {
                if (err) {
                    resolve(null);
                } else {
                    resolve(user);
                }
            });
        } catch (e) {
            resolve(null);
        }
    }));
};


Room.getUserByIdRoom = (id) => {
    return new Promise((async (resolve, reject) => {
        try {
         
            db.query('SELECT user.id AS id, user.ho_ten AS ho_ten, user.goi_tinh AS goi_tinh , user.ngay_sinh AS ngay_sinh, chuc_vu.name AS chuc_vu FROM user JOIN chuc_vu ON user.chuc_vu = chuc_vu.id WHERE id_phong_ban = ?', id, (err, res) => {
                if (err) {
                    resolve(null);
                } else {
                  //  console.log('Check phone number successfully');
                    resolve(res);
                }
            })
        } catch (e) {
            reject(e);
        }
    }));
};

module.exports = Room;
