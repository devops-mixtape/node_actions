'use strict';

const express = require('express');

// Constants
const PORT = 80;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send("They say the mountains hold many secrets. The greatest among them is this: 'I am a fake mountain.'");
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
