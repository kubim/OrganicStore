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
import AccountLostPass from './Pages/AccountLostPass';
import Blog from './Pages/Blog';
import SingleBlog from './Pages/SingleBlog';
import Contact from './Pages/Contact';
import WishList from './Pages/WishList';
import MyAccount from './Pages/MyAccount';
import axios from "axios";
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories:[],
            products:[],
            productsOfC:[],
            listPsOfC:[],
            soL:[],
            isloading:true,
            ide:1
        };
    }
    componentDidMount(){

        //addjs();
        axios.get('http://api-organic.herokuapp.com/v1/products').then(res =>{
            //   callApi(1,'products','GET',null).then( res =>{
            this.setState({
                products:res.data,
            });
            axios.get('https://api-organic.herokuapp.com/v1/categories').then(res =>{
                // callApi(1,'categories','GET',null).then( res =>{
                this.setState({
                    categories:res.data,
                });
                console.log("ct");
                this.state.categories.map((it,index) => {  this.soPinC(it.id)});

                // addjs();


                console.log(this.state.listPsOfC);
                console.log(this.state.categories);
                console.log(this.state.soL);
            }).catch(err=>{alert("Get categories fail!")})
            // addjs();
            // this.state.categories.map((item,index) => { return (item.id !==0)? console.log(this.soPinC(item.id)):null});
        }).catch(err=>{alert("Get products fail!")})

    }
    soPinC =(id)=>{
        // event.preventDefault();
        var result=0;
        console.log("id"+id);
        // this.state.soL.push(id);
        axios.get('https://organicshoptl.herokuapp.com/api/categories/'+id).then(res =>{
            //      callApi(0,`categories/${id}`,'GET',null).then( res =>{
            this.setState({
                productsOfC:res.data,

            });
            this.state.listPsOfC.push({id:id, list: this.state.productsOfC});
            // this.setState(this.state);
            var obj = {id:id, lengthC:this.state.productsOfC.length};
            result = this.state.productsOfC.length;
            this.state.soL.push(obj);
            this.setState(this.state);
            // alert("rs"+result);
            addjs();
        }).catch(err1=>{alert("Get productsOfC fail!")});
        // console.log(this.state.soL);
        // alert("sl"+this.state.soL);

        return result;
    }
  render() {

    return (
        <Router>
            <div>

            <Header/>
              <Switch>
                  <Route exact path="/" name="Home" component={Home} />
                  <Route exact path="/shop" name="Shop" component={Shop} />
                  <Route path="/shop/:id" name="Shop" component={Shop} />
                  <Route path="/singleproduct/:id" name="SingleProduct" component={SingleProduct} />
                  <Route path="/cart" name="Cart" component={Cart} />
                  <Route path="/checkout" name="Checkout" component={Checkout} />
                  <Route path="/contact" name="Contact Page" component={Contact} />
                  <Route path="/wishlist" name="Whislist Page" component={WishList} />
                  <Route path="/lostpass" name="Account Lost Pass Page" component={AccountLostPass} />
                  <Route   path="/myaccount" name="My Account Page" component={MyAccount} />
                  <Route path="/blog" name="Blog Page" component={Blog} />
                  <Route path="/blogsingle" name="Single Blog Page" component={SingleBlog} />

                  
                  {/*<Route path="/singleProduct/:id" name="Single Product Page" component={SingleProduct} />*/}
                  {/*<Route   path="/checkout" name="Checkout Page" component={Checkout} />*/}
                  {/*<Route   path="/cart" name="Cart Page" component={Cart} />*/}
                  {/*<Route  exact path="/" name="Home Page" component={Home} />*/}

                  {/*<Route exact path="/add" name="Add Page" component={Add} />*/}
                  {/*<Route exact path="/edit/:id" name="Edit Page" component={Edit} />*/}

              </Switch>
              <Footer/>
                <Home products={this.state.products}
                      categories={this.state.categories}
                      listPsOfC={this.state.listPsOfC}
                      soL={this.state.soL}
                />
              <BackToTop/>
            </div>
        </Router>
    );
  }
}

export default App;