const express = require('express');
const Post = require('../models/Post')
const router = express.Router();

router.get('/', async (req, res) => {
    console.log("Post route is used...");
    res.send("Post Route is Used...")
    res.end();
});

//Submit the data...
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (e) {
        throw e.message;
    }
})

//Get the data by ID given as URL params...
router.get('/:postID', async (req, res) =>{
    try {
        const post = await Post.findById(req.params.postID);
        res.json(post);
    }
    catch (err){
        res.json({message : err});
        res.end();
    }
})

//Delete the Data...
router.delete('/:postID', async (req, res) => {
    try {
        const removedPost = await Post.remove({id : req.params.postID});
        res.json(removedPost);
    } catch (err) {
        throw err.message;
    }
})

module.exports = router;

