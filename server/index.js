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

// app.get()

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