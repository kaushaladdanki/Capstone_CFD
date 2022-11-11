const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

//Get Post
//note '/' references the route /api/posts
/* //example posts
router.get('/', (req, res) => {
    res.send("we are on posts");
});

router.get('/specific', (req, res) => {
    res.send("we are on a specific post");
});
*/

router.get('/', async (req, res ) => {
    const posts = await loadPostsCollection();
    res.send(await posts.find({}).toArray());
});

//Add Post

router.post('/', async (req, res ) => {
    const posts = await loadPostsCollection();
    await posts.insertOne({
        text: req.body.text,
        createdAt: new Date()
    });
    res.status(201).send();
});



//Delete Post

// /:id refers to id of post (mongo makes one for each post) which is added to end of url (api/posts/id) in this case
router.delete('/:id', async (req,res) => {
    const posts = await loadPostsCollection();
    await posts.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
    res.status(200).send();
})

async function loadPostsCollection () {
    const client = await mongodb.MongoClient.connect ('mongodb+srv://Hans2318:BrongoMongo12%21@cluster0.hakl2.mongodb.net/test'
        , {useNewUrlParser: true}
        );
    return client.db('test').collection('posts');
}

module.exports = router;

