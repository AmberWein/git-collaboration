const path = require('path');

app.use(express.static(path.join(__dirname, 'dist')));

const express = require('express');
const app = express();
const port = 3000; 

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

app.get('/message', (req, res) => {
  res.send('🕵️ This is a secret message from the server!');
});

const welp = 124