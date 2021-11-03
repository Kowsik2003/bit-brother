const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const errCtrl = require('./controller/errorCtrl');

const userRoute = require('./routes/user.route');

const app = express();

dotenv.config({path : './config.env'});

app.use(express.json());

app.use('/api/user',userRoute);

app.use(errCtrl);

mongoose.connect(process.env.MONGODB_LOCAL,() => console.log('DB connected'));

app.listen(process.env.PORT,() => console.log('App runing.'));


