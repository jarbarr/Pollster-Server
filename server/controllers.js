/* eslint-disable */
const models = require('../dbms/models.js');

module.exports = {
  findUser: (req, res) => {
    console.log('controller recieved data:', req.query);
    models.findUser(req.query, (err, data) => {
      if (err) {
        console.log(`controllers | findUser error: ${err}`);
        res.status(400).send(err);
      } else {
        console.log(`controllers | findUser success: ${data}`);
        res.status(200).send(data);
      }
    })
  },
  getUpcomingElections: (req, res) => {
    models.placeholder((err, data) => {
      if (err) {
        // console.log(`controllers | getUpcomingElections error: ${err}`);
        res.status(404).send(err);
      } else {
        // console.log(`controllers | getUpcomingElections success: ${data}`);
        res.status(200).send(data)
      }
    })
  },
  getElectionResults: (req, res) => {
    models.placeholder((err, data) => {
      if (err) {
        // console.log(`controllers | getElectionResults success: ${err}`);
        res.status(404).send(err);
      } else {
        // console.log(`controllers | getElectionResults success: ${data}`);
        res.status(200).send(data)
      }
    })
  },
  addUser: (req, res) => {
    // console.log('controllers recieved:', req.body)
    models.addUser(req.body.form1, (err) => {
      if (err) {
        console.log(`controllers | addUsers failure: ${err}`);
        res.status(400).send(err);
      } else {
        console.log(`controllers | addUsers success`);
        res.status(201).send()
      }
    })
    models.addUserInfo(req.body, (err) => {
      if (err) {
        console.log(`controllers | addUserInfo failure: ${err}`);
        res.status(400).send(err);
      } else {
        console.log(`controllers | addUser success`);
        res.status(201).send()
      }
    })
  },
  editUser: (req, res) => {
    models.placeholder((err, data) => {
      if (err) {
        // console.log(`controllers | editUser success: ${err}`);
        res.status(404).send(err);
      } else {
        // console.log(`controllers | editUser success: ${data}`);
        res.status(200).send()
      }
    })
  },
  deleteUser: (req, res) => {
    models.placeholder((err, data) => {
      if (err) {
        // console.log(`controllers | deleteUser success: ${err}`);
        res.status(404).send(err);
      } else {
        // console.log(`controllers | deleteUser success: ${data}`);
        res.status(200).send()
      }
    })
  }
};
