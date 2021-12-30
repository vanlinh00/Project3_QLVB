var roomModel = require('../models/roomModels')
let addRoom = async (newRoom) => {
    return new Promise((async (resolve, reject) => {
        try {
            let room = await roomModel.addRoom(newRoom);
            console.log(room);

            if (room != null) {
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
let getAllRoom = () => {
    return new Promise((async (resolve, reject) => {
        try {
            let allRoom = await roomModel.getAllRoom();
            console.log("khong in ra gi a 2");
   console.log(allRoom);
            if (allRoom != undefined) {
                if (allRoom.length != 0) {
                    resolve(allRoom);
                }else{
                    resolve([]);
                }
            }
            else {
                resolve([]);
            }
        } catch (e) {
            resolve(null);
        }
    }));
};
let getUserByIdRoom=(id)=>{
    return new Promise((async (resolve, reject) => {
        try {
            let allUserInRoom = await roomModel.getUserByIdRoom(id);
            if (allUserInRoom!=null) {
                resolve(allUserInRoom);
            } else {
                resolve(null);
            }

        } catch (e) {
            resolve(null);
        }
    }));
}
let deleteRoom=(id)=>{
    return new Promise((async (resolve, reject) => {
        try {
            let room = await roomModel.deleteRoom(id);
            if (room!=null) {
                resolve(true);
            } else {
                resolve(null);
            }

        } catch (e) {
            resolve(null);
        }
    }));
}
module.exports = {
    addRoom: addRoom,
    getAllRoom: getAllRoom,
    getUserByIdRoom:getUserByIdRoom,
    deleteRoom:deleteRoom,
}