import React, { Component} from 'react';
import {Link} from 'react-router-dom';
import {delCart, login, logout} from "../actions/index";
import {connect}from "react-redux";
import ReactLoading from 'react-loading';
import addjs from "../jslib/jslib";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state={
      show:'',
    }
  }
  login(){
    // this.setState({
    //   isLogin:true,
    // })
    this.props.login(this.refs.email.value,this.refs.password.value);
  }
  logout(){
    this.props.logout();
  }
  onDeleteCart(product){
    this.props.delCart(product);
  }
  menuHandle(menu){
    if(this.state.show==='' || this.state.show!==menu) {
      this.setState({
        show: menu,
      })
    }else{
      this.setState({
        show:'',
      })
    }
    if(menu==="mobilemenu"){
      const $ = window.$;
      $(this.refs['mobilemenu']).slideToggle()
    }
    if(menu==="mobilemainmenu"){
      const $ = window.$;
      this.setState({
        show: "mobilemenu",
      })
      $(this.refs['mobilemainmenu']).slideToggle()
    }
    if(menu.includes("mobilesubmenu")){
      this.setState({
        show: "mobilemenu",
      })
      const $ = window.$;
      $(this.refs[menu]).slideToggle();
    }
    // try {
    //     $('.wrap-menu-click').each(function(){
    //         var wrapMenuClick = $(this);

    //         $(wrapMenuClick).find('.menu-click').on('click', function(e){
    //             e.stopPropagation();

    //             if($(this).hasClass('showed')) {
    //                 $(wrapMenuClick).find('.menu-click').removeClass('show-menu-click showed');
    //             }
    //             else {
    //                 $(wrapMenuClick).find('.menu-click').removeClass('show-menu-click showed');
    //                 $(this).addClass('show-menu-click showed');
    //             }
    //         });

    //         $(wrapMenuClick).find('.menu-click-child').on('click', function(e){
    //             e.stopPropagation();
    //         });
    //     });

    //     $(window).on('click', function(){
    //         $('.wrap-menu-click').find('.menu-click').removeClass('show-menu-click showed');
    //     })
    // } catch(er) {console.log(er);}

  }
  render() {
    return (
    	  <header className="header-v1">
          {/* Header desktop */}
          <div className="container-menu-desktop">
            <div className="wrap-menu-desktop">
              <nav className="limiter-menu-desktop">
                <div className="left-header">
                  {/* Menu desktop */}
                  <div className="menu-desktop">
                    <ul className="main-menu">
                      <li>
                        <Link onClick={this.menuHandle.bind(this,'direct')} to="/shop/1">SẢN PHẨM</Link>
                        <ul className="sub-menu">
                          <li><a href="shop-sidebar-grid.html">RAU CỦ</a>
                            <ul className="sub-menu">
                              <li><a href="shop-sidebar-grid.html">RAU</a></li>
                              <li><a href="shop-sidebar-grid.html">CỦ</a></li>                      
                            </ul>
                          </li>
                          <li><a href="shop-sidebar-grid.html">TRÁI CÂY</a>
                            <ul className="sub-menu">
                              <li><a href="shop-sidebar-grid.html">ĐẶC SẢN VIỆT NAM</a></li>
                              <li><a href="shop-sidebar-grid.html">TRÁI CÂY NHẬP KHẨU</a></li>                      
                            </ul>
                          </li>
                          <li><a href="shop-sidebar-grid.html">ĐỒ KHÔ</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="blog-grid-01.html">THÔNG TIN TRÁI CÂY</a>
                      </li>
                      <li>
                        <a href="contact-02.html">LIÊN HỆ</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="center-header">
                  {/* Logo desktop */}    
                  <div className="logo">
                    <Link to="/"><img src="images/icons/logochau.png" alt="IMG-LOGO" /></Link>
                  </div>
                </div>
                <div className="right-header">
                  {/* Icon header */}
                  <div className="wrap-icon-header flex-w flex-r-m h-full wrap-menu-click p-t-8">
                    {/*Search */}
                    <div className="h-full flex-m">
                      <div className="icon-header-item flex-c-m trans-04 js-show-modal-search">
                        <img onClick={this.menuHandle.bind(this,'search')} src="images/icons/icon-search.png" alt="SEARCH" />
                      </div>
                    </div>
                    {/*...*/}
                    {this.props.account===null?(
                    <div className={this.state.show==='login'?('show-menu-click showed wrap-cart-header h-full flex-m m-l-10 menu-click'):('wrap-cart-header h-full flex-m m-l-10 menu-click')}>
                      <div id="icon-login" className="icon-header-item flex-c-m trans-04">
                        <img onClick={this.menuHandle.bind(this,'login')} src="images/icons/icon-login.png" alt="login" />
                      </div>
                      <div id="form-login" className="cart-header menu-click-child trans-04">
                        <form action="javascript:void(0)" onSubmit={this.login.bind(this)}>
                          <div className="p-b-24">
                            <input className="txt-s-120 cl3 size-a-21 bo-all-1 bocl15 p-rl-15 focus1" type="text" ref="email" placeholder="email" />
                          </div>
                          <div className="p-b-24">
                            <input className="txt-s-120 cl3 size-a-21 bo-all-1 bocl15 p-rl-15 focus1" type="password" ref="password" placeholder="Mật khẩu" />
                          </div>
                          {/*{this.props.pending?(<ReactLoading type={"bubbles"} color={"green"} />):null}*/}
                          <div className="flex-w flex-m p-t-15 p-b-10">
                            <input type="submit" className="flex-c-m txt-s-105 cl0 bg10 size-a-39 hov-btn2 trans-04 p-rl-10 m-r-18" />
                            <div className="flex-w flex-m p-tb-8">
                              <input id="check-creatacc" className="size-a-35 m-r-10" type="checkbox" name="creatacc" />
                              <label htmlFor="check-creatacc" className="txt-s-101 cl9">
                                Ghi nhớ
                              </label>
                            </div>
                          </div>
                          <a href="account-lost-pass.html" className="txt-s-101 cl9 hov-cl10 trans-04">
                            Quên mật khẩu?
                          </a>
                        </form>
                        <a href="account.html" className="txt-s-101 cl9 hov-cl10 trans-04">
                          Đăng ký
                        </a>
                        <div className="social">
                          <div className="social-inner">
                            <button className="fa fa-2x fa-google btn btn-danger" href="#" />
                            <button className="fa fa-2x fa-twitter btn btn-info" href="#" />
                            {/*<button className="fa fa-2x fa-facebook btn btn-primary"/>*/}

                          </div>
                        </div>
                      </div>
                    </div>):(
                    <div className={this.state.show==='profile'?('show-menu-click showed wrap-cart-header h-full flex-m m-l-10 menu-click'):('wrap-cart-header h-full flex-m m-l-10 menu-click')}>
                      <div className="icon-header-item flex-c-m trans-04">
                        <img onClick={this.menuHandle.bind(this,'profile')} src="images/icons/icon-user.png" alt="user" />
                      </div>  
                      <div className="cart-header menu-click-child trans-04">
                        <Link onClick={this.menuHandle.bind(this,'direct')} to="/myaccount" className="txt-s-101 cl9 hov-cl10 trans-04">Chi Tiết</Link><br />
                        <Link onClick={this.menuHandle.bind(this,'direct')} to="/wishlist" className="txt-s-101 cl9 hov-cl10 trans-04">WishList</Link><br />
                        <button href="javascript:void(0)" onClick={this.logout.bind(this)} className="txt-s-101 cl9 hov-cl10 trans-04">Đăng xuất</button>
                      </div>
                    </div>)}
                    {/*....*/}
                    <div className={this.state.show==='cart'?('show-menu-click showed wrap-cart-header h-full flex-m m-l-10 menu-click'):('wrap-cart-header h-full flex-m m-l-10 menu-click')}>
                      <div className="icon-header-item flex-c-m trans-04 icon-header-noti" data-notify={this.props.cart.length}>
                        <img onClick={this.menuHandle.bind(this,'cart')} src="images/icons/icon-cart-2.png" alt="CART" />
                      </div>
                      <div className="cart-header menu-click-child trans-04">
                        <div className="bo-b-1 bocl15">
                          <div className="size-h-2 js-pscroll m-r--15 p-r-15">
                            {/* cart header item */}
                            {this.props.cart.length != 0 ? this.props.cart.map((item, index) =>
                                <div key={index} className="flex-w flex-str m-b-25">
                                  <div className="size-w-15 flex-w flex-t">
                                    <a href="product-single.html"
                                       className="wrap-pic-w bo-all-1 bocl12 size-w-16 hov3 trans-04 m-r-14">
                                      <img
                                          src={'https://organic-store.herokuapp.com/api/shop/image/' + item.id}
                                          alt="PRODUCT"/>
                                    </a>
                                    <div className="size-w-17 flex-col-l">
                                      <a href="javascript:void(0)"
                                         className="txt-s-108 cl3 hov-cl10 trans-04">
                                        {item.name}
                                      </a>
                                      <span className="txt-s-101 cl9">
                                        {item.price}vnd
                                      </span>
                                      <span className="txt-s-109 cl12">
                                        x{item.quantity}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="size-w-14 flex-b">
                                    <button className="lh-10"
                                            onClick={this.onDeleteCart.bind(this, item)}>
                                      <img src="images/icons/icon-close.png"
                                           alt="CLOSE"/>
                                    </button>
                                  </div>
                                </div>
                            ) : (<img src="images/empty-cart.jpg"
                                      alt="PRODUCT"/>)}
                          </div>
                        </div>
                        {this.props.cart.length!==0?(
                        <div>
                          <div className="flex-w flex-sb-m p-t-22 p-b-12">
                            <span className="txt-m-103 cl3 p-r-20">
                              Tổng tiền
                            </span>
                            <span className="txt-m-111 cl6">
                               {this.props.sum}vnd
                            </span>
                          </div>
                          <div className="flex-w flex-sb-m p-b-31">
                            <span className="txt-m-103 cl3 p-r-20">
                              Thành tiền
                            </span>
                            <span className="txt-m-111 cl10">
                              {this.props.sum}vnd
                            </span>
                          </div>
                          <Link onClick={this.menuHandle.bind(this,'direct')} to="/cart" className="flex-c-m size-a-8 bg10 txt-s-105 cl13 hov-btn2 trans-04">
                            Chi tiết
                          </Link>
                        </div>):null}
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
              {/*Edit Search*/}
              <div style={this.state.show==='search'?{display:'block'}:{display:'none'}}  className="container-search-header" id="desktop-search">
                <form className="wrap-search-header flex-w">
                  <button className="flex-c-m trans-04">
                    <span className="lnr lnr-magnifier" />
                  </button>
                  <input className="plh1" type="text" name="search" placeholder="Search tất cả" />
                </form>
              </div>
              {/*Edit Search*/}
            </div>  
          </div>
          {/* Header Mobile */}
          <div className="wrap-header-mobile">
            {/* Logo moblie */}   
            <div className="logo-mobile">
              <a href="home.html"><img src="images/icons/logochau.png" alt="IMG-LOGO" /></a>
            </div>
            {/* Icon header */}
            <div  className="wrap-icon-header flex-w flex-r-m h-full wrap-menu-click m-r-15">
              <div className="h-full flex-m">
                <div className="icon-header-item flex-c-m trans-04 js-show-modal-search" id="m-s">
                  <img onClick={this.menuHandle.bind(this,'mobilesearch')} src="images/icons/icon-search.png" alt="SEARCH" />
                </div>
              </div>
              <div className={this.state.show==='mobilecart'?('show-menu-click showed wrap-cart-header h-full flex-m m-l-10 menu-click'):('wrap-cart-header h-full flex-m m-l-10 menu-click')}>
                <div className="icon-header-item flex-c-m trans-04 icon-header-noti" data-notify={2}>
                  <img onClick={this.menuHandle.bind(this,'mobilecart')} src="images/icons/icon-cart-2.png" alt="CART" />
                </div>
                <div className="cart-header menu-click-child trans-04">
                  <div className="bo-b-1 bocl15">
                    {/* cart header item */}
                    <div className="flex-w flex-str m-b-25">
                      <div className="size-w-15 flex-w flex-t">
                        <a href="product-single.html" className="wrap-pic-w bo-all-1 bocl12 size-w-16 hov3 trans-04 m-r-14">
                          <img src="images/item-cart-01.jpg" alt="PRODUCT" />
                        </a>
                        <div className="size-w-17 flex-col-l">
                          <span className="txt-s-101 cl9">
                            18vnd
                          </span>
                          <span className="txt-s-109 cl12">
                            x2
                          </span>
                        </div>
                      </div>
                      <div className="size-w-14 flex-b">
                        <button className="lh-10">
                          <img src="images/icons/icon-close.png" alt="CLOSE" />
                        </button>
                      </div>
                    </div>
                    {/* cart header item */}
                    <div className="flex-w flex-str m-b-25">
                      <div className="size-w-15 flex-w flex-t">
                        <a href="product-single.html" className="wrap-pic-w bo-all-1 bocl12 size-w-16 hov3 trans-04 m-r-14">
                          <img src="images/item-cart-02.jpg" alt="PRODUCT" />
                        </a>
                        <div className="size-w-17 flex-col-l">
                          <a href="product-single.html" className="txt-s-108 cl3 hov-cl10 trans-04">
                            Asparagus
                          </a>
                          <span className="txt-s-101 cl9">
                            12vnd
                          </span>
                          <span className="txt-s-109 cl12">
                            x1
                          </span>
                        </div>
                      </div>
                      <div className="size-w-14 flex-b">
                        <button className="lh-10">
                          <img src="images/icons/icon-close.png" alt="CLOSE" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex-w flex-sb-m p-t-22 p-b-12">
                    <span className="txt-m-103 cl3 p-r-20">
                      Tổng tiền
                    </span>
                    <span className="txt-m-111 cl6">
                      48vnd
                    </span>
                  </div>
                  <div className="flex-w flex-sb-m p-b-31">
                    <span className="txt-m-103 cl3 p-r-20">
                      Thành tiền
                    </span>
                    <span className="txt-m-111 cl10">
                      48vnd
                    </span>
                  </div>
                  <a href="shop-cart.html" className="flex-c-m size-a-8 bg10 txt-s-105 cl13 hov-btn2 trans-04">
                    Chi tiết
                  </a>  
                </div>
              </div>
            </div>
            {/* Button show menu */}
            <div onClick={this.menuHandle.bind(this,'mobilemenu')} className={this.state.show.includes("menu")?("is-active btn-show-menu-mobile hamburger hamburger--squeeze"):("btn-show-menu-mobile hamburger hamburger--squeeze")}>
              <span className="hamburger-box">
                <span className="hamburger-inner" />
              </span>
            </div>
          </div>
          {/*Edit Search*/}
          <div style={this.state.show==='mobilesearch'?{display:'block'}:{display:'none'}}>
            <form className="wrap-search-header flex-w">
              <button className="flex-c-m trans-04">
                <span className="lnr lnr-magnifier" />
              </button>
              <input className="plh1 form-control" type="text" name="search" placeholder="Search tất cả" />
            </form>
          </div>
          {/*Edit Search*/}
          {/* Menu Mobile */}
          <div ref="mobilemenu" className="menu-mobile">
            <ul  className="main-menu-m">
              <li>
                <a href="shop-sidebar-grid.html">SẢN PHẨM</a>
                <ul ref="mobilemainmenu" className="sub-menu-m">
                  <li>
                    <a href="shop-sidebar-grid.html">
                      RAU CỦ
                    </a>
                    <ul ref="mobilesubmenu1" className="sub-sub-menu-m">
                      <li><a href="shop-sidebar-grid.html">RAU</a></li>
                      <li><a href="shop-sidebar-grid.html">CỦ</a></li>  
                    </ul>
                    <span onClick={this.menuHandle.bind(this,'mobilesubmenu1')} className="turn-arrow-main-menu-m arrow-sub-menu-m">
                      <i className="fa fa-angle-right" aria-hidden="true" />
                    </span>
                  </li>
                  <li>
                    <a href="shop-sidebar-grid.html">TRÁI CÂY</a>
                    <ul ref="mobilesubmenu2" className="sub-sub-menu-m">
                      <li><a href="shop-sidebar-grid.html">ĐẶC SẢN VIỆT NAM</a></li>
                      <li><a href="shop-sidebar-grid.html">TRÁI CÂY NHẬP KHẨU</a></li>                      
                    </ul>
                    <span onClick={this.menuHandle.bind(this,'mobilesubmenu2')} className="turn-arrow-main-menu-m arrow-sub-menu-m">
                      <i className="fa fa-angle-right" aria-hidden="true" />
                    </span>
                  </li>
                  <li><a href="shop-sidebar-grid.html">ĐỒ KHÔ</a></li>
                </ul>
                <span onClick={this.menuHandle.bind(this,'mobilemainmenu')} className="turn-arrow-main-menu-m arrow-main-menu-m">
                  <i className="fa fa-angle-right" aria-hidden="true" />
                </span>
              </li>
              <li>
                <a href="blog-grid-01.html">THÔNG TIN TRÁI CÂY</a>
              </li>
              <li>
                <a href="contact-02.html">LIÊN HỆ</a>
              </li>
            </ul>
          </div>
          {/* Modal Search */}
          {/*<div class="modal-search-header flex-c-m trans-04 js-hide-modal-search">
      <button class="flex-c-m btn-hide-modal-search trans-04 js-hide-modal-search">
        <span class="lnr lnr-cross"></span>
      </button>
      
      <!--Edit Search*/}
          {/*<div className="container-search-header" id="container-search-header">*/}
            {/*<form className="wrap-search-header flex-w">*/}
              {/*<button className="flex-c-m trans-04">*/}
                {/*<span className="lnr lnr-magnifier" />*/}
              {/*</button>*/}
              {/*<input className="plh1" type="text" name="search" placeholder="Search tất cả" />*/}
            {/*</form>*/}
          {/*</div>*/}
          {/*Edit Search*/}
          {/* </div> */}
        </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart : state.cart.cart,
    sum : state.cart.sum,
    account: state.login.account,
    pending:state.login.pending,
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return{
    delCart : (product) => {
      dispatch(delCart(product));
    },
    login : (email,password) => {
      dispatch(login(email,password));
    },
    logout : () => {
      dispatch(logout());
    },
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header)
