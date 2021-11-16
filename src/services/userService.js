
var User = require('../models/user.model');

let getalluser = () => {
    return new Promise((async (resolve, reject) => {
        try {
            let data = await User.get_all();
            if (data != 0) {
                resolve(data);
            }
            else {

            }
        } catch (e) {
            reject(e);
        }
    }));
};


let checkuserlogin = async function (gmail_user) {
    return new Promise((async (resolve, reject) => {
        try {
            let data = await User.checkgmail_user(gmail_user);
            resolve(data);

        } catch (e) {
            resolve(data);
        }
    }));
}
module.exports = {
    getalluser: getalluser,
    checkuserlogin: checkuserlogin
}
