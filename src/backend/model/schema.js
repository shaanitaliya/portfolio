const mongoose = require('mongoose');
const { Schema } = mongoose;

const blogSchema = new Schema({
    name: String,
    email: String,
    contact: Number,
    massage: String,
});

module.exports = mongoose.model("user", blogSchema);
