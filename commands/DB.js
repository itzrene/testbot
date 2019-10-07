const mysql = require("mysql");

var pool = mysql.createPool({
    connectionLimit : 10,
    host: "remotemysql.com",
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
});


var DB = (function () {

    function _query(query, params, callback) {
        pool.getConnection(function (err, connection) {
            if (err) {
                connection.release();
                //callback(null, err);
                console.log("PROBLEM HOUSTON!!!")
                //throw err;
            }

            connection.query(query, params, function (err, rows) {
                connection.release();
                if (!err) {
                    //callback(rows);
                    console.log("PROBLEM HOUSTON!!! 2")
                    //throw err;
                }
                else {
                    //callback(null, err);
                    console.log("PROBLEM HOUSTON!!! 3")
                }

            });

            connection.on('error', function (err) {
                connection.release();
                //callback(null, err);
                //throw err;
                console.log("PROBLEM HOUSTON!!! ANOTHER")
            });
        });
    };

    return {
        query: _query
    };
})();

DB.query("SELECT * FROM customers", function (data, error) {
   //callback(data, error);
   console.log("SELECTED");
});

module.exports = DB;
