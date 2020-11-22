  /*
  * deleted code for initial query
  * saved for educational purposes
  *
  *
  *

  addUser: async (request, callback) => {
    let mobile = createHash('sha256').update(request.form1.mobile).digest('hex');
    let password = createHash('sha256').update(request.form1.password).digest('hex');
    let email = createHash('sha256').update(request.form1.email).digest('hex');

    const queryString = `BEGIN; INSERT INTO Users (firstName, lastName, email, mobile, password, private_key, public_key) VALUES ('${request.form1.firstName}', '${request.form1.lastName}', '${email}', '${mobile}', '${password}', '${request.form1.private_key}', '${request.form1.public_key}'); INSERT INTO UserInfo (address1, address2, city, state, zipcode, party, user_id) VALUES ('${request.form2.address1}', '${request.form2.address2}','${request.form2.city}', '${request.form2.state}', '${request.form2.zip}', '${request.form3.party}', LAST_INSERT_ID()); COMMIT;`;
    conn.query(queryString)
      .then((rows) => {
        // console.log(`models | addUsers success`);
        callback(null, rows[0]);
      })
      .catch((err) => {
        console.error(`models | addUsers error: ${err}`);
        // conn.end();
        // callback(err, null);
        // throw new Error(err)
      });
  },

  addUserInfo: (request, callback) => {
    const queryString = `INSERT INTO UserInfo (address1, address2, city, state, zipcode, party, user_id) VALUES ('${request.form2.address1}', '${request.form2.address2}','${request.form2.city}', '${request.form2.state}', '${request.form2.zip}', '${request.form3.party}', LAST_INSERT_ID());`;
    conn.query(queryString)
      .then((rows) => {
        // console.log(`models | addUserInfo success`);
        callback(null, rows[0]);
      })
      .catch((err) => {
        // console.error(`models | addUserInfo error: ${err}`);
        // callback(err, null);
        throw new Error(err)
      });
  },

  */