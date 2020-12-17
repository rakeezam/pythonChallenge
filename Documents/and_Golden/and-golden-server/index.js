// Set up Express. Library for easily creating a server application
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import productRoutes from './routes/shop.js';
const app = express();
// Set up Mongoose. This helps to connect with MongoDb (Either cloud or locally)
// const mongoose = require('mongoose');
// mongoose.set('useUnifiedTopology', true);
const uri = "mongodb+srv://rakeezam:Roseglow_98@cluster0.7s37o.mongodb.net/products?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })  // connect to database with username and password encoded in url.
    .then(()=> app.listen(5000, () => console.log('Server running on port 5000')))
    .catch((error) => console.log(error.message));
mongoose.set('useFindAndModify', false);

app.use('/shop', productRoutes);
//bodyparse to send out requests
app.use(bodyParser.json({limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}));
app.use(cors());


const ProductSchema = new mongoose.Schema({ //things i can parse into Schema
    name: String,
    descripton: String, 
    price: Number,
    stock: Number
});
const Product = mongoose.model('Product', ProductSchema);

function retreiveProducts(){
    return Product.find()
}
app.get('/', (request, response) =>{
    retreiveProducts()
    .then((products) => {
      // FIRST CONSOLE.LOG
        response.send(products);
    })
    .catch((err) => {
      response.status(500).send("Unable to retrieve products");
    });
    //process.exit(0); stop it running itself
});

// console.log("Listening on localhost:5000");
// app.listen(5000);

// module.exports= ProductSchema; //export so can be used later

export default ProductSchema;






















/**

 const query = MyModel.find(); // `query` is an instance of `Query`
 query.setOptions({ lean: true });
 query.collection(MyModel.collection);
 query.where('age').gte(21).exec(callback);
 
 // You can instantiate a query directly. There is no need to do
 // this unless you're an advanced user with a very good reason to.
 const query = new mongoose.Query();
 */

 // const db = mongoose.connection;
// check status of database. Reports error if failed to connect ^^ does the same thing so commented what is below
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log("we're connected!");
// });