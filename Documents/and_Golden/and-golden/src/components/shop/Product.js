import React, { useState, useEffect, useLocalStorage } from "react";
import axios from "axios";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useRouteMatch,
    useParams,
    Link
} from "react-router-dom";

function AddToCartButton(props) {
    if (props.stock === 0) {
        return (<button type="button" disabled>Out of Stock</button>);
    }
    return (<button type="button" onClick={props.addToCart()}>Add To Cart</button>);

}

function Product() {
    let { id } = useParams();
    let url = "http://localhost:5000/" + id;
    const [product, setResponseData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [errorLoading, setHasErrorLoading] = useState(false);

    useEffect(() => {
        axios({
            "method": "GET",
            "url": url,
            "headers": {
                "content-type": "application/json",
            }
        })
            .then((product) => {
                setResponseData(product.data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error)
                setHasErrorLoading(true);
            })
    }, [product.data])
    
  function handleClick(e) {
    e.preventDefault();
    let cartItemsString = localStorage.getItem('shoppingCart');
    let cartItemsArray = cartItemsString ? JSON.parse(cartItemsString) : [];
    cartItemsArray.push(product);

    localStorage.setItem('shoppingCart', JSON.stringify(cartItemsArray));
    console.log(product._id);
  }

    if (isLoading) {
        return <h1>Loading</h1>;
    }
    return (
        <div>
            <h1> Hello i am a product</h1>
            <h3>Requested product ID: {id}</h3>
            <h3>Name: {product.name}</h3>
            <h3>Stock: {product.stock}</h3>
            <h3>Stock: £{(product.price / 100).toFixed(2)}</h3>
            <img src={"http://localhost:5000/images/" + product._id + ".jpeg"} alt={product.name + "image"} />
            <AddToCartButton stock={product.stock} addToCart={(e) => handleClick}></AddToCartButton>

        </div>
    );
}

export default Product;
