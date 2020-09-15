/* eslint-disable */
// ============================================================= \\
                       // Dependencies \\
// ============================================================= \\

const path = require('path');
const express = require('express');
const maria = require('../dbms/index.js');
const PORT = 5291

const app = express();

// ============================================================= \\
                       // Middleware \\
// ============================================================= \\

app.use('/', express.static(path.join(__dirname, '../client/public')));

// ============================================================= \\
                         // Routes \\
// ============================================================= \\

app.get('/users', (req, res) => {controllers.findUser(req, res)});
app.get('/elections', (req, res) => {controllers.getUpcomingElections(req, res)});
app.get('/elections/results', (req, res) => {controllers.getElectionResults(req, res)});
app.post('/users', (req, res) => {controllers.addUser(req, res)});
app.put('/elections', (req, res) => {controllers.editUser(req, res)});
app.delete('/elections', (req, res) => {controllers.deleteUser(req, res)});

// ============================================================= \\
                      // Start Server \\
// ============================================================= \\

app.listen(PORT, (err) => {
  if (err) {
    console.Error('issue with the server:', err);
  } else {
    console.log(`listening on port ${PORT}`);
  }
})