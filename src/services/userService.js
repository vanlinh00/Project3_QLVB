
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
            //   console.log(data);
            resolve(data[0]);

        } catch (e) {
            resolve(data);
        }
    }));
}

let checkbyid = async function (iduser) {
    return new Promise((async (resolve, reject) => {
        try {
            let data = await User.checkuserbyid(iduser);
            //  console.log(data);
            if(data!=null||data!=undefined)
            {
                resolve(data[0]);
            }else{
                resolve(null);
            }
           

        } catch (e) {
            resolve(data);
        }
    }));
}
let addUser = async (newRoom) => {
    return new Promise((async (resolve, reject) => {
        try {
            let user = await User.addUser(newRoom);
            if (user != null) {
                resolve(room);
            }
            else {
                resolve(null);
            }
        } catch (e) {
            resolve(null);
        }
    }));

}
module.exports = {
    getalluser: getalluser,
    checkuserlogin: checkuserlogin,
    checkbyid: checkbyid,
    addUser: addUser,
}
