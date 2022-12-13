const mongoose = require('mongoose')

const mongoURI = "mongodb://localhost:27017/db1"
// Here db1 is the database name

const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("Connected to Mongo Successfully")
    })
}

module.exports = connectToMongo;