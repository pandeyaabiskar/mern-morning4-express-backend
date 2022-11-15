const mongoose = require('mongoose');

const connectDatabase = () => {
    mongoose.connect(process.env.MONGODB_CONNECTION_STRING, (err) => {
        if (err) {
            console.log(err)
            mongoose.connect(process.env.MONGODB_CONNECTION_STRING_LOCAL, (err) => {
                if (err) {
                    console.log(err)
                    return
                } else {
                    console.log("Database connnected successfully!")
                }
            })
        } else {
            console.log("Database connnected successfully!")
        }
    })
}

module.exports = connectDatabase;