// Set up Express. Library for easily creating a server application
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
// import {MONGODB_URL} from './config.js';
import {} from 'dotenv/config.js';
import productRoutes from './routes/shop.js';
const app = express();
app.use(express.static('images'));
app.use('/images', express.static('images'));
// Set up Mongoose. This helps to connect with MongoDb (Either cloud or locally)
// const mongoose = require('mongoose');
// mongoose.set('useUnifiedTopology', true);
console.log(process.env.MONGODB_URL);
const uri = process.env.MONGODB_URL;
mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })  // connect to database with username and password encoded in url.
    .then(() => app.listen(5000, () => console.log('Server running on port 5000')))
    .catch((error) => console.log(error.message));
// const uri = "mongodb+srv://rakeezam:Roseglow_98@cluster0.7s37o.mongodb.net/products?retryWrites=true&w=majority";
// mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })  // connect to database with username and password encoded in url.
//     .then(() => app.listen(5000, () => console.log('Server running on port 5000')))
//     .catch((error) => console.log(error.message));
mongoose.set('useFindAndModify', false);

app.use('/shop', productRoutes);
//bodyparse to send out requests
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());


const ProductSchema = new mongoose.Schema({ //things i can parse into Schema
    name: String,
    descripton: String,
    price: Number,
    stock: Number,
    quantity:Number
});
const Product = mongoose.model('Product', ProductSchema);

app.get('/', (request, response) => {
    Product.find()
        .then((products) => {
            response.send(products);
        })
        .catch((err) => {
            response.status(500).send("Unable to retrieve products");
        });
});

app.get('/:productId', (request, response) => {
    Product.findById(request.params.productId)
        .then((product) => {
            response.send(product);
        })
        .catch((err) => {
            response.status(500).send("Unable to find product");
        });
});

app.get('/stock/:productId', (request, response) => {
    console.log(request.params);
    Product.findById(request.params.productId)
        .then((product) => {
            response.send({stock : product.stock});
        })
        .catch((err) => {
            response.status(500).send("Unable to find product");
        });
});

// console.log("Listening on localhost:5000");
// app.listen(5000);

// module.exports= ProductSchema; //export so can be used later

export default ProductSchema;