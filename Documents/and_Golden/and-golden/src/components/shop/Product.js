import React, {useState, useEffect} from "react";
import axios from "axios";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useRouteMatch,
    useParams,
    Link
  } from "react-router-dom";
import {GetProduct} from './Shop';

function Product() {
    let { id } = useParams();
    let url = "http://localhost:5000/" + id;
    const [product, setResponseData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [errorLoading, setHasErrorLoading] = useState(false);
  
  
    useEffect(() => {
        console.log(url);
      axios({
        "method": "GET",
        "url": url,
        "headers": {
          "content-type": "application/json",
        }
      })
        .then((product) => {
          console.log(product);
          setResponseData(product.data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error)
          setHasErrorLoading(true);
        })
    }, [product.data])
  
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
            {/* <GetProduct /> */}

        </div>
    );
}

export default Product;
