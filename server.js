'use strict';

const express = require('express');

// Constants
const PORT = process.env.NODE_ENV === 'production' ? 80 : 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send("They say the mountains hold many secrets. The greatest among them is this: 'I am a fake mountain.'");
});

console.log(`Running on http://${HOST}:${PORT}`);
module.exports = app.listen(PORT, HOST);
