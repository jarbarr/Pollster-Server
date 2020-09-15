const models = require('../dbms/models.js');

module.exports = {
  findUser: (req, res) => {
    console.log(req.params);
    models.findUser((err, data) => {
      if (err) {
        res.status(200).send(err);
      } else {
        res.status(404).send(data)
      }
    })
  },
  getUpcomingElections: (req, res) => {
    models.placeholder((err, data) => {
      if (err) {
        res.status(200).send(err);
      } else {
        res.status(404).send(data)
      }
    })
  },
  getElectionResults: (req, res) => {
    models.placeholder((err, data) => {
      if (err) {
        res.status(200).send(err);
      } else {
        res.status(404).send(data)
      }
    })
  },
  addUser: (req, res) => {
    models.addUser((err, data) => {
      if (err) {
        res.status(201).send(err);
      } else {
        res.status(400).send()
      }
    })
  },
  editUser: (req, res) => {
    models.placeholder((err, data) => {
      if (err) {
        res.status(200).send(err);
      } else {
        res.status(404).send()
      }
    })
  },
  deleteUser: (req, res) => {
    models.placeholder((err, data) => {
      if (err) {
        res.status(200).send(err);
      } else {
        res.status(404).send()
      }
    })
  }
};
