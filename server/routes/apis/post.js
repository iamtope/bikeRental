const express = require('express');
const router = express.Router();
const Post = require('../../models/Post');



//Get all the posts
router.get('/', (req, res, next) => {
    Post.find()
    .then((posts) => {
        res.json(posts);
    })
    .catch(err => console.log(err))
});


// Create  a post
router.post('/add', (req, res, next) => {
    const name = req.body.name;
    const price = req.body.price;
    const description = req.body.description;
    const image = req.body.image;
    newPost = new Post({
        name: name,
        price: price,
        description: description,
        image: image
    });
    newPost.save()
    .then(post => {
        res.json(post);
    })
    .catch(err => console.log(err));
});

router.post('/login', (req, res, next) => {
    const name = req.body.name;
    const price = req.body.price;  
    // const password  = req.body.password;
    // const email = req.body.email
    newPost = new Post({
        name: name,
        price: price,
        description: description
        // password: password,
        // email:email
    });
    newPost.save()
    .then(post => {
        res.json(post);
    })
    .catch(err => console.log(err));
});

// to update a Post
router.put('/update/:id', (req, res, next) => {
//Grab the id of the post
let id = req.params.id;
// find the post by id from the databasse
    Post.findById(id)
    .then(post => {
        post.name = req.body.name;
        post.price = req.body.price;
        post.description = req.body.description
        post.image = req.body.image
        post.save()
        .then(post =>{
            res.send({message: 'Post updated succesfully',
            status: 'sucess',
            post: post})

        })
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
    
});
// make delete request
router.delete('/:id', (req, res, next) => {
    let id = req.params.id;
    Post.findById(id)
    .then(post => {
        post.delete()
        .then(post =>{
            res.send({message: 'Post deleted succesfully',
            status: 'success',
            post: post})

        })
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
})

// Get one bike
router.get('/single/:id', (req, res, next) => {
    //Grab the id of a bike
        let id = req.params.id;
        Post.findById(id)
        .then((post) => {
            res.json(post);
        })
        .catch(err => console.log(err))
    });

module.exports = router;
