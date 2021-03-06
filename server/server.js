const express = require('express');
const path = require('path');

const app = express();
app.use('/static', express.static(path.join(__dirname, '..')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'test.html'));
});

app.listen(3000, () => console.log('Listening on port 3000'));
