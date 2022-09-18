const express = require('express');
// create a router object from express 
const router = express.Router();

const Post = require('../models/Post'); // import the model from models\Post.js

/*

router.get('/', (req, res) => {
    res.send("I'm on posts");
}); 

*/
// get back all the posts
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find(); // find() is a method of mongoose
        res.json(posts); // send back the posts
    } catch (err) {
        res.json({ message: err }); // if there is an error, send the error
    }
});



// submit a post
router.post('/', async (req, res) => {
    console.log(req.body);
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    
    try{
    const savedPost = await post.save();
    res.json(savedPost);
    }catch(err){
        res.json({message: err});
    }

});

// get a specific post
router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId); // findById is a method of mongoose, await is for waiting the response
        res.json(post); // send back the posts
    } catch (err) {
        res.json({ message: err }); // if there is an error, send the error
    }
});

// delete a post
router.delete('/:postId', async (req, res) => { // :postId is a parameter
    try {
        const removedPost = await Post.remove({ _id: req.params.postId }); 
        res.json(removedPost);
    } catch (err) {
        res.json({ message: err });
    }
});

// update a post
router.patch('/:postId', async (req, res) => {
    try {
        const updatedPost = await Post.updateOne(
            { _id: req.params.postId },
            { $set: { title: req.body.title } }
        );
        res.json(updatedPost);
    } catch (err) {
        res.json({ message: err });
    }
});


// export the router object
module.exports = router;