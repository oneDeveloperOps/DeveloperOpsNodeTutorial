const express = require('express');
const app = express();
const db = require('./config/db')

db();

app.listen(3000 , () => {
    console.log('Server running');
});
