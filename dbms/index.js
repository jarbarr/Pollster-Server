const mariadb = require('mariadb');
const config = require('./config.js');

const pool = mariadb.createPool({
     host: 'localhost',
     user: config.username,
     password: config.password,
     database: 'Pollster',
     connectionLimit: 5
});
const conn = pool.getConnection()
    .then(conn => {
      conn.query("SELECT * from Setup")
        .then((rows) => {
          console.log(`"Hey Maria! What time it is?" \nMaria: "Hello ${config.username}, it is exactly"`, rows[0].today);
          //Table must have been created before
          // " CREATE TABLE myTable (id int, val varchar(255)) "
          return conn.query(`INSERT INTO Setup(id) value (${1})`);
        })
        .then((res) => {
          //console.log('db response:', res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }
          conn.end();
        })
        .catch(err => {
          //handle error
          console.log('db error:', err);
          conn.end();
        })

    }).catch(err => {
      //not connected
      console.log('Maria: \' you are not connected \'')
    });

    module.exports = conn;

// ============================================================= \\
                       // ECMA SCRIPT  \\
// ============================================================= \\
/*
    const mariadb = require('mariadb');
const pool = mariadb.createPool({
     host: 'mydb.com',
     user:'myUser',
     password: 'myPassword',
     connectionLimit: 5
});
async function asyncFunction() {
  let conn;
  try {
	conn = await pool.getConnection();
	const rows = await conn.query("SELECT 1 as val");
	console.log(rows); //[ {val: 1}, meta: ... ]
	const res = await conn.query("INSERT INTO myTable value (?, ?)", [1, "mariadb"]);
	console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }

  } catch (err) {
	throw err;
  } finally {
	if (conn) return conn.end();
  }
}
*/