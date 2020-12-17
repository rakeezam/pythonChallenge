//import logo from './logo.svg';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  Link
} from "react-router-dom";
import './App.css';
// import Axios from "axios";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import {Shop} from './components/shop/Shop';
import Contact from './components/Contact';
import Error from './components/Error';
import Product from "./components/shop/Product";
// import { render } from "react-dom";

function App() {
  // Axios({
  //   method: "GET",
  //   url: "http://localhost:5000/",
  //   headers: {
  //     "Content-Type": "application/json"
  //   }
  // }).then(res => {
  //   console.log(res.data);
  //   console.log(res.status);
  // });
    // constructor(props) {
    //   super(props);
    //   this.state = { products: [] };
    // }

    return (
      <Router>
        <div>
          <Header/>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}

          <Switch> 
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/shop">
              <Shop />
            </Route>
            <Route path="/contact-us">
              <Contact />
            </Route>
            <Route path="/product/:id">
              <Product />
            </Route>
            <Route component={Error}/>


          </Switch>

          <Footer/>
        </div>
      </Router>
    );
}


export default App;



// function Header() {
//   return (
//     <nav>
//       <h1>Golden Shoes</h1>
//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/about">About</Link>
//         </li>
//         <li>
//           <Link to="/shop">Shop</Link>
//         </li>
//         <li>
//           <Link to="/contact-us">Contact</Link>
//         </li>
//       </ul>
//     </nav>
//     )
// }

//What worked for export class extends
    // state = {
    //     products:[]
    // };

    // componentDidMount() {
    //   Axios.get("http://localhost:5000/")
    //     .then(res=>{
    //       console.log(res);
    //       this.setState({products:res.data})
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //   })

    // }