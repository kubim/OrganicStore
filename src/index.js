import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// import  { createStore } from 'redux';
import  myReducer from'./reducers/index';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
// import { applyMiddleware } from 'redux';

import  { compose, createStore } from 'redux';
// import  myReducer from'./reducers/index';
// import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';
import Header from "./Layout/Header";
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import SingleProduct from "./Pages/SingleProduct";
import MyAccount from "./Pages/MyAccount";
import Checkout from "./Pages/Checkout";
import Cart from "./Pages/Cart";
import Blog from "./Pages/Blog";
import SingleBlog from "./Pages/SingleBlog";
import AccountLostPass from "./Pages/AccountLostPass";
import Contact from "./Pages/Contact";
import HashRouter from "react-router-dom/es/HashRouter";
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import WishList from "./Pages/WishList";
import Footer from "./Layout/Footer";

const store = createStore (

    myReducer,
    compose(
        // addjs,
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);
ReactDOM.render(      
		<Provider store={ store }>
            {/*<App/>*/}
            <HashRouter>
                <div>
                    {/*addjs();*/}
                    <Header/>
                    <Switch>
                        <Route   path="/contact" name="Contact Page" component={Contact} />
                        <Route   path="/wishlist" name="Whislist Page" component={WishList} />
                        <Route   path="/lostPass" name="Account Lost Pass Page" component={AccountLostPass} />
                        <Route   path="/myAccount" name="My Account Page" component={MyAccount} />
                        <Route   path="/checkout" name="Checkout Page" component={Checkout} />
                        <Route   path="/cart" name="Cart Page" component={Cart} />
                        <Route   path="/blog" name="Blog Page" component={Blog} />
                        <Route   path="/singleBlog" name="Single Blog Page" component={SingleBlog} />
                        <Route path="/singleProduct/:id" name="Single Product Page" component={SingleProduct} />
                        <Route   path="/shop/:id" name="Shop Page" component={Shop} />
                        <Route   path="/shop" name="Shop Page" component={Shop} />
                        <Route  exact path="/" name="Home Page" component={Home} />
                    </Switch>
                    <Footer/>
                </div>
            </HashRouter>
      </Provider>, document.getElementById('root'));
serviceWorker.unregister();
