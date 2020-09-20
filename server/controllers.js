const models = require('../dbms/models.js');

module.exports = {
  findUser: (req, res) => {
    console.log('controller recieved data:', req.query);
    models.findUser(req.query, (err, data) => {
      if (err) {
        console.log('controller err:', err)
        res.status(400).send(err);
      } else {
        console.log('controller data')
        res.status(200).send(data);
      }
    })
  },
  getUpcomingElections: (req, res) => {
    models.placeholder((err, data) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(data)
      }
    })
  },
  getElectionResults: (req, res) => {
    models.placeholder((err, data) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(data)
      }
    })
  },
  addUser: (req, res) => {
    // console.log('controllers recieved:', req.body)
    models.addUser(req.body, (err) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(201).send()
      }
    })
  },
  editUser: (req, res) => {
    models.placeholder((err, data) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send()
      }
    })
  },
  deleteUser: (req, res) => {
    models.placeholder((err, data) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send()
      }
    })
  }
};
