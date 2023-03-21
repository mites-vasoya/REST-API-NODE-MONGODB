const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');

require('dotenv/config')
PORT = 3333;

app.use(bodyParser.json())

//Routes...
app.get('/', (req, res) => {
    res.send("We are on Home Page...");
});

app.get('/admin', (req, res) => {
    res.send("We are on Admin...");
})

//Import Routes...
const postsRoutes = require('./routes/posts');

app.use('/posts', postsRoutes);

mongoose.connect(process.env.DB_CONNECTION, ()=>{
    console.log("Connected to Database...");
})

app.listen(PORT, () => {
    console.log("Server is running...");
})



