'use strict';

const express = require('express');
const path = require('path');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.use(express.static('public'));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/index.html'));
});
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/node.html'));
});
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/express.html'));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);