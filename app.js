const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());



const port = process.env.PORT || 5000;

app.listen(port, err => {
if (err) return console.log(err);
console.log(`Server is running on Port ${port}`);
})