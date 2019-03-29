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

class ProductH extends Component {
    componentDidMount () {
        // this.props.listPALL();
        // this.props.listCALL();
        // this.props.listCIDPCCALL(2);
        // var {products1}= this.props.products;
        addjs();
        // console.log(this.props.lispPA());
        var { idp, pro } = this.props;
        alert("denPrH roi"+idp+" - "+pro);
        alert(idp);
        this.props.listPIDCACALL(idp,pro);
    }


    render() {


        // console.log(this.props.products);
        // console.log(this.props.categories);

        // console.log(this.props.listPALL());
        // console.log(this.props.products);

        // const ListItem = this.props.categories.map((item, index) => {
        //
        //     return (
        //         <div key = {index} className="of-hidden size-w-2 respon2" style={{margin: 'auto', width: '25%'}}>
        //             <div className="hov-img1 pos-relative">
        //                 <img src="images/vegetable.jpg" alt="IMG" />
        //                 {/*<a href="shop-sidebar-grid.html" className="s-full ab-t-l flex-col-c-m bg11 p-all-15 hov1-parent">*/}
        //                 <Link to={`/shop/${item.id}`} className="s-full ab-t-l flex-col-c-m bg11 p-all-15 hov1-parent">
        //                     <div className="wrap-pic-max-w">
        //                         <img src="images/icons/symbol-03.png" alt="IMG" />
        //                     </div>
        //                     <span className="txt-l-102 cl0 txt-center p-t-30 p-b-13">
        //                         {item.name}
        //                     </span>
        //                     <div className="hov1 trans-04">
        //                         <div className="txt-m-102 cl0 txt-center hov1-child trans-04">
        //                             - 5 Sản phẩm -
        //                         </div>
        //                     </div>
        //                 </Link>
        //                 {/*</a>*/}
        //             </div>
        //         </div>
        //     )
        // })

        return (

            <div >



                            <div className="row isotope-grid">
                                {this.props.products.map((item, index) =>
                                // {/* - */}
                                    <div className="col-sm-6 col-md-4 col-lg-3 p-b-75 isotope-item fruit-juic-fill other-fill">
                                    {/* Block1 */}
                                    <div className="block1">
                                    <div className="block1-bg wrap-pic-w bo-all-1 bocl12 hov3 trans-04">
                                    <img src="images/product-01.jpg" alt="IMG" />
                                    <div className="block1-content flex-col-c-m p-b-46">
                                    {/*<a href="product-single.html" className="txt-m-103 cl3 txt-center hov-cl10 trans-04 js-name-b1">*/}
                                    <Link to="/singleProduct" className="txt-m-103 cl3 txt-center hov-cl10 trans-04 js-name-b1">
                                        {item.name}
                                    </Link>
                                    {/*</a>*/}
                                    <span className="block1-content-more txt-m-104 cl9 p-t-21 trans-04">
                                    21vnd
                                    </span>
                                    <div className="block1-wrap-icon flex-c-m flex-w trans-05">
                                    {/*<a href="product-single.html" className="block1-icon flex-c-m wrap-pic-max-w">*/}
                                    <Link to="/singleProduct" className="block1-icon flex-c-m wrap-pic-max-w">
                                    <img src="images/icons/icon-view.png" alt="ICON" />
                                    </Link>
                                    {/*</a>*/}
                                    {/*<a href="#" className="block1-icon flex-c-m wrap-pic-max-w js-addcart-b1">*/}
                                    <Link to="/shop" className="block1-icon flex-c-m wrap-pic-max-w js-addcart-b1">
                                    <img src="images/icons/icon-cart.png" alt="ICON" />
                                    </Link>
                                    {/*</a>*/}
                                    {/*<a href="wishlist.html" className="block1-icon flex-c-m wrap-pic-max-w js-addwish-b1">*/}
                                    <Link to="/wishlist" className="block1-icon flex-c-m wrap-pic-max-w js-addwish-b1">
                                    <img className="icon-addwish-b1" src="images/icons/icon-heart.png" alt="ICON" />
                                    <img className="icon-addedwish-b1" src="images/icons/icon-heart2.png" alt="ICON" />
                                    </Link>
                                    {/*</a>*/}
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                                    </div>

                                    )
                                }
                            </div>


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
        // listCIDPCALL : (id) => {
        //     dispatch(listCIDPRequest(id));
        // },
        // listCIDPCCALL : (id) => {
        //     dispatch(listCIDPCRequest(id));
        // },
        listPIDCACALL : (id,data) => {
        dispatch(listPIDCARequest(id,data));
    },
}
}
export default connect(mapStateToProps,mapDispatchToProps) (ProductH)