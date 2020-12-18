import React, { useState, useEffect } from "react"; //, { useEffect, useState }
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  useParams,
  Link
} from "react-router-dom";
// import Product from './Product';
import axios from 'axios';

function Shop() {
  const [products, setResponseData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorLoading, setHasErrorLoading] = useState(false);


  useEffect(() => {
    axios({
      "method": "GET",
      "url": "http://localhost:5000/",
      "headers": {
        "content-type": "application/json",
      }
    })
      .then((products) => {
        console.log(products);
        setResponseData(products.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error)
        setHasErrorLoading(true);
      })
  }, [products.data])

  return (
    <div>
        {products.map((product, idx) => (
          <div className="product" key={idx}>
            <ul>
              <li><img src={"http://localhost:5000/images/" + product._id + ".jpeg"} alt={product.name + "image"} /></li>
              <li>
                <Link to={"/product/" + product._id}>{product.name}</Link>
              </li>
              <li>Stock: {product.stock}</li>
              <li>£{(product.price / 100).toFixed(2)}</li>
            </ul>
          </div>
        )
        )}
    </div>
  )
}
export { Shop };
