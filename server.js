const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config({
    path: './config/index.env'
});

const app = express();
app.use(bodyParser.json());
require('dotenv').config({
    path:'./config/index.env'
});

const connectDB = require('./config/db');
connectDB()
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'))
app.use(cors())

app.use('/api/user', require('./routes/auth.route'));
app.get('/', (req, res)=>{
    res.send('test route => home page');
});

app.use((req, res)=>{
    res.status(404).json({
        msg: 'Page not founded'
    })
})

const PORT = process.env.PORT

app.listen(5000,()=>{
    console.log('App listening on part '+PORT);
});