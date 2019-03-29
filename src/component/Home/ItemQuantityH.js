import React, {Component} from 'react';
import  { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import addjs from "./../../jslib/jslib";
import {listCIDPRequest, listPARequest, listPIDCARequest} from "./../../actions/index";
import { listCARequest} from "./../../actions/index";
import ReactDOM from 'react-dom';
// import './index.css';
// import Header from '../component/Header'
// import Footer from '../component/Footer';
// import Contact from "../Contact";
// import Whislist from "../Wishlist";
// import AccountLostPass from "../AccountLostPass";
// import MyAccount from "../MyAccount";
// import Checkout from "../Checkout";
// import Cart from "../Cart";
// import Blog from "../Blog";
// import SingleBlog from "../SingleBlog";
// import SingleProduct from "../SingleProduct";
// import Shop from "../Shop";

import registerServiceWorker from '../../registerServiceWorker';

import Axios from 'axios';
import {listCIDPCRequest} from "../../actions";
// import Link from "react-router-dom/es/Link";

class ItemQuantityH extends Component {
    async componentDidMount () {
        // this.props.listPALL();
        // this.props.listCALL();
        // this.props.listCIDPCCALL(2);
        // var {products1}= this.props.products;
        addjs();
        var { idp } = this.props;
        alert(idp);
        this.props.listPIDCACALL(idp);
        // console.log(this.props.lispPA());
        // this.props.listCIDPCALL(1);
    }
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         ide: 0
    //     }
    //
    // }
    // ic(i) {
    //     alert(i + "editstart");
    //     i===null?0:i;
    //     this.setState({ide:i});
    //
    // }
    render() {



            return (

                            <div className="hov1 trans-04">
                                <div className="txt-m-102 cl0 txt-center hov1-child trans-04">
                                    - {this.props.products.length} -
                                </div>
                            </div>


            )

    }
}
const mapStateToProps = (state) => {
    return {
        products : state.products,
        categories : state.categories
        // ,
        // categoriesbyidp: state.categories
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return{

        listPIDCACALL : (id) => {
        dispatch(listPIDCARequest(id));
    },
}
}
export default connect(mapStateToProps,mapDispatchToProps) (ItemQuantityH)