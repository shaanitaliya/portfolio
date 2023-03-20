const mongoose = require('mongoose');

const mongoURL = "mongodb://127.0.0.1:27017/new"

const connectToMongo = async () => {
    await mongoose.connect(mongoURL)
        .then(console.log("conneted to mongo sucssesfully")).catch(e => console.log(e));
}

module.exports = connectToMongo;