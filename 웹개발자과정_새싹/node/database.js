const mysql = require("mysql2/promise")

exports.pool = mysql.createPool({
    host: "www.farmersblog.co.kr",
    user: "dummy",
    port:"3306",
    password: "123456",
    database:"KakaotalkDB",
});