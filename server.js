require('dotenv').config();
const express = require('express');
const cors = require('cors');
var dns = require('dns');

const db = require('./routes/db');
const url = require('./routes/url');

const app = express();
// Basic Configuration
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({limit: "50mb",extended: false}));
app.use(cors());

app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// Your first API endpoint
app.use('/api', url);

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
