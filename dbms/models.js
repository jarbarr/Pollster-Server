const conn = require('index.js');

module.exports = {
  findUser: (request, callback) => {
    const queryString = `Select * from Users where (firstName, lastName, email, mobile) = values(${request.firstName}, ${request.lastName}, ${request.email}, ${request.mobile})`;
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
  addUser: (request, callback) => {
    const queryString = `Insert into Users (firstName, lastName, email, mobile, party) = values(${request.firstName}, ${request.lastName}, ${request.email}, ${request.mobile}, ${request.party})`;
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
}