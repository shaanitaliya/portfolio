const connectToMongo = require('./db');
const express = require('express');
const blogSchema = require('./model/schema');
const app = express();
connectToMongo();
const port = 80;
app.use(express.json());

var cors = require('cors');
app.use(cors());

app.post('/contact', async (req, res) => {
    res.status(200).send(req.body);
    const user = new blogSchema(req.body);
    await user.save();
});

app.listen(port, '127.0.0.1', () => {
    console.log('you are connected successfully')
})
