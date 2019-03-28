import React, { Component } from 'react';
import {HashRouter as Router,Switch,Route} from 'react-router-dom';
import logo from './logo.svg';
import addjs from './jslib/jslib';
import './App.css';
import Home from './Pages/Home';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import BackToTop from './Layout/BackToTop';
import Shop from './Pages/Shop';
import SingleProduct from './Pages/SingleProduct';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';
import LostPass from './Pages/LostPass';
import Blog from './Pages/Blog';
import BlogSingle from './Pages/BlogSingle';
import Contact from './Pages/Contact';
import WishList from './Pages/WishList';
import MyAccount from './Pages/MyAccount';
class App extends Component {
  render() {
    return (
        <Router>
            <div>
            <Header/>
              <Switch>
                  <Route exact path="/" name="Home" component={Home} />
                  <Route path="/shop" name="Shop" component={Shop} />
                  <Route path="/singleproduct/:id" name="SingleProduct" component={SingleProduct} />
                  <Route path="/cart" name="Cart" component={Cart} />
                  <Route path="/checkout" name="Checkout" component={Checkout} />
                  <Route path="/contact" name="Contact Page" component={Contact} />
                  <Route path="/wishlist" name="Whislist Page" component={WishList} />
                  <Route path="/lostpass" name="Account Lost Pass Page" component={LostPass} />
                  <Route   path="/myaccount" name="My Account Page" component={MyAccount} />
                  <Route path="/blog" name="Blog Page" component={Blog} />
                  <Route path="/blogsingle" name="Single Blog Page" component={BlogSingle} />

                  
                  {/*<Route path="/singleProduct/:id" name="Single Product Page" component={SingleProduct} />*/}
                  {/*<Route   path="/checkout" name="Checkout Page" component={Checkout} />*/}
                  {/*<Route   path="/cart" name="Cart Page" component={Cart} />*/}
                  {/*<Route  exact path="/" name="Home Page" component={Home} />*/}

                  {/*<Route exact path="/add" name="Add Page" component={Add} />*/}
                  {/*<Route exact path="/edit/:id" name="Edit Page" component={Edit} />*/}

              </Switch>
              <Footer/>
              <BackToTop/>
            </div>
        </Router>
    );
  }
}

export default App;