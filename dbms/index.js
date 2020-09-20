const mariadb = require('mariadb');
const config = require('./config.js');

const pool = mariadb.createPool({
  host: 'localhost',
  user: config.username,
  password: config.password,
  database: 'Pollster',
  connectionLimit: 5
});

pool.getConnection()
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
          // conn.release();
        })
        .catch(err => {
          //handle error
          console.log('db error:', err);
          conn.end();
          // conn.release();
        })

    }).catch(err => {
      //not connected
      console.log('Maria: \' you are not connected \'')
    });


    module.exports = pool;

    // const conn = mariadb.createConnection({
//   host: 'localhost',
//   user: config.username,
//   password: config.password,
//   database: 'Pollster',
//   connectionLimit: 5
// });

// conn.query("SELECT * from Setup", (err, rows) => {
//   console.log(`"Hey Maria! What time it is?" \nMaria: "Hello ${config.username}, it is exactly"`, rows[0].today); //[ {val: 1}, meta: ... ]
//   conn.query(`INSERT INTO Setup(id) value (${1})`, (err, res) => {
//     // console.log(res);  { affectedRows: 1, insertId: 1, warningStatus: 0 }
//     // conn.end();
//   });
// });

// module.exports = conn;

// ============================================================= \\
                  // POOL | ECMA SCRIPT  | ASYNC AWAIT \\
// ============================================================= \\
/*

async function asyncFunction() {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query("SELECT * from Setup");
    console.log(`"Hey Maria! What time it is?" \nMaria: "Hello ${config.username}, it is exactly"`, rows[0].today);
    const res = await conn.query(`INSERT INTO Setup(id) value (${1})`);
    console.log(res);

  } catch (err) {
    throw err;
  } finally {
    if (conn) return conn.end();
  }
}

*/
