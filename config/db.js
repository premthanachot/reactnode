const mongoose = require('mongoose');

const connectDB = async ()=>{
    const connection = await mongoose.connect(process.env.MONGO_URL,{
        // userNewUrlParser: true,
        // userCreateIndex: true,
        // userFindAndModify: false,
        // userUnifiedTopology: true
    });
    console.log('MongoDB Connected: '+connection.connection.host)
}

module.exports = connectDB