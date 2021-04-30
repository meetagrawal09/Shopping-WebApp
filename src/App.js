import React from "react";
import './App.css';

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
// imported for the react router
//we removed "Link" in above import from curly braces as we are not using that tag here
//we use "Link" in case of the nav-bar so we import it there

// import the header component
import Header from './Header'

//import the home component
import Home from './Home'

//importing the checkout page
import Checkout from "./Checkout";

//we are using the functional based components and not class based components
//react hooks are used to do things with functional components that you can do with class based components

import Login from './Login';

function App() {
  return (
    // for multipage we wrap everything in the the router-tag
    <Router>   
      <div className="app">
        {/* we use switch for going to different pages */}
        <Switch>
          {/* each route is where we actually going to switch between pages */}
          {/* path is to provide the path to the page we want to reach out to-> this route can be actually anything */}

          <Route path="/checkout">
            <Header/>
            <Checkout/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          {/* default case here is this last one */}
          <Route path="/">
            {/* we rendered the header component here */}
            <Header/>
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
