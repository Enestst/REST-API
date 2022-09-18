// gonna import express and getting package into this file
const express = require('express');
// execute express
const app = express();
// gonna import mongoose 
const mongoose = require('mongoose');
// for the post.body
const bodyParser = require('body-parser');
// cors is for cross origin resource sharing 
const cors = require('cors');
require('dotenv/config');

// middlewares
app.use(cors());
app.use(bodyParser.json());

// import routes
const postsRoute = require('./routes/posts');

// middleware with an imported route
app.use('/posts', postsRoute);

// we can create app.use('/user', userRoute) for users

// create a route
app.get('/', (req, res) => {
  res.send("I'm online !!!");
});



// connect to database (MongoDB)

mongoose.connect( // connect() is a method of mongoose
    process.env.DB_CONNECTION || 'mongodb://localhost:27017/test', // if there is no DB_CONNECTION, use the local database
    { useNewUrlParser: true, useUnifiedTopology: true }, // options
    () => console.log('connected to DB') // callback function
);




// start to listen server on port 3000
app.listen(3000);