var express = require("express");
var router = express.Router();
var mysql = new require("mysql");
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'sopra'
});
router.get("/", (req, res) => {
    // conn.query("insert into myreg values(7,'harmeet singh','harmeet@yahoo.cm','9949499494')", (err, resu) => {
    //     console.log(resu);
    // });
    conn.query("select * from myreg", (err, results) => {
        res.send(JSON.stringify(results));
    });

})

module.exports = router;
