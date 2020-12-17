import React from "react"; //, { useEffect, useState }
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

// <li>{responseData[0] && responseData[0].name}</li>
// <li>{responseData[0] && responseData[0].description}</li>
// <li>{responseData[0] && responseData[0].price}</li>

function Shop() {
    // let [responseData, setResponseData] = React.useState('');
    

    // axios({
    //     "method": "GET",
    //     "url": "http://localhost:5000/",
    //     "headers": {
    //       "content-type": "application/json",
    //     //   "x-rapidapi-host": "quotes15.p.rapidapi.com",
    //     //   "x-rapidapi-key": process.env.REACT_APP_API_KEY
    //     }
    //     // , "params": {
    //     //   "name": "Nike Air Forces 1s"
    //     // }
    //   })
    //   .then((response) => {
    //     setResponseData(response.data)
        
    //     // console.log(responseData[0])
    //   })
    //   .catch((error) => {
    //     console.log(error)
    // })


    let match = useRouteMatch();


    return (
        <div>
            <h2>Shop</h2>
            <ul>
                <li>
                    <Link to={`${match.url}/product1`}>Product-1</Link> 
                    <GetProduct />
                </li>
                <li>
                    <Link to={`${match.url}/product2`}>Product-2</Link>
                </li>
                <li>
                    <Link to={`${match.url}/product3`}>Product-3</Link>
                </li>
            </ul>

            <Switch>
                <Route path={`${match.path}/:productId`}>
                  <Product />
                </Route>
                <Route path={match.path}>
                    <h3>Please select a topic.</h3>
                </Route>
            </Switch>
        </div>

    );
}

function GetProduct() {
    let [responseData, setResponseData] = React.useState('');
    

    axios({
        "method": "GET",
        "url": "http://localhost:5000/",
        "headers": {
          "content-type": "application/json",
        }
      })
      .then((response) => {
        setResponseData(response.data)
      })
      .catch((error) => {
        console.log(error)
    })

    let productListing = responseData[0] && responseData[0].name
    // let {responseData.name} = useParams();

    return (
        <div>
            <h3>{productListing}</h3>
        </div>
    )
}
export {Shop, GetProduct};

// export default Product;

// <pre>
// <code>
//   {responseData && JSON.stringify(responseData, null, 4)}
// </code>
// </pre>

// {responseData[0] &&
//     <blockquote>
//       "{responseData[0] && responseData[0].name}"
//       <small>{responseData[0] && responseData[0].description}</small>
//       <small>{responseData[0] && responseData[0].price}</small>
//     </blockquote>
// }




//product1 = "exampleTopicID"

// const Topics = ({ match }) => (
//     <div>
//       <h2>Topics</h2>
//       <Link to={`${match.url}/exampleTopicId`}>
//         Example topic
//       </Link>
//       <Route path={`${match.path}/:topicId`} component={Topic}/>
//     </div>
//   ) 

//   function Topics() {
//     let match = useRouteMatch();
  
//     return (
//       <div>
//         <h2>Topics</h2>
  
//         <ul>
//           <li>
//             <Link to={`${match.url}/components`}>Components</Link>
//           </li>
//           <li>
//             <Link to={`${match.url}/props-v-state`}>
//               Props v. State
//             </Link>
//           </li>
//         </ul>
  
//         {/* The Topics page has its own <Switch> with more routes
//             that build on the /topics URL path. You can think of the
//             2nd <Route> here as an "index" page for all topics, or
//             the page that is shown when no topic is selected */}
//         <Switch>
//           <Route path={`${match.path}/:topicId`}>
//             <Topic />
//           </Route>
//           <Route path={match.path}>
//             <h3>Please select a topic.</h3>
//           </Route>
//         </Switch>
//       </div>
//     );
//   }
  
//   function Topic() {
//     let { topicId } = useParams();
//     return <h3>Requested topic ID: {topicId}</h3>;
//   }