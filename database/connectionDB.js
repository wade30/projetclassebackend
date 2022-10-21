const mysql  =require('mysql');
const dotenv =require('dotenv');
dotenv.config();
const mysqlConnection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: '',
    database: process.env.DATABASE,
    multipleStatements: true
});

mysqlConnection.connect((err)=> {
    if(!err)
    console.log('La connection à la base de données a été bien établie');
    else
    console.log('Connection Echouée!'+ JSON.stringify(err,undefined,2));
    });

module.exports= mysqlConnection