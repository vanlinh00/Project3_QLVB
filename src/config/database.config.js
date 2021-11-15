var mysql =require("mysql");

var connection= mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'qlvb'
});
connection.connect(function(err, connection){
   if(err){console.log("net noi databae khong thanh cong")};
});

module.exports=connection;