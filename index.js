const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');

const authRoute = require('./routes/auth');
const homeRoute = require('./routes/home');

dotenv.config();

mongoose.connect('mongodb+srv://nandha:nandha@cluster0.fybzy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
    () => console.log('connected to mongo db'));


app.use(express.json());
app.use(cors());
app.use('/api/user', authRoute);
app.use('/api', homeRoute);

app.listen(5000, () => {
    console.log("Server is runinng in 5000");
});