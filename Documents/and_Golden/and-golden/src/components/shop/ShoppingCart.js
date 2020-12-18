import React, { useEffect, useState } from "react";
// import axios from 'axios';
//IF Product id appears more than once then add to quanitity -- 
//GET quanitit to cross check with stock i.e creating a function that if q-s ===<0 then  WRONG
//Every time an BUY is clicked you count it, and when you count we decrease stock so if b+1 then s-1
//this should update stock on product page and therefore can not add anythign more

function BuyNowButton(props) {
  return (
    <button type="button">Buy Now</button>
  )
}

function ShoppingCart() {

    if (localStorage.getItem('shoppingCart') === null) {
      return <p>Shopping cart empty</p>
    }else{
      let shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));

      let shopArr = shoppingCart.map(function(productCart){
        return productCart._id;
      })
      console.log(shopArr);

      let isDuplicate = shopArr.some(function(product, idx) {
        return shopArr.indexOf(product) !== idx;
      })

      console.log(isDuplicate);

      if(isDuplicate === true) {
        shoppingCart.map(function(productCart){
          return productCart.quantity++;
        })
      }

      console.log(shoppingCart);

      return (
        <div className="ShoppingCart">
          <h2> Shopping Cart</h2>

          <div className ="products">
            {shoppingCart.map((productCart, idx)=> (
              <div className="product" key={idx}>
              <ul>
                <li><img src={"http://localhost:5000/images/" + productCart._id + ".jpeg"} alt={productCart.name + "image"} /></li>
                <li>{productCart.name}</li>
                <li>Stock: {productCart.stock}</li>
                <li>£{(productCart.price / 100).toFixed(2)}</li>
              </ul>
              </div>
            ))}
          </div>
          <BuyNowButton />
        </div> 
      );
    } 
  }

export default ShoppingCart;

    // function NotSure() {
    //     // let [shoppingCart, setQuant] = useState(shoppingCart)

    //     let result = shoppingCart.map(productCart=> {
    //                       if (productCart._id === productCart._id) {
    //                         productCart.quantity++ 
    //                       }else{
    //                         productCart.quantity = 1;
    //                       }
    //                   })
    //     console.log(result);
        

    // }
    // NotSure();




// let url = "http://localhost:5000/";
// const [product, setResponseData] = useState({});
// const [isLoading, setIsLoading] = useState(true);
// const [errorLoading, setHasErrorLoading] = useState(false);

// useEffect(() => {
//   axios({
//       "method": "GET",
//       "url": url,
//       "headers": {
//           "content-type": "application/json",
//       }
//   })
//       .then((product) => {
//           console.log(product.data)
//           setResponseData(product.data);
//           setIsLoading(false);
//       })
//       .catch((error) => {
//           console.log(error)
//           setHasErrorLoading(true);
//       })
// }, [product.data])