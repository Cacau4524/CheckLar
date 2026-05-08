const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'fixhome'
});

connection.connect((err) => {
    if(err){
        console.log(err);
    } else {
        console.log('MySQL conectado');
    }
});

module.exports = connection;