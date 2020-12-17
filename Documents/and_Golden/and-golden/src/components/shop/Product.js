import React from "react";
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
    let { productId } = useParams();
    return (
        <div>
            <h1> Hello i am a product</h1>
            <h3>Requested product ID: {productId}</h3>
            <GetProduct />

        </div>
    );
}

export default Product;
