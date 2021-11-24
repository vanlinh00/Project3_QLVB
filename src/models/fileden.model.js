const db = require('../config/database.config');

const File = function (user) {
    this.id = user.id_user;
    this.name = user.name_user;
    this.pass = user.pass_user;
    this.sdt = user.sdt_user;
    this.linkavt = user.linkavt_user;
    this.listidblock = user.list_id_block;
}
File.checkfilename= (id) => {
    return new Promise((async (resolve, reject) => {
        try {
            db.query('SELECT * FROM filetext WHERE id = ?', id, (err, res) => {
                if (err) {
                    console.log('Error check phone number', err);
                    result(err, null);
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

File.addfile= (datanew) => {

    return new Promise((async (resolve, reject) => {
        try {
            db.query("INSERT INTO filetext SET ?", datanew, function (err, filetext) {
                if (err) {
                    resolve(null);
                } else {
                    console.log(filetext);
                   resolve({id:filetext.insertId,...datanew});
                }
            });
        } catch (e) {
            reject(e);
        }
    }));
};

File.getallfile= () => {

    return new Promise((async (resolve, reject) => {
        try {
            db.query("SELECT * FROM filetext", function (err, allfileden) {
                if (err) {
                    resolve(null);
                } else {
                    resolve(allfileden);
                }
            });
        } catch (e) {
            reject(e);
        }
    }));
};

module.exports = File;
