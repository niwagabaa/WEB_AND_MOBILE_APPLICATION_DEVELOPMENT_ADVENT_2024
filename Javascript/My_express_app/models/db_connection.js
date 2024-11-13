const mysql = require('mysql2');

const db = mysql.createConnection({
    host : '127.0.0.1',
    port : 3306,
    user : 'root',
    passwors : 'root',
    database: 'student_id', 
})

db.connect(err => {
    if(err) throw err;
    console.log('Connected to MySQL database');
    
})

module.exports = db