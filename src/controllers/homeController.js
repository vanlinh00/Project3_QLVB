

var filefileService = require('../services/filedenService');

const WordExtractor = require("word-extractor");

//var doxconverter=require("docx-pdf");
var path = require('path');
var word2html = require('word-to-html');


let login = async (req, res) =>{

    res.render('login.ejs')
}

let trangchu = async (req, res) => {
    console.log(req.user.email);
    res.render('user/trangchu.ejs', { user:req.user});
}

let vbdxemchitiet = async (req, res) => {
    //Word document's absolute path

    // doxconverter("student test.docx","out.pdf");
    console.log(req.query.id);
    let data = await filefileService.checkfile(req.query.id);
    let namefileworld = data[0].name;
    console.log(namefileworld);
    const extractor = new WordExtractor();

    var path2 = "../Project3_QLVB/uploads/" + namefileworld;
    // var path3="../uploads/"+namefileworld;
    // var absPath = path.join(__dirname,path3);
    // //"E:\2021_1\9_Project3\Project3_QLVB\uploads\profile-1637155928748.doc"
    // word2html(absPath,{tdVerticalAlign:'top'})


    // //Word document's absolute path
    // var absPath = path.join(__dirname,'test.docx');
    // word2html(absPath,{tdVerticalAlign:'top'},'browser')

    const extracted = extractor.extract(path2);

    extracted.then(function (doc) {
        // console.log(doc.getBody()); 
        // console.log(req.query.id);

        res.render('user/xemchitietvb.ejs', { data: doc.getBody() });
    });

}


let vanbanchuaduyet = async (req, res) => {

    var data = [];
    var ob1 = {
        id: 13
    }
    var ob2 = {
        id: 14
    }
    data.push(ob1);
    data.push(ob2);
    res.render('user/vanbanchuaduyet.ejs', { data: data });
}

module.exports = {
    login: login,
    trangchu: trangchu,
 
    vanbanchuaduyet: vanbanchuaduyet,
   
    vbdxemchitiet: vbdxemchitiet,
    
}
