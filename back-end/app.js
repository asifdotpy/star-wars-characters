const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;  // using port 3000 for app listen


// Defining a route

app.get('/items', (req, res) => {
  fs.readFile('items.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send({ error: 'Error reading file' });
    } else {
      res.send(JSON.parse(data));
    }
  });
});

// Start the server

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

