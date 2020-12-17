import express from 'express';

const router = express.Router(); //setting up router
//adding router, the path is / and then inside {} we define a callback function when someone visits 5000
//this is set at localhost:5000/posts
router.get('/', (request, response) => {
    response.send('This works');

})

export default router;