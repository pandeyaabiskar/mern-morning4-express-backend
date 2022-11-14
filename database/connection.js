const mongoose = require('mongoose');

const connectDatabase = () => {
    mongoose.connect(process.env.MONGODB_CONNECTION_STRING, (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log("Database connnected successfully!")
        }
    })
}

module.exports = connectDatabase;