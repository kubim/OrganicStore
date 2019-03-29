import React, {Component} from 'react';
import  { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import addjs from "../jslib/jslib";
import {listCIDPRequest, listPARequest, listPIDCARequest} from "./../actions/index";
import { listCARequest} from "./../actions/index";
import ReactDOM from 'react-dom';
// import './index.css';
import Header from '../component/Header'
import Footer from '../component/Footer';
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

import registerServiceWorker from '../registerServiceWorker';

import Axios from 'axios';
import ProductsH from "../component/Home/ProductsH";
import ItemH from "../component/Home/ItemH";
// import Link from "react-router-dom/es/Link";

class Home extends Component {

    async componentDidMount () {
        this.props.listPALL();


        // this.props.listCALL();
        //this.props.listCIDPCALL(1);
        // var {products1}= this.props.products;
        addjs();
        // console.log(this.props.lispPA());
    }

    render() {
        const ListItemNB = () => {

            this.props.products.sort((c,d)=>  d.buy-c.buy).map((item,index) => { return (index<=6)?
                <div key={index} className="item-slick4">
                    <div className="block1">
                        <div className="block1-bg wrap-pic-w">
                            <img src={'https://organic-store.herokuapp.com/api/shop/image/' + item.id} alt="IMG"/>
                            <div className="block1-content flex-col-c-m p-b-46">
                                {/*<a href="product-single.html" className="txt-m-103 cl3 txt-center hov-cl10 trans-04 js-name-b1">*/}
                                <Link to="/singleProduct"
                                      className="txt-m-103 cl3 txt-center hov-cl10 trans-04 js-name-b1">
                                    {item.name}
                                </Link>
                                {/*</a>*/}
                                <span className="block1-content-more txt-m-104 cl9 p-t-21 trans-04">
                                                                         {item.price}
                                                                     </span>
                                <div className="block1-wrap-icon flex-c-m flex-w trans-05">
                                    {/*<a href="product-single.html" className="block1-icon flex-c-m wrap-pic-max-w">*/}
                                    <Link to="/singleProduct" className="block1-icon flex-c-m wrap-pic-max-w">
                                        <img src="images/icons/icon-view.png" alt="ICON"/>
                                    </Link>
                                    {/*</a>*/}
                                    {/*<a href="#" className="block1-icon flex-c-m wrap-pic-max-w js-addcart-b1">*/}
                                    <Link to="/cart" className="block1-icon flex-c-m wrap-pic-max-w js-addcart-b1">
                                        <img src="images/icons/icon-cart.png" alt="ICON"/>
                                    </Link>
                                    {/*</a>*/}
                                    {/*<a href="wishlist.html" className="block1-icon flex-c-m wrap-pic-max-w js-addwish-b1">*/}
                                    <Link to="/wishlist" className="block1-icon flex-c-m wrap-pic-max-w js-addwish-b1">
                                        <img className="icon-addwish-b1" src="images/icons/icon-heart.png" alt="ICON"/>
                                        <img className="icon-addedwish-b1" src="images/icons/icon-heart2.png" alt="ICON"/>
                                    </Link>
                                    {/*</a>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>:null})


        }
            // ListItem = this.props.categories.map((item, index) => {
            //      return (
            //      <div className="block1">
            //          <div className="block1-bg wrap-pic-w">
            //              <img src="images/product-18.jpg" alt="IMG"/>
            //              <div className="block1-content flex-col-c-m p-b-46">
            //                  {/*<a href="product-single.html" className="txt-m-103 cl3 txt-center hov-cl10 trans-04 js-name-b1">*/}
            //                  <Link to="/singleProduct"
            //                        className="txt-m-103 cl3 txt-center hov-cl10 trans-04 js-name-b1">
            //                      {a[i].name}
            //                  </Link>
            //                  {/*</a>*/}
            //                  <span className="block1-content-more txt-m-104 cl9 p-t-21 trans-04">
            //                      {a[i].price}
            //                   </span>
            //                  <div className="block1-wrap-icon flex-c-m flex-w trans-05">
            //                      {/*<a href="product-single.html" className="block1-icon flex-c-m wrap-pic-max-w">*/}
            //                      <Link to="/singleProduct" className="block1-icon flex-c-m wrap-pic-max-w">
            //                          <img src="images/icons/icon-view.png" alt="ICON"/>
            //                      </Link>
            //                      {/*</a>*/}
            //                      {/*<a href="#" className="block1-icon flex-c-m wrap-pic-max-w js-addcart-b1">*/}
            //                      <Link to="/cart" className="block1-icon flex-c-m wrap-pic-max-w js-addcart-b1">
            //                          <img src="images/icons/icon-cart.png" alt="ICON"/>
            //                      </Link>
            //                      {/*</a>*/}
            //                      {/*<a href="wishlist.html" className="block1-icon flex-c-m wrap-pic-max-w js-addwish-b1">*/}
            //                      <Link to="/wishlist" className="block1-icon flex-c-m wrap-pic-max-w js-addwish-b1">
            //                          <img className="icon-addwish-b1" src="images/icons/icon-heart.png" alt="ICON"/>
            //                          <img className="icon-addedwish-b1" src="images/icons/icon-heart2.png" alt="ICON"/>
            //                      </Link>
            //                      {/*</a>*/}
            //                  </div>
            //              </div>
            //          </div>
            //      </div>
            //      )
            // })
        // console.log(this.props.products);
        // console.log(this.props.categories);

        // console.log(this.props.listPALL());
        // console.log(this.props.products);



            return (

            <div >

                {/* Header */}
                {/*<Header/>*/}
                {/* Slider */}
                <section className="sec-slider">
                    <div className="rev_slider_wrapper fullwidthbanner-container">
                        <div id="rev_slider_1" className="rev_slide fullwidthabanner" data-version="5.4.5" style={{display: 'none'}}>
                            <ul>
                                {/* Slide 1 */}
                                <li data-transition="fade">
                                    {/*  */}
                                    <img src="images/Banner1.jpg" alt="IMG-BG" className="rev-slidebg" />
                                    {/*  */}
                                    <div className="tp-caption tp-resizeme layer1" data-frames="[{&quot;delay&quot;:1300,&quot;speed&quot;:1300,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:50px;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-visibility="['on', 'on', 'on', 'on']" data-fontsize="['35', '35', '35', '35']" data-lineheight="['42', '42', '42', '42']" data-color="['#333']" data-textalign="['left', 'left', 'center', 'center']" data-x="['left']" data-y="['center']" data-hoffset="['310', '80', '0', '0']" data-voffset="['-78', '-78', '-78', '-150']" data-width="['650','650','768','576']" data-height="['auto']" data-whitespace="['normal']" data-paddingtop="[0, 0, 0, 0]" data-paddingright="[15, 15, 15, 15]" data-paddingbottom="[0, 0, 0, 0]" data-paddingleft="[15, 15, 15, 15]" data-basealign="slide" data-responsive_offset="on">
                                        <span className="child1">organic</span> <span className="child2">products</span>
                                    </div>
                                    {/*  */}
                                    <h2 className="tp-caption tp-resizeme layer2" data-frames="[{&quot;delay&quot;:500,&quot;speed&quot;:1500,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:[175%];y:0px;z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:1;&quot;,&quot;mask&quot;:&quot;x:[-100%];y:0;s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-visibility="['on', 'on', 'on', 'on']" data-fontsize="['75', '75', '75', '75']" data-lineheight="['82', '82', '82', '82']" data-color="['#333']" data-textalign="['left', 'left', 'center', 'center']" data-x="['left']" data-y="['center']" data-hoffset="['310', '80', '0', '0']" data-voffset="['0', '0', '0', '-30']" data-width="['650','650','768','576']" data-height="['auto']" data-whitespace="['normal']" data-paddingtop="[0, 0, 0, 0]" data-paddingright="[15, 15, 15, 15]" data-paddingbottom="[0, 0, 0, 0]" data-paddingleft="[15, 15, 15, 15]" data-basealign="slide" data-responsive_offset="on">
                                        Fresh Fr<span>u</span>its
                                    </h2>
                                    {/*  */}
                                    <p className="tp-caption tp-resizeme layer3" data-frames="[{&quot;delay&quot;:1300,&quot;speed&quot;:1300,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:-50px;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-visibility="['on', 'on', 'on', 'on']" data-fontsize="['15', '15', '15', '15']" data-lineheight="['24', '24', '24', '24']" data-color="['#666']" data-textalign="['left', 'left', 'center', 'center']" data-x="['left']" data-y="['center']" data-hoffset="['310', '80', '0', '0']" data-voffset="['95', '95', '95', '95']" data-width="['650','650','768','576']" data-height="['auto', 'auto', 'auto', 'auto']" data-whitespace="['normal']" data-paddingtop="[0, 0, 0, 0]" data-paddingright="[15, 15, 35, 15]" data-paddingbottom="[0, 0, 0, 0]" data-paddingleft="[15, 15, 35, 15]" data-basealign="slide" data-responsive_offset="on">
                                    </p>
                                    {/*  */}
                                    <div className="tp-caption tp-resizeme flex-w layer4" data-frames="[{&quot;delay&quot;:2500,&quot;speed&quot;:1500,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;z:0;rX:0;rY:0;rZ:0;sX:0.6;sY:0.6;skX:0;skY:0;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-x="['left']" data-y="['center']" data-hoffset="['310', '80', '0', '0']" data-voffset="['203', '203', '203', '203']" data-width="['650','650','768','576']" data-height="['auto']" data-paddingtop="[0, 0, 0, 0]" data-paddingright="[15, 15, 15, 15]" data-paddingbottom="[0, 0, 0, 0]" data-paddingleft="[15, 15, 15, 15]" data-basealign="slide" data-responsive_offset="on">
                                        {/*<a href="shop-sidebar-grid.html" className="btn-slide flex-c-m">*/}
                                        <Link to="/shop"  className="btn-slide flex-c-m">
                                            Mua ngay
                                            <span className="lnr lnr-chevron-right m-l-7" />
                                            <span className="lnr lnr-chevron-right" />
                                        </Link>
                                        {/*</a>*/}
                                    </div>
                                </li>
                                {/* Slide 2 */}
                                <li data-transition="fade">
                                    {/*  */}
                                    <img src="images/Banner6.jpg" alt="IMG-BG" className="rev-slidebg" />
                                    {/*  */}
                                    <div className="tp-caption tp-resizeme layer1" data-frames="[{&quot;delay&quot;:500,&quot;speed&quot;:1300,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:150px;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-visibility="['on', 'on', 'on', 'on']" data-fontsize="['35', '35', '35', '35']" data-lineheight="['42', '42', '42', '42']" data-color="['#333']" data-textalign="['left', 'left', 'center', 'center']" data-x="['left']" data-y="['center']" data-hoffset="['310', '80', '0', '0']" data-voffset="['-78', '-78', '-78', '-150']" data-width="['650','650','768','576']" data-height="['auto']" data-whitespace="['normal']" data-paddingtop="[0, 0, 0, 0]" data-paddingright="[15, 15, 15, 15]" data-paddingbottom="[0, 0, 0, 0]" data-paddingleft="[15, 15, 15, 15]" data-basealign="slide" data-responsive_offset="on">
                                        <span className="child1">organic</span> <span className="child2">products</span>
                                    </div>
                                    {/*  */}
                                    <h2 className="tp-caption tp-resizeme layer2" data-frames="[{&quot;delay&quot;:1300,&quot;speed&quot;:1300,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:-50px;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-visibility="['on', 'on', 'on', 'on']" data-fontsize="['75', '75', '75', '75']" data-lineheight="['82', '82', '82', '82']" data-color="#E2C7C7" data-textalign="['left', 'left', 'center', 'center']" data-x="['left']" data-y="['center']" data-hoffset="['310', '80', '0', '0']" data-voffset="['0', '0', '0', '-30']" data-width="['650','650','768','576']" data-height="['auto']" data-whitespace="['normal']" data-paddingtop="[0, 0, 0, 0]" data-paddingright="[15, 15, 15, 15]" data-paddingbottom="[0, 0, 0, 0]" data-paddingleft="[15, 15, 15, 15]" data-basealign="slide" data-responsive_offset="on">
                                        Fresh Veget<span>a</span>bles
                                    </h2>
                                    {/*  */}
                                    <p className="tp-caption tp-resizeme layer3" data-frames="[{&quot;delay&quot;:500,&quot;speed&quot;:1300,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:-150px;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-visibility="['on', 'on', 'on', 'on']" data-fontsize="['15', '15', '15', '15']" data-lineheight="['24', '24', '24', '24']" data-color="['#666']" data-textalign="['left', 'left', 'center', 'center']" data-x="['left']" data-y="['center']" data-hoffset="['310', '80', '0', '0']" data-voffset="['95', '95', '95', '95']" data-width="['650','650','768','576']" data-height="['auto', 'auto', 'auto', 'auto']" data-whitespace="['normal']" data-paddingtop="[0, 0, 0, 0]" data-paddingright="[15, 15, 35, 15]" data-paddingbottom="[0, 0, 0, 0]" data-paddingleft="[15, 15, 35, 15]" data-basealign="slide" data-responsive_offset="on">
                                    </p>
                                    {/*  */}
                                    <div className="tp-caption tp-resizeme flex-w layer4" data-frames="[{&quot;delay&quot;:2000,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-x="['left']" data-y="['center']" data-hoffset="['310', '80', '0', '0']" data-voffset="['203', '203', '203', '203']" data-width="['650','650','768','576']" data-height="['auto']" data-paddingtop="[0, 0, 0, 0]" data-paddingright="[15, 15, 15, 15]" data-paddingbottom="[0, 0, 0, 0]" data-paddingleft="[15, 15, 15, 15]" data-basealign="slide" data-responsive_offset="on">
                                        {/*<a href="shop-sidebar-grid.html" className="btn-slide flex-c-m">*/}
                                        <Link to="/shop" className="btn-slide flex-c-m">
                                            Mua ngay
                                            <span className="lnr lnr-chevron-right m-l-7" />
                                            <span className="lnr lnr-chevron-right" />
                                        </Link>
                                        {/*</a>*/}
                                    </div>
                                </li>
                                {/* Slide 3 */}
                                <li data-transition="fade">
                                    {/*  */}
                                    <img src="images/Banner8.jpg" alt="IMG-BG" className="rev-slidebg" />
                                    {/*  */}
                                    <div className="tp-caption tp-resizeme layer1" data-frames="[{&quot;delay&quot;:1300,&quot;speed&quot;:1300,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:-200px;skX:85px;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-visibility="['on', 'on', 'on', 'on']" data-fontsize="['35', '35', '35', '35']" data-lineheight="['42', '42', '42', '42']" data-color="['#333']" data-textalign="['left', 'left', 'center', 'center']" data-x="['left']" data-y="['center']" data-hoffset="['310', '80', '0', '0']" data-voffset="['-78', '-78', '-78', '-150']" data-width="['650','650','768','576']" data-height="['auto']" data-whitespace="['normal']" data-paddingtop="[0, 0, 0, 0]" data-paddingright="[15, 15, 15, 15]" data-paddingbottom="[0, 0, 0, 0]" data-paddingleft="[15, 15, 15, 15]" data-basealign="slide" data-responsive_offset="on">
                                        <span className="child1">organic</span> <span className="child2">products</span>
                                    </div>
                                    {/*  */}
                                    <h2 className="tp-caption tp-resizeme layer2" data-frames="[{&quot;delay&quot;:500,&quot;speed&quot;:1300,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:200px;skX:-85px;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-visibility="['on', 'on', 'on', 'on']" data-fontsize="['75', '75', '75', '75']" data-lineheight="['82', '82', '82', '82']" data-color="#F44C39 " data-textalign="['left', 'left', 'center', 'center']" data-x="['left']" data-y="['center']" data-hoffset="['310', '80', '0', '0']" data-voffset="['0', '0', '0', '-30']" data-width="['650','650','768','576']" data-height="['auto']" data-whitespace="['normal']" data-paddingtop="[0, 0, 0, 0]" data-paddingright="[15, 15, 15, 15]" data-paddingbottom="[0, 0, 0, 0]" data-paddingleft="[15, 15, 15, 15]" data-basealign="slide" data-responsive_offset="on">
                                        Best Dr<span>i</span>ed
                                    </h2>
                                    {/*  */}
                                    <p className="tp-caption tp-resizeme layer3" data-frames="[{&quot;delay&quot;:1300,&quot;speed&quot;:1300,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:-200px;skX:85px;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-visibility="['on', 'on', 'on', 'on']" data-fontsize="['15', '15', '15', '15']" data-lineheight="['24', '24', '24', '24']" data-color="['#666']" data-textalign="['left', 'left', 'center', 'center']" data-x="['left']" data-y="['center']" data-hoffset="['310', '80', '0', '0']" data-voffset="['95', '95', '95', '95']" data-width="['650','650','768','576']" data-height="['auto', 'auto', 'auto', 'auto']" data-whitespace="['normal']" data-paddingtop="[0, 0, 0, 0]" data-paddingright="[15, 15, 35, 15]" data-paddingbottom="[0, 0, 0, 0]" data-paddingleft="[15, 15, 35, 15]" data-basealign="slide" data-responsive_offset="on">
                                        Đồ khô Đà Lạt giảm giá cực shock
                                    </p>
                                    {/*  */}
                                    <div className="tp-caption tp-resizeme flex-w layer4" data-frames="[{&quot;delay&quot;:2500,&quot;speed&quot;:1500,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:bottom;rZ:90deg;sX:2;sY:2;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-x="['left']" data-y="['center']" data-hoffset="['310', '80', '0', '0']" data-voffset="['203', '203', '203', '203']" data-width="['650','650','768','576']" data-height="['auto']" data-paddingtop="[0, 0, 0, 0]" data-paddingright="[15, 15, 15, 15]" data-paddingbottom="[0, 0, 0, 0]" data-paddingleft="[15, 15, 15, 15]" data-basealign="slide" data-responsive_offset="on">
                                        {/*<a href="shop-sidebar-grid.html" className="btn-slide flex-c-m">*/}
                                        <Link to="/shop" className="btn-slide flex-c-m">
                                            Mua ngay
                                            <span className="lnr lnr-chevron-right m-l-7" />
                                            <span className="lnr lnr-chevron-right" />
                                        </Link>
                                        {/*</a>*/}
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                {/* Item */}
                <ItemH/>

                {/* Product */}
                <ProductsH pro={this.props.products}/>
                <div>
                {/*<div className="sec-product bg0 p-t-145 p-b-25">*/}
                    {/*<div className="container">*/}
                        {/*<div className="size-a-1 flex-col-c-m p-b-48">*/}
                            {/*<div className="txt-center txt-m-201 cl10 how-pos1-parent m-b-14">*/}
                                {/*Sản phẩm nổi bật*/}
                                {/*<div className="how-pos1">*/}
                                    {/*<img src="images/icons/symbol-02.png" alt="IMG" />*/}
                                {/*</div>*/}
                            {/*</div>*/}
                            {/*<h3 className="txt-center txt-l-101 cl3 respon1">*/}
                                {/*SẢN PHẨM ORGANIC*/}
                            {/*</h3>*/}
                        {/*</div>*/}
                        {/*<div className="p-b-46">*/}
                            {/*<div className="flex-w flex-c-m filter-tope-group">*/}
                                {/*<button className="txt-m-104 cl9 hov2 trans-04 p-rl-27 p-b-10 how-active1" data-filter="*">*/}
                                    {/*Tất cả*/}
                                {/*</button>*/}
                                {/*<button className="txt-m-104 cl9 hov2 trans-04 p-rl-27 p-b-10" data-filter=".vegetable-fill">*/}
                                    {/*Rau củ*/}
                                {/*</button>*/}
                                {/*<button className="txt-m-104 cl9 hov2 trans-04 p-rl-27 p-b-10" data-filter=".fruit-fill">*/}
                                    {/*Trái cây Việt Nam*/}
                                {/*</button>*/}
                                {/*<button className="txt-m-104 cl9 hov2 trans-04 p-rl-27 p-b-10" data-filter=".fruit-juic-fill">*/}
                                    {/*Trái cây nhập khẩu*/}
                                {/*</button>*/}
                                {/*<button className="txt-m-104 cl9 hov2 trans-04 p-rl-27 p-b-10" data-filter=".dried-fill">*/}
                                    {/*Đồ khô*/}
                                {/*</button>*/}
                                {/*<button className="txt-m-104 cl9 hov2 trans-04 p-rl-27 p-b-10" data-filter=".other-fill">*/}
                                    {/*Khác*/}
                                {/*</button>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                        {/*<div className="row isotope-grid">*/}
                            {/*/!* - *!/*/}
                            {/*<div className="col-sm-6 col-md-4 col-lg-3 p-b-75 isotope-item fruit-juic-fill other-fill">*/}
                                {/*/!* Block1 *!/*/}
                                {/*<div className="block1">*/}
                                    {/*<div className="block1-bg wrap-pic-w bo-all-1 bocl12 hov3 trans-04">*/}
                                        {/*<img src="images/product-01.jpg" alt="IMG" />*/}
                                        {/*<div className="block1-content flex-col-c-m p-b-46">*/}
                                            {/*/!*<a href="product-single.html" className="txt-m-103 cl3 txt-center hov-cl10 trans-04 js-name-b1">*!/*/}
                                            {/*<Link to="/singleProduct" className="txt-m-103 cl3 txt-center hov-cl10 trans-04 js-name-b1">*/}
                                                {/*Red pumpkin*/}
                                            {/*</Link>*/}
                                            {/*/!*</a>*!/*/}
                                            {/*<span className="block1-content-more txt-m-104 cl9 p-t-21 trans-04">*/}
                        {/*21vnd*/}
                      {/*</span>*/}
                                            {/*<div className="block1-wrap-icon flex-c-m flex-w trans-05">*/}
                                                {/*/!*<a href="product-single.html" className="block1-icon flex-c-m wrap-pic-max-w">*!/*/}
                                                {/*<Link to="/singleProduct" className="block1-icon flex-c-m wrap-pic-max-w">*/}
                                                    {/*<img src="images/icons/icon-view.png" alt="ICON" />*/}
                                                {/*</Link>*/}
                                                {/*/!*</a>*!/*/}
                                                {/*/!*<a href="#" className="block1-icon flex-c-m wrap-pic-max-w js-addcart-b1">*!/*/}
                                                {/*<Link to="/shop" className="block1-icon flex-c-m wrap-pic-max-w js-addcart-b1">*/}
                                                    {/*<img src="images/icons/icon-cart.png" alt="ICON" />*/}
                                                {/*</Link>*/}
                                                {/*/!*</a>*!/*/}
                                                {/*/!*<a href="wishlist.html" className="block1-icon flex-c-m wrap-pic-max-w js-addwish-b1">*!/*/}
                                                {/*<Link to="/wishlist" className="block1-icon flex-c-m wrap-pic-max-w js-addwish-b1">*/}
                                                    {/*<img className="icon-addwish-b1" src="images/icons/icon-heart.png" alt="ICON" />*/}
                                                    {/*<img className="icon-addedwish-b1" src="images/icons/icon-heart2.png" alt="ICON" />*/}
                                                {/*</Link>*/}
                                            {/*/!*</a>*!/*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                            {/*/!* - *!/*/}
                            {/*<div className="col-sm-6 col-md-4 col-lg-3 p-b-75 isotope-item fruit-fill">*/}
                                {/*/!* Block1 *!/*/}
                                {/*<div className="block1">*/}
                                    {/*<div className="block1-bg wrap-pic-w bo-all-1 bocl12 hov3 trans-04">*/}
                                        {/*<img src="images/product-02.jpg" alt="IMG" />*/}
                                        {/*<div className="block1-content flex-col-c-m p-b-46">*/}
                                            {/*/!*<a href="product-single.html" className="txt-m-103 cl3 txt-center hov-cl10 trans-04 js-name-b1">*!/*/}
                                            {/*<Link to="/singleProduct" className="txt-m-103 cl3 txt-center hov-cl10 trans-04 js-name-b1">*/}
                                                {/*Strawberry*/}
                                            {/*</Link>*/}
                                            {/*/!*</a>*!/*/}
                                            {/*<span className="block1-content-more txt-m-104 cl9 p-t-21 trans-04">*/}
                        {/*23vnd*/}
                      {/*</span>*/}
                                            {/*<div className="block1-wrap-icon flex-c-m flex-w trans-05">*/}
                                                {/*/!*<a href="product-single.html" className="block1-icon flex-c-m wrap-pic-max-w">*!/*/}
                                                {/*<Link to="/singleProduct" className="block1-icon flex-c-m wrap-pic-max-w">*/}
                                                    {/*<img src="images/icons/icon-view.png" alt="ICON" />*/}
                                                {/*</Link>*/}
                                                {/*/!*</a>*!/*/}
                                                {/*/!*<a href="#" className="block1-icon flex-c-m wrap-pic-max-w js-addcart-b1">*!/*/}
                                                {/*<Link to="/shop" className="block1-icon flex-c-m wrap-pic-max-w js-addcart-b1">*/}
                                                    {/*<img src="images/icons/icon-cart.png" alt="ICON" />*/}
                                                {/*</Link>*/}
                                                {/*/!*</a>*!/*/}
                                                {/*/!*<a href="wishlist.html" className="block1-icon flex-c-m wrap-pic-max-w js-addwish-b1">*!/*/}
                                                {/*<Link to="/wishlist" className="block1-icon flex-c-m wrap-pic-max-w js-addwish-b1">*/}
                                                    {/*<img className="icon-addwish-b1" src="images/icons/icon-heart.png" alt="ICON" />*/}
                                                    {/*<img className="icon-addedwish-b1" src="images/icons/icon-heart2.png" alt="ICON" />*/}
                                                {/*</Link>*/}
                                                {/*/!*</a>*!/*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                            {/*/!* - *!/*/}
                            {/*<div className="col-sm-6 col-md-4 col-lg-3 p-b-75 isotope-item vegetable-fill dried-fill other-fill">*/}
                                {/*/!* Block1 *!/*/}
                                {/*<div className="block1">*/}
                                    {/*<div className="block1-bg wrap-pic-w bo-all-1 bocl12 hov3 trans-04">*/}
                                        {/*<img src="images/product-03.jpg" alt="IMG" />*/}
                                        {/*<div className="block1-content flex-col-c-m p-b-46">*/}
                                            {/*/!*<a href="product-single.html" className="txt-m-103 cl3 txt-center hov-cl10 trans-04 js-name-b1">*!/*/}
                                            {/*<Link to="/singleProduct" className="txt-m-103 cl3 txt-center hov-cl10 trans-04 js-name-b1">*/}
                                                {/*Cauliflower*/}
                                            {/*</Link>*/}
                                            {/*/!*</a>*!/*/}
                                            {/*<span className="block1-content-more txt-m-104 cl9 p-t-21 trans-04">*/}
                        {/*19vnd*/}
                      {/*</span>*/}
                                            {/*<div className="block1-wrap-icon flex-c-m flex-w trans-05">*/}
                                                {/*/!*<a href="product-single.html" className="block1-icon flex-c-m wrap-pic-max-w">*!/*/}
                                                {/*<Link to="/singleProduct" className="block1-icon flex-c-m wrap-pic-max-w">*/}
                                                    {/*<img src="images/icons/icon-view.png" alt="ICON" />*/}
                                                {/*</Link>*/}
                                                {/*/!*</a>*!/*/}
                                                {/*/!*<a href="#" className="block1-icon flex-c-m wrap-pic-max-w js-addcart-b1">*!/*/}
                                                {/*<Link to="/shop" className="block1-icon flex-c-m wrap-pic-max-w js-addcart-b1">*/}
                                                    {/*<img src="images/icons/icon-cart.png" alt="ICON" />*/}
                                                {/*</Link>*/}
                                                {/*/!*</a>*!/*/}
                                                {/*/!*<a href="wishlist.html" className="block1-icon flex-c-m wrap-pic-max-w js-addwish-b1">*!/*/}
                                                {/*<Link to="/wishlist" className="block1-icon flex-c-m wrap-pic-max-w js-addwish-b1">*/}
                                                    {/*<img className="icon-addwish-b1" src="images/icons/icon-heart.png" alt="ICON" />*/}
                                                    {/*<img className="icon-addedwish-b1" src="images/icons/icon-heart2.png" alt="ICON" />*/}
                                                {/*</Link>*/}
                                                {/*/!*</a>*!/*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                            {/*/!* - *!/*/}
                            {/*<div className="col-sm-6 col-md-4 col-lg-3 p-b-75 isotope-item vegetable-fill dried-fill">*/}
                                {/*/!* Block1 *!/*/}
                                {/*<div className="block1">*/}
                                    {/*<div className="block1-bg wrap-pic-w bo-all-1 bocl12 hov3 trans-04">*/}
                                        {/*<img src="images/product-04.jpg" alt="IMG" />*/}
                                        {/*<div className="block1-content flex-col-c-m p-b-46">*/}
                                            {/*/!*<a href="product-single.html" className="txt-m-103 cl3 txt-center hov-cl10 trans-04 js-name-b1">*!/*/}
                                            {/*<Link to="/singleProduct" className="txt-m-103 cl3 txt-center hov-cl10 trans-04 js-name-b1">*/}
                                                {/*Vegetable*/}
                                            {/*</Link>*/}
                                            {/*/!*</a>*!/*/}
                                            {/*<span className="block1-content-more txt-m-104 cl9 p-t-21 trans-04">*/}
                        {/*22vnd*/}
                      {/*</span>*/}
                                            {/*<div className="block1-wrap-icon flex-c-m flex-w trans-05">*/}
                                                {/*/!*<a href="product-single.html" className="block1-icon flex-c-m wrap-pic-max-w">*!/*/}
                                                {/*<Link to="/singleProduct" className="block1-icon flex-c-m wrap-pic-max-w">*/}
                                                    {/*<img src="images/icons/icon-view.png" alt="ICON" />*/}
                                                {/*</Link>*/}
                                                {/*/!*</a>*!/*/}
                                                {/*/!*<a href="#" className="block1-icon flex-c-m wrap-pic-max-w js-addcart-b1">*!/*/}
                                                {/*<Link to="/shop" className="block1-icon flex-c-m wrap-pic-max-w js-addcart-b1">*/}
                                                    {/*<img src="images/icons/icon-cart.png" alt="ICON" />*/}
                                                {/*</Link>*/}
                                                {/*/!*</a>*!/*/}
                                                {/*/!*<a href="wishlist.html" className="block1-icon flex-c-m wrap-pic-max-w js-addwish-b1">*!/*/}
                                                {/*<Link to="/wishlist" className="block1-icon flex-c-m wrap-pic-max-w js-addwish-b1">*/}
                                                    {/*<img className="icon-addwish-b1" src="images/icons/icon-heart.png" alt="ICON" />*/}
                                                    {/*<img className="icon-addedwish-b1" src="images/icons/icon-heart2.png" alt="ICON" />*/}
                                                {/*</Link>*/}
                                                {/*/!*</a>*!/*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                            {/*/!* - *!/*/}
                            {/*<div className="col-sm-6 col-md-4 col-lg-3 p-b-75 isotope-item fruit-fill fruit-juic-fill other-fill">*/}
                                {/*/!* Block1 *!/*/}
                                {/*<div className="block1">*/}
                                    {/*<div className="block1-bg wrap-pic-w bo-all-1 bocl12 hov3 trans-04">*/}
                                        {/*<img src="images/product-05.jpg" alt="IMG" />*/}
                                        {/*<div className="block1-content flex-col-c-m p-b-46">*/}
                                            {/*/!*<a href="product-single.html" className="txt-m-103 cl3 txt-center hov-cl10 trans-04 js-name-b1">*!/*/}
                                            {/*<Link to="/singleProduct" className="txt-m-103 cl3 txt-center hov-cl10 trans-04 js-name-b1">*/}
                                                {/*Bell pepper*/}
                                            {/*</Link>*/}
                                            {/*/!*</a>*!/*/}
                                            {/*<span className="block1-content-more txt-m-104 cl9 p-t-21 trans-04">*/}
                        {/*12vnd*/}
                      {/*</span>*/}
                                            {/*<div className="block1-wrap-icon flex-c-m flex-w trans-05">*/}
                                                {/*/!*<a href="product-single.html" className="block1-icon flex-c-m wrap-pic-max-w">*!/*/}
                                                {/*<Link to="/singleProduct" className="block1-icon flex-c-m wrap-pic-max-w">*/}
                                                    {/*<img src="images/icons/icon-view.png" alt="ICON" />*/}
                                                {/*</Link>*/}
                                                {/*/!*</a>*!/*/}
                                                {/*/!*<a href="#" className="block1-icon flex-c-m wrap-pic-max-w js-addcart-b1">*!/*/}
                                                {/*<Link to="/shop" className="block1-icon flex-c-m wrap-pic-max-w js-addcart-b1">*/}
                                                    {/*<img src="images/icons/icon-cart.png" alt="ICON" />*/}
                                                {/*</Link>*/}
                                                {/*/!*</a>*!/*/}
                                                {/*/!*<a href="wishlist.html" className="block1-icon flex-c-m wrap-pic-max-w js-addwish-b1">*!/*/}
                                                {/*<Link to="/wishlist" className="block1-icon flex-c-m wrap-pic-max-w js-addwish-b1">*/}
                                                    {/*<img className="icon-addwish-b1" src="images/icons/icon-heart.png" alt="ICON" />*/}
                                                    {/*<img className="icon-addedwish-b1" src="images/icons/icon-heart2.png" alt="ICON" />*/}
                                                {/*</Link>*/}
                                                {/*/!*</a>*!/*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                            {/*/!* - *!/*/}
                            {/*<div className="col-sm-6 col-md-4 col-lg-3 p-b-75 isotope-item fruit-juic-fill">*/}
                                {/*/!* Block1 *!/*/}
                                {/*<div className="block1">*/}
                                    {/*<div className="block1-bg wrap-pic-w bo-all-1 bocl12 hov3 trans-04">*/}
                                        {/*<img src="images/product-06.jpg" alt="IMG" />*/}
                                        {/*<div className="block1-content flex-col-c-m p-b-46">*/}
                                            {/*/!*<a href="product-single.html" className="txt-m-103 cl3 txt-center hov-cl10 trans-04 js-name-b1">*!/*/}
                                            {/*<Link to="/singleProduct" className="txt-m-103 cl3 txt-center hov-cl10 trans-04 js-name-b1">*/}
                                                {/*Beetroot*/}
                                            {/*</Link>*/}
                                            {/*/!*</a>*!/*/}
                                            {/*<span className="block1-content-more txt-m-104 cl9 p-t-21 trans-04">*/}
                        {/*9vnd*/}
                      {/*</span>*/}
                                            {/*<div className="block1-wrap-icon flex-c-m flex-w trans-05">*/}
                                                {/*/!*<a href="product-single.html" className="block1-icon flex-c-m wrap-pic-max-w">*!/*/}
                                                {/*<Link to="/singleProduct" className="block1-icon flex-c-m wrap-pic-max-w">*/}
                                                    {/*<img src="images/icons/icon-view.png" alt="ICON" />*/}
                                                {/*</Link>*/}
                                                {/*/!*</a>*!/*/}
                                                {/*/!*<a href="#" className="block1-icon flex-c-m wrap-pic-max-w js-addcart-b1">*!/*/}
                                                {/*<Link to="#" className="block1-icon flex-c-m wrap-pic-max-w js-addcart-b1">*/}
                                                    {/*<img src="images/icons/icon-cart.png" alt="ICON" />*/}
                                                {/*</Link>*/}
                                                {/*/!*</a>*!/*/}
                                                {/*/!*<a href="wishlist.html" className="block1-icon flex-c-m wrap-pic-max-w js-addwish-b1">*!/*/}
                                                {/*<Link to="/wishlist" className="block1-icon flex-c-m wrap-pic-max-w js-addwish-b1">*/}
                                                    {/*<img className="icon-addwish-b1" src="images/icons/icon-heart.png" alt="ICON" />*/}
                                                    {/*<img className="icon-addedwish-b1" src="images/icons/icon-heart2.png" alt="ICON" />*/}
                                                {/*</Link>*/}
                                                {/*/!*</a>*!/*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            {/*</div>*/}

                        {/*</div>*/}
                    {/*</div>*/}
                {/*</div>*/}
                </div>
                    {/* Deal */}
                <section className="sec-deal bg-img1" style={{backgroundImage: 'url("images/bg-01.jpg")'}}>
                    <div className="flex-w flex-m how-pos2-parent">
                        <img className="how-pos2 respon4 dis-none-xl" src="images/deal1.png" alt="IMG" />
                        <div className="size-w-3 txt-center wrap-pic-max-s w-full-lg">
                            <img src="images/deal.png" alt="IMG" />
                        </div>
                        <div className="size-w-4 p-t-105 p-b-90 p-r-15 respon3">
                            <div className="size-a-1 flex-col-l-m p-b-35">
                                <div className="txt-m-201 cl10 how-pos1-parent m-b-14">
                                    Giá tốt nhất
                                    <div className="how-pos1">
                                        <img src="images/icons/symbol-02.png" alt="IMG" />
                                    </div>
                                </div>
                                <h3 className="txt-l-101 cl3 respon1">
                                    deal chớp nhoáng
                                </h3>
                            </div>
                            <div className="p-b-32">
                                {/*<a href="#" className="txt-m-105 cl6 hov-cl10 trans-04">*/}
                                <Link to="/singleProduct" className="txt-m-105 cl6 hov-cl10 trans-04">
                                    Bắp Cẩm Nam Hội An
                                </Link>
                                {/*</a>*/}
                                <div className="txt-m-105 p-t-15 p-b-22">
                  <span className="cl9">
                    20vnd
                  </span>
                                    <span className="cl10">
                    Chỉ còn 15vnd
                  </span>
                                </div>
                                <p className="txt-s-102 cl9">
                                    Bắp nếp Cẩm Nam ngọt, thơm, mềm dẻo rất đặc trưng hoàn toàn khác biệt với những nơi khác do vị trí nằm ở bãi bồi cồn bãi bốn bề sông nước, khí hậu, thổ nhưỡng quanh năm ôn hòa
                                </p>
                            </div>
                            <div className="flex-w coutdown100 p-b-22" data-year={0} data-month={0} data-date={10} data-hours={23} data-minutes={0} data-seconds={0} data-timezone="auto">
                                <div className="flex-col-c-m how1 p-b-5 m-r-20 m-b-20">
                  <span className="txt-l-102 cl6 days">
                    10
                  </span>
                                    <span className="txt-m-106 cl9">
                    ngày
                  </span>
                                </div>
                                <div className="flex-col-c-m how1 p-b-5 m-r-20 m-b-20">
                  <span className="txt-l-102 cl6 hours">
                    25
                  </span>
                                    <span className="txt-m-106 cl9">
                    giờ
                  </span>
                                </div>
                                <div className="flex-col-c-m how1 p-b-5 m-r-20 m-b-20">
                  <span className="txt-l-102 cl6 minutes">
                    56
                  </span>
                                    <span className="txt-m-106 cl9">
                    phút
                  </span>
                                </div>
                                <div className="flex-col-c-m how1 p-b-5 m-r-20 m-b-20">
                  <span className="txt-l-102 cl6 seconds">
                    42
                  </span>
                                    <span className="txt-m-106 cl9">
                    giây
                  </span>
                                </div>
                            </div>
                            <div className="flex-w">
                                {/*<a href="shop-sidebar-grid.html" className="flex-c-m txt-s-103 cl6 size-a-2 how-btn1 bo-all-1 bocl11 hov-btn1 trans-04">*/}
                                <Link to="/shop" className="flex-c-m txt-s-103 cl6 size-a-2 how-btn1 bo-all-1 bocl11 hov-btn1 trans-04">
                                    Mua ngay
                                    <span className="lnr lnr-chevron-right m-l-7" />
                                    <span className="lnr lnr-chevron-right" />
                                </Link>
                                {/*</a>*/}
                            </div>
                        </div>
                    </div>
                </section>
                {/* Product2 */}
                <section className="sec-product2 bg0 p-t-110 p-b-50">
                    <div className="size-w-20 m-rl-auto p-rl-15">
                        <div className="row">
                            <div className="col-lg-6 p-b-100">
                                <div className="p-rl-15 p-rl-0-xl">
                                    <div className="size-a-1 flex-col-c-m p-b-44">
                                        <div className="txt-center txt-m-202 cl10 how-pos1-parent m-b-8">
                                            SẢN PHẨM ORGANIC ƯA CHUỘNG
                                            <div className="how-pos1 p-b-3">
                                                <img src="images/icons/symbol-02.2.png" alt="IMG" />
                                            </div>
                                        </div>
                                        <h3 className="txt-center">
                      <span className="txt-l-109 cl6">
                        SẢN PHẨM
                      </span>
                                            <span className="txt-l-108 cl3">
                        NỔI BẬT
                      </span>
                                        </h3>
                                    </div>
                                    {/* slide4 */}
                                    <div className="wrap-slick4 bo-all-1 bocl12">
                                        <div className="slick4">

                                                {/*{this.props.products.sort((c,d)=>  d.buy-c.buy).map((item,index) => { return (index<=8)?*/}
                                                    {/*<div key={index} className="item-slick4">*/}
                                                    {/*<div className="block1">*/}
                                                        {/*<div className="block1-bg wrap-pic-w">*/}
                                                            {/*<img src={'https://organic-store.herokuapp.com/api/shop/image/' + item.id} alt="IMG"/>*/}
                                                            {/*<div className="block1-content flex-col-c-m p-b-46">*/}
                                                                {/*/!*<a href="product-single.html" className="txt-m-103 cl3 txt-center hov-cl10 trans-04 js-name-b1">*!/*/}
                                                                {/*<Link to="/singleProduct"*/}
                                                                      {/*className="txt-m-103 cl3 txt-center hov-cl10 trans-04 js-name-b1">*/}
                                                                    {/*{item.name}*/}
                                                                {/*</Link>*/}
                                                                {/*/!*</a>*!/*/}
                                                                {/*<span className="block1-content-more txt-m-104 cl9 p-t-21 trans-04">*/}
                                                                         {/*{item.price}*/}
                                                                     {/*</span>*/}
                                                                {/*<div className="block1-wrap-icon flex-c-m flex-w trans-05">*/}
                                                                    {/*/!*<a href="product-single.html" className="block1-icon flex-c-m wrap-pic-max-w">*!/*/}
                                                                    {/*<Link to="/singleProduct" className="block1-icon flex-c-m wrap-pic-max-w">*/}
                                                                        {/*<img src="images/icons/icon-view.png" alt="ICON"/>*/}
                                                                    {/*</Link>*/}
                                                                    {/*/!*</a>*!/*/}
                                                                    {/*/!*<a href="#" className="block1-icon flex-c-m wrap-pic-max-w js-addcart-b1">*!/*/}
                                                                    {/*<Link to="/cart" className="block1-icon flex-c-m wrap-pic-max-w js-addcart-b1">*/}
                                                                        {/*<img src="images/icons/icon-cart.png" alt="ICON"/>*/}
                                                                    {/*</Link>*/}
                                                                    {/*/!*</a>*!/*/}
                                                                    {/*/!*<a href="wishlist.html" className="block1-icon flex-c-m wrap-pic-max-w js-addwish-b1">*!/*/}
                                                                    {/*<Link to="/wishlist" className="block1-icon flex-c-m wrap-pic-max-w js-addwish-b1">*/}
                                                                        {/*<img className="icon-addwish-b1" src="images/icons/icon-heart.png" alt="ICON"/>*/}
                                                                        {/*<img className="icon-addedwish-b1" src="images/icons/icon-heart2.png" alt="ICON"/>*/}
                                                                    {/*</Link>*/}
                                                                    {/*/!*</a>*!/*/}
                                                                {/*</div>*/}
                                                            {/*</div>*/}
                                                        {/*</div>*/}
                                                    {/*</div>*/}
                                                    {/*</div>:null})}*/}
                                            {ListItemNB}

                                        </div>
                                        <div className="wrap-arrow-slick4 flex-w">
                                            <button className="arrow-slick4 prev-slick4">
                                                <i className="fa fa-angle-left" aria-hidden="true" />
                                            </button>
                                            <button className="arrow-slick4 next-slick4">
                                                <i className="fa fa-angle-right" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 p-b-100">
                                <div className="p-rl-15 p-rl-0-xl">
                                    <div className="size-a-1 flex-col-c-m p-b-44">
                                        <div className="txt-center txt-m-202 cl10 how-pos1-parent m-b-8">
                                            SẢN PHẨM CÁC NÔNG TRẠI
                                            <div className="how-pos1 p-b-3">
                                                <img src="images/icons/symbol-02.2.png" alt="IMG" />
                                            </div>
                                        </div>
                                        <h3 className="txt-center">
                      <span className="txt-l-109 cl6">
                        SẢN PHẨM
                      </span>
                                            <span className="txt-l-108 cl3">
                        SALE OFF
                      </span>
                                        </h3>
                                    </div>
                                    {/* slide4 */}
                                    <div className="wrap-slick4 bo-all-1 bocl12">
                                        <div className="slick4">
                                            <div className="item-slick4">
                                                {/* Block1 */}
                                                <div className="block1">
                                                    <div className="block1-bg wrap-pic-w">
                                                        <img src="images/product-21.jpg" alt="IMG" />
                                                        <div className="block1-content flex-col-c-m p-b-46">
                                                            {/*<a href="product-single.html" className="txt-m-103 cl3 txt-center hov-cl10 trans-04 js-name-b1">*/}
                                                            <Link to="/singleProduct" className="txt-m-103 cl3 txt-center hov-cl10 trans-04 js-name-b1">
                                                                Mango
                                                            </Link>
                                                            {/*</a>*/}
                                                            <span className="block1-content-more txt-m-104 cl9 p-t-21 trans-04">
                                38$
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
                                            <div className="item-slick4">
                                                {/* Block1 */}
                                                <div className="block1">
                                                    <div className="block1-bg wrap-pic-w">
                                                        <img src="images/product-22.jpg" alt="IMG" />
                                                        <div className="block1-content flex-col-c-m p-b-46">
                                                            {/*<a href="product-single.html" className="txt-m-103 cl3 txt-center hov-cl10 trans-04 js-name-b1">*/}
                                                            <Link to="/singleProduct" className="txt-m-103 cl3 txt-center hov-cl10 trans-04 js-name-b1">
                                                                Grape
                                                            </Link>
                                                            {/*</a>*/}
                                                            <span className="block1-content-more txt-m-104 cl9 p-t-21 trans-04">
                                23$
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
                                            <div className="item-slick4">
                                                {/* Block1 */}
                                                <div className="block1">
                                                    <div className="block1-bg wrap-pic-w">
                                                        <img src="images/product-23.jpg" alt="IMG" />
                                                        <div className="block1-content flex-col-c-m p-b-46">
                                                            {/*<a href="product-single.html" className="txt-m-103 cl3 txt-center hov-cl10 trans-04 js-name-b1">*/}
                                                            <Link to="/singleProduct" className="txt-m-103 cl3 txt-center hov-cl10 trans-04 js-name-b1">
                                                                Pomegranate
                                                            </Link>
                                                            {/*</a>*/}
                                                            <span className="block1-content-more txt-m-104 cl9 p-t-21 trans-04">
                                19$
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
                                            <div className="item-slick4">
                                                {/* Block1 */}
                                                <div className="block1">
                                                    <div className="block1-bg wrap-pic-w">
                                                        <img src="images/product-21.jpg" alt="IMG" />
                                                        <div className="block1-content flex-col-c-m p-b-46">
                                                            {/*<a href="product-single.html" className="txt-m-103 cl3 txt-center hov-cl10 trans-04 js-name-b1">*/}
                                                            <Link to="/singleProduct" className="txt-m-103 cl3 txt-center hov-cl10 trans-04 js-name-b1">
                                                                Mango
                                                            </Link>
                                                            {/*</a>*/}
                                                            <span className="block1-content-more txt-m-104 cl9 p-t-21 trans-04">
                                38$
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
                                            <div className="item-slick4">
                                                {/* Block1 */}
                                                <div className="block1">
                                                    <div className="block1-bg wrap-pic-w">
                                                        <img src="images/product-22.jpg" alt="IMG" />
                                                        <div className="block1-content flex-col-c-m p-b-46">
                                                            {/*<a href="product-single.html" className="txt-m-103 cl3 txt-center hov-cl10 trans-04 js-name-b1">*/}
                                                            <Link to="/singleProduct" className="txt-m-103 cl3 txt-center hov-cl10 trans-04 js-name-b1">
                                                                Grape
                                                            </Link>
                                                            {/*</a>*/}
                                                            <span className="block1-content-more txt-m-104 cl9 p-t-21 trans-04">
                                23$
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
                                            <div className="item-slick4">
                                                {/* Block1 */}
                                                <div className="block1">
                                                    <div className="block1-bg wrap-pic-w">
                                                        <img src="images/product-23.jpg" alt="IMG" />
                                                        <div className="block1-content flex-col-c-m p-b-46">
                                                            {/*<a href="product-single.html" className="txt-m-103 cl3 txt-center hov-cl10 trans-04 js-name-b1">*/}
                                                            <Link to="/singleProduct" className="txt-m-103 cl3 txt-center hov-cl10 trans-04 js-name-b1">
                                                                Pomegranate
                                                            </Link>
                                                            {/*</a>*/}
                                                            <span className="block1-content-more txt-m-104 cl9 p-t-21 trans-04">
                                19$
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
                                        </div>
                                        <div className="wrap-arrow-slick4 flex-w">
                                            <button className="arrow-slick4 prev-slick4">
                                                <i className="fa fa-angle-left" aria-hidden="true" />
                                            </button>
                                            <button className="arrow-slick4 next-slick4">
                                                <i className="fa fa-angle-right" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Blog */}
                <section className="sec-blog bg0 p-t-145 p-b-45">
                    <div className="container">
                        <div className="size-a-1 flex-col-c-m p-b-70">
                            <div className="txt-center txt-m-201 cl10 how-pos1-parent m-b-14">
                                Cùng cập nhật với chúng tôi
                                <div className="how-pos1">
                                    <img src="images/icons/symbol-02.png" alt="IMG" />
                                </div>
                            </div>
                            <h3 className="txt-center txt-l-101 cl3 respon1">
                                THÔNG TIN SỨC KHỎE LÀM ĐẸP
                            </h3>
                        </div>
                        <div className="row">
                            <div className="col-md-6 p-b-50">
                                <div className="p-r-15 p-r-0-lg">
                                    {/*<a href="blog-single.html" className="wrap-pic-w hov4">*/}
                                    <Link to="/singleBlog" className="wrap-pic-w hov4">
                                        <img src="images/blog-01.jpg" alt="BLOG" />
                                    </Link>
                                    {/*</a>*/}
                                    <div className="flex-w p-t-30">
                                        <div className="size-a-4 bg10 flex-col-c-m m-r-34">
                      <span className="txt-l-106 cl0 p-b-4">
                        9/10/2018
                      </span>
                                            <span className="txt-m-108 cl0 p-b-5">
                      </span>
                                        </div>
                                        <div className="size-w-9">
                                            <h4 className="p-b-13">
                                                {/*<a href="blog-single.html" className="txt-m-109 cl3 hov-cl10 trans-04">*/}
                                                <Link to="/singleBlog" className="txt-m-109 cl3 hov-cl10 trans-04">
                                                    TÁC DỤNG NGĂN NGỪA BỆNH TỪ TRÁI CÂY MÀ BẠN ÍT BIẾT TỚI
                                                </Link>
                                                {/*</a>*/}
                                            </h4>
                                            <p className="txt-s-101 cl6 p-b-21">
                                                Trong trái cây có vô vàn những tác dụng mà chưa chắc chúng ta đã biết tới ...
                                            </p>
                                            <div className="how-line2 p-l-40">
                                                {/*<a href="blog-single.html" className="txt-s-105 cl9 hov-cl10 trans-04">*/}
                                                <Link to="/singleBlog" className="txt-s-105 cl9 hov-cl10 trans-04">
                                                    Đọc tiếp
                                                </Link>
                                                {/*</a>*/}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 p-b-50">
                                <div className="p-l-15 p-l-0-lg">
                                    {/*<a href="blog-single.html" className="wrap-pic-w hov4">*/}
                                    <Link to="/singleBlog" className="wrap-pic-w hov4">
                                        <img src="images/blog-02.jpg" alt="BLOG" />
                                    </Link>
                                    {/*</a>*/}
                                    <div className="flex-w p-t-30">
                                        <div className="size-a-4 bg10 flex-col-c-m m-r-34">
                      <span className="txt-l-106 cl0 p-b-4">
                        13/10/2018
                      </span>
                                            <span className="txt-m-108 cl0 p-b-5">
                      </span>
                                        </div>
                                        <div className="size-w-9">
                                            <h4 className="p-b-13">
                                                {/*<a href="blog-single.html" className="txt-m-109 cl3 hov-cl10 trans-04">*/}
                                                <Link to="/singleBlog" className="txt-m-109 cl3 hov-cl10 trans-04">
                                                    NƯỚC ÉP TRÁI CÂY GIẢM CÂN
                                                </Link>
                                                {/*</a>*/}
                                            </h4>
                                            <p className="txt-s-101 cl6 p-b-21">
                                                Vitamin dồi dào trong trái cây bổ cung cho cơ thể những vi chất quý giá giúp .
                                            </p>
                                            <div className="how-line2 p-l-40">
                                                {/*<a href="blog-single.html" className="txt-s-105 cl9 hov-cl10 trans-04">*/}
                                                <Link to="/singleBlog" className="txt-s-105 cl9 hov-cl10 trans-04">
                                                    Đọc tiếp
                                                </Link>
                                                {/*</a>*/}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Footer */}
                {/*<Footer/>*/}
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
        listPALL : () => {
            dispatch(listPARequest());
        },
        // listCALL : () => {
        //     dispatch(listCARequest());
        // },
        // listCIDPCALL : (id) => {
        //     dispatch(listCIDPRequest(id));
        // },
        // listPIDCACALL : (id) => {
        //     dispatch(listPIDCARequest(id));
        // },

    }
}
export default connect(mapStateToProps,mapDispatchToProps) (Home)