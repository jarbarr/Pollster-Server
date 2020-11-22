const conn = require('./index.js');
const { randomBytes, createHash } = require('crypto');

module.exports = {
  findUser: (request, callback) => {
    const queryString = `SELECT UserBallots.US_Presidential_Election_11_03_2020, Users.id, Users.firstName, Users.lastname, Users.email, Users.mobile, Users.password, Users.private_key, Users.public_key, UserInfo.address1, UserInfo.address2, UserInfo.city, UserInfo.state, UserInfo.zipcode, UserInfo.party FROM Users, UserInfo, UserBallots where Users.email = '${request.email}' AND Users.mobile = '${request.mobile}' AND Users.password = '${request.password}' AND UserInfo.user_id = (SELECT id FROM Users WHERE Users.email = '${request.email}');`;
    conn.query(queryString)
      .then((rows) => {

        console.log(`models | findUser success: ${rows}`);
        callback(null, rows);
        // conn.end();
      })
      .catch((err) => {
        console.error(`models | findUser error: ${err}`);
        callback(err, null);
        // conn.end()
      })
  },

  addUser: async (request, callback) => {
    // create a cryptographic hash for the three keys used for log in to protect information
    // possibly come back and do this for all information stored
    let mobile = createHash('sha256').update(request.form1.mobile).digest('hex');
    let password = createHash('sha256').update(request.form1.password).digest('hex');
    let email = createHash('sha256').update(request.form1.email).digest('hex');

    // two query strings for each user table
    const queryString = `INSERT INTO Users (firstName, lastName, email, mobile, password, private_key, public_key) VALUES ('${request.form1.firstName}', '${request.form1.lastName}', '${email}', '${mobile}', '${password}', '${request.form1.private_key}', '${request.form1.public_key}'); `
    const queryString2 = `INSERT INTO UserInfo (address1, address2, city, state, zipcode, party, user_id) VALUES ('${request.form2.address1}', '${request.form2.address2}','${request.form2.city}', '${request.form2.state}', '${request.form2.zip}', '${request.form3.party}', (SELECT id FROM Users WHERE email = '${email}'));` ;
    // begin transaction query
    conn.query('BEGIN;')
      .then(() => {
        // console.log(`models | addUsers success`);
        return conn.query(queryString)
          .then(() => {
          // console.log(`models | addUsers success`);
            return conn.query(queryString2)
              .then((rows) => {
                conn.query(`COMMIT;`)
                callback(null, rows[0])
                // conn.end();
                console.log(`models | addUsers success`);
              })
              .catch((err) => {
                conn.query("ROLLBACK;");
                console.error('models second query error');
              })
          })
          .catch((err) => {
            conn.query("ROLLBACK;")
            console.error('models first query error');
          })
      })
      .catch((err) => {
        conn.query("ROLLBACK;")
          .then(() => {
            // conn.end();
            console.error(`models | addUsers error: ${err}`);
          })
        // callback(err, null);
        // throw new Error(err);
      });
  },

  addUserBallot: (signature, private_key) => {
    const queryString = `INSERT INTO UserBallots (US_Presidential_Election_11_03_2020, user_id) VALUES ('${signature}', (SELECT id FROM Users WHERE private_key = '${private_key}'));`;
    conn.query(queryString)
      .then((rows) => {
        console.log(`models | addUserBallot success`);
        // callback(null);
      })
      .catch((err) => {
        console.error(`models | addUserBallot error: ${err}`);
        // callback(err, null);
      });
  },
  updateUser: (request, callback) => {
    // console.log('model:', request);
    const queryString = `UPDATE Users, UserInfo SET Users.firstName = "${request.firstName}", Users.lastName = "${request.lastName}", Users.mobile = "${request.mobile}", UserInfo.address1 = "${request.address1}", UserInfo.address2 = "${request.address2}", UserInfo.city = "${request.city}", UserInfo.state = "${request.state}", UserInfo.zipcode = "${request.zipCode}" WHERE Users.id = UserInfo.user_id AND Users.id = "${request.id}";`;
    conn.query(queryString)
      .then((rows) => {
        // console.log(`models | updateUser success - ${rows[0]}`);
        callback(null, rows[0]);
        // conn.end();
      })
      .catch((err) => {
        // console.error(`models | updateUser - ${err}`);
        callback(err, null);
        // conn.end();
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
      .catch((err) => {
        // console.error(`models | deleteUser error: ${err}`);
        callback(err, null);
        conn.end()
      })
  }
};
