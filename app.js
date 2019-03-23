const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');
const express = require('express');
const app = express();


const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

// the last part of the connection url is the name of our db 



// to be used later on 
// const mongoose = require('mongoose');
// mongoose.connect("mongodb://localhost:27018/node-blog");

// to parse the post data body 
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('./'));
// rendering engine for html files 
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// create a schema and a model for the schema 

// later on 
// const postSchema = new mongoose.Schema({ body: String });
// const Post = mongoose.model('Post', postSchema);

// setting up a route for the '/' root directory 
// when this route is hit, it will render index view. 
app.get('/', (req, res) => {
    Post.find({}, (err, posts) => {
        res.render('index', { posts: posts });
    });
});

// addpost route and redirect to root once this is completed and return and error if needed 
// app.post('/addPost', (req, res) => {
//     let postData = new Post(req.body);
//     postData.save().then(result => {
//         res.redirect('/');
//     }).catch(err => {
//         res.status(400).send('unable to save data');
//     });
// });













app.listen(3000, () => {
    console.log('server listening on 3000');
}); 