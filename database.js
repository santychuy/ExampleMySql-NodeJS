const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'company'
});

con.connect((error) => {
    if (error){
        console.log(error);
        return;
    }else{
        console.log('Db is connected');
    }
});

module.exports = con;