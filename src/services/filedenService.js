
var File = require('../models/fileden.model');

let checkfile = async function (id) {
    return new Promise((async (resolve, reject) => {
        try {
            let data = await File.checkfilename(id);
            resolve(data);
         //   console.log(data);

        } catch (e) {
            resolve(data);
        }
    }));
}

let addfiletext = async function (filetext) {
    return new Promise((async (resolve, reject) => {
        try {
          
            let data = await File.addfile(filetext);
            resolve(data);
          console.log(data);

        } catch (e) {
            resolve(data);
        }
    }));
}
let getvanphanchophanloai = async function () {
    return new Promise((async (resolve, reject) => {
        try {
            var datafileCPL=[];
            let data = await File.getallfile();
            if(data.length!=0) {
              
                for(let i=0; i<data.length; i++) {
                   if(data[i].id_typefile==0)
                   {
                       datafileCPL.push(data[i]);
                   }
                }
            }
            console.log(datafileCPL);
            resolve(datafileCPL);
         

        } catch (e) {
            resolve(e);
        }
    }));
}

module.exports = {
    checkfile: checkfile,
    addfiletext:addfiletext,
    getvanphanchophanloai:getvanphanchophanloai,
}
