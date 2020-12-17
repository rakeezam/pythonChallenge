import React, { useState, useEffect } from "react"; //, { useEffect, useState }
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  useParams,
  Link
} from "react-router-dom";
import Product from './Product';
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

  //let productListing = responseData[0] && responseData[0].name
  // let {responseData.name} = useParams();

  return (
    <div>
      <ul>
        {products.map((product) =>
          <li key={product._id}>
          <Link to={"/product/" + product._id}>{product.name}</Link>            
          </li>
        )}
      </ul>
    </div>
  )
}
export { Shop };
