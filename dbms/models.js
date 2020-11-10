const conn = require('./index.js');

module.exports = {
  findUser: (request, callback) => {
    const queryString = `SELECT UserBallots.US_Presidential_Election_11_03_2020, Users.id, Users.firstName, Users.lastname, Users.email, Users.mobile, Users.password, Users.private_key, Users.public_key, UserInfo.address1, UserInfo.address2, UserInfo.city, UserInfo.state, UserInfo.zipcode, UserInfo.party FROM Users, UserInfo, UserBallots where Users.email = '${request.email}' AND Users.mobile = '${request.mobile}' AND Users.password = '${request.password}' AND UserInfo.user_id = (SELECT id FROM Users WHERE Users.email = '${request.email}');`;
    conn.query(queryString)
      .then((rows) => {
        // console.log(`models | findUser success: ${rows[0]}`);
        callback(null, rows[0]);
        // conn.end();
      })
      .catch(err => {
        // console.error(`models | findUser error: ${err}`);
        callback(err, null);
        // conn.end()
      })
  },

  addUser: (request, callback) => {
    const queryString = `INSERT INTO Users (firstName, lastName, email, mobile, password, private_key, public_key) VALUES ('${request.firstName}', '${request.lastName}', '${request.email}', '${request.mobile}', '${request.password}', '${request.private_key}', '${request.public_key}');`;
    conn.query(queryString)
      .then((rows) => {
        // console.log(`models | addUsers success`);
        callback(null);
      })
      .catch(err => {
        // console.error(`models | addUsers error: ${err}`);
        callback(err, null);
      });
  },
  addUserInfo: (request, callback) => {
    const queryString = `INSERT INTO UserInfo (address1, address2, city, state, zipcode, party, user_id) VALUES ('${request.form2.address1}', '${request.form2.address2}','${request.form2.city}', '${request.form2.state}', '${request.form2.zip}', '${request.form3.party}', (SELECT id FROM Users WHERE email = '${request.form1.email}'));`;
    conn.query(queryString)
      .then((rows) => {
        // console.log(`models | addUserInfo success`);
        callback(null);
      })
      .catch(err => {
        // console.error(`models | addUserInfo error: ${err}`);
        callback(err, null);
      });
  },
  addUserBallot: (signature, private_key) => {
    const queryString = `INSERT INTO UserBallots (11_03_2020, user_id) VALUES ('${signature}', (SELECT id FROM Users WHERE private_key = '${private_key}'));`;
    conn.query(queryString)
      .then((rows) => {
        console.log(`models | addUserInfo success`);
        // callback(null);
      })
      .catch(err => {
        console.error(`models | addUserInfo error: ${err}`);
        // callback(err, null);
      });
  },
  updateUser: (request, callback) => {
    console.log('model:', request)
    const queryString = `UPDATE Users, UserInfo SET Users.firstName = "${request.firstName}", Users.lastName = "${request.lastName}", Users.mobile = "${request.mobile}", UserInfo.address1 = "${request.address1}", UserInfo.address2 = "${request.address2}", UserInfo.city = "${request.city}", UserInfo.state = "${request.state}", UserInfo.zipcode = "${request.zipCode}" WHERE Users.id = UserInfo.user_id AND Users.id = "${request.id}";`;
    conn.query(queryString)
      .then((rows) => {
        // console.log(`models | editUser success - ${rows[0]}`);
        callback(null, rows[0]);
        conn.end();
      })
      .catch(err => {
        // console.error(`models | editUser - ${err}`);
        callback(err, null);
        conn.end()
      })
  },
  deleteUser: (request, callback) => {
    const queryString = `delete from Users where (firstName, lastName, email, mobile) = values(${request.firstName}, ${request.lastName}, ${request.email}, ${request.mobile})`;
    conn.query(queryString)
      .then((rows) => {
        // console.log(`models | deleteUser success: ${rows[0]}`);
        callback(null, rows[0]);
        conn.end();
      })
      .catch(err => {
        // console.error(`models | deleteUser error: ${err}`);
        callback(err, null);
        conn.end()
      })
  }
};
