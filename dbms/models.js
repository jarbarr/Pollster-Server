const conn = require('./index.js');

module.exports = {
  findUser: (request, callback) => {
    const queryString = `SELECT * FROM Users where Users.email = '${request.email}' AND Users.mobile = '${request.mobile}' AND Users.password = '${request.password}';`;
    conn.query(queryString)
      .then((rows) => {
        console.log('Maria: you did it, you did it, you did it...yay!!!:', rows[0]);
        return callback(null, rows[0]);
        conn.end();
      })
      .catch(err => {
        console.error('Maria: you effed up! check your models baby:', err);
        callback(err, null);
        conn.end()
      })
  },
// module.exports = {
//   findUser: (request, callback) => {
//     const queryString = `SELECT * FROM Users where Users.email = '${request.email}' AND Users.mobile = '${request.mobile}' AND Users.password = '${request.password}';`;
//     conn.query(queryString, (err, results, fields) => {
//       if (err) {
//         console.error('Maria: you effed up! check your models baby:', err);
//         callback(err, null);
//       } else {
//         console.log('Maria: you did it, you did it, you did it...yay!!!:', results[0]);
//         callback(null, results);
//         // conn.end();
//       }
//       conn.release()
//     });
//   },
  addUser: (request, callback) => {
    // let firstName =
    const queryString = `INSERT INTO Users (firstName, lastName, email, mobile, party, password) VALUES ('${request.firstName}', '${request.lastName}', '${request.email}', '${request.mobile}', '${request.party}', '${request.password}');`;
    conn.query(queryString, ((err, results, fields) => {
      if (err) {
        console.error('Maria: you effed up! check your models baby:', err);
        callback(err, null);
      } else {
        console.log('Maria: you did it, you did it, you did it...yay!!!:', results, fields);
        callback(null, results, fields);
      }
    }))
  },
  addUserPreferences: (request, callback) => {
    const queryString = `Insert into Users where (firstName, lastName, email, mobile) = values(${request.firstName}, ${request.lastName}, ${request.email}, ${request.mobile})`;
    conn.query(queryString, ((err, results, fields) => {
      if (err) {
        console.error('Maria: you effed up! check your models baby:', error);
        callback(err, null);
      } else {
        console.log('Maria: you did it, you did it, you did it...yay!!!:', results, fields);
        callback(null, results);
      }
    }))
  },
  updateUser: (request, callback) => {
    const queryString = `Insert into Users where (firstName, lastName, email, mobile) = values(${request.firstName}, ${request.lastName}, ${request.email}, ${request.mobile})`;
    conn.query(queryString, ((err, results, fields) => {
      if (err) {
        console.error('Maria: you effed up! check your models baby:', error);
        callback(err, null);
      } else {
        console.log('Maria: you did it, you did it, you did it...yay!!!:', results, fields);
        callback(null, results);
      }
    }))
  },
  deleteUser: (request, callback) => {
    const queryString = `delete from Users where (firstName, lastName, email, mobile) = values(${request.firstName}, ${request.lastName}, ${request.email}, ${request.mobile})`;
    conn.query(queryString, ((err, results, fields) => {
      if (err) {
        console.error('Maria: you effed up! check your models baby:', error);
        callback(err, null);
      } else {
        console.log('Maria: you did it, you did it, you did it...yay!!!:', results, fields);
        callback(null, results);
      }
    }))
  },
}