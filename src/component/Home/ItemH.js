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
import ItemQuantityH from "./ItemQuantityH";
// import Link from "react-router-dom/es/Link";

class ItemH extends Component {
    async componentDidMount () {
        // this.props.listPALL();
        // this.props.listCALL();
        // this.props.listCIDPCCALL(2);
        // var {products1}= this.props.products;
        addjs();
        // console.log(this.props.lispPA());

        this.props.listCIDPCALL(1);
    }


    render() {

        const ListItem = this.props.categories.map((item, index) => {

            return (
                <div key = {index} className="of-hidden size-w-2 respon2" style={{margin: 'auto', width: '25%'}}>
                    <div className="hov-img1 pos-relative">
                        <img src="images/vegetable.jpg" alt="IMG" />
                        {/*<a href="shop-sidebar-grid.html" className="s-full ab-t-l flex-col-c-m bg11 p-all-15 hov1-parent">*/}
                        <Link to={`/shop/${item.id}`} className="s-full ab-t-l flex-col-c-m bg11 p-all-15 hov1-parent">
                            <div className="wrap-pic-max-w">
                                <img src="images/icons/symbol-03.png" alt="IMG" />
                            </div>
                            <span className="txt-l-102 cl0 txt-center p-t-30 p-b-13">
                                {item.name}
                            </span>
                            <ItemQuantityH idp={ item.id }/>
                        </Link>
                        {/*</a>*/}
                    </div>
                </div>
            )
        })

        return (
             // Item

        <div style={{marginTop: 40}} className="sec-item flex-w">

            {ListItem}

        </div>
        );
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
        // listPALL : () => {
        //     dispatch(listPARequest());
        // },
        // listCALL : () => {
        //     dispatch(listCARequest());
        // },
        listCIDPCALL : (id) => {
            dispatch(listCIDPRequest(id));
        },


}
}
export default connect(mapStateToProps,mapDispatchToProps) (ItemH)