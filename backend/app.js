const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const api = require('./routes/api');

const port = 8000;
const dbUrl = 'mongodb://localhost:27017/application';

mongoose.connect(
    dbUrl,
    { useNewUrlParser: true },
);

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use('/api', api);

app.listen(port, () => {
    console.log('Server is running.');
});
