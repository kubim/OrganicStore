import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import addjs from '../jslib/jslib';
class SingleProduct extends Component {
  componentDidMount(){
    addjs();
  }
  render() {
    return (
      <div>
            <section className="how-overlay2 bg-img1" style={{backgroundImage: 'url(images/post.jpg)'}}>
        <div className="container">
          <div className="txt-center p-t-160 p-b-165">
            <h2 className="txt-l-101 cl0 txt-center p-b-14 respon1">
              shop
            </h2>
            <span className="txt-m-201 cl0 flex-c-m flex-w">
              <a href="home.htm" className="txt-m-201 cl0 hov-cl10 trans-04 m-r-6">
                Home
              </a>
              <a href="shop-sidebar-grid.html" className="txt-m-201 cl0 hov-cl10 trans-04 m-r-6">
                / Sản phẩm
              </a>
              <a href="#" className="txt-m-201 cl0 hov-cl10 trans-04 m-r-6">
                / Rau củ
              </a>
              <span>
                / Sản phẩm
              </span>
            </span>
          </div>
        </div>
      </section>
        <section className="sec-product-detail bg0 p-t-105 p-b-70">
          <div className="container">
            <div className="row">
              <div className="col-md-7 col-lg-6">
                <div className="m-r--30 m-r-0-lg">
                  {/* Slide 100 */}
                  <div id="slide100-01">
                    <div className="wrap-main-pic-100 bo-all-1 bocl12 pos-relative">
                      <div className="main-frame">
                        <div className="wrap-main-pic">
                          <div className="main-pic">
                            <img src="images/pro-detail-01.jpg" alt="IMG-SLIDE" />
                          </div>
                        </div>
                      </div>
                      <div className="wrap-arrow-slide-100 s-full ab-t-l trans-04">
                        <span className="my-arrow back prev-slide-100"><i className="fa fa-angle-left m-r-1" aria-hidden="true" /></span>
                        <span className="my-arrow next next-slide-100"><i className="fa fa-angle-right m-l-1" aria-hidden="true" /></span>
                      </div>
                    </div>
                    <div className="wrap-thumb-100 flex-w flex-sb p-t-30">
                      <div className="thumb-100">
                        <div className="sub-frame sub-1">
                          <div className="wrap-main-pic">
                            <div className="main-pic">
                              <img src="images/pro-detail-thumb-02.jpg" alt="IMG-SLIDE" />
                            </div>
                          </div>
                          <div className="btn-sub-frame btn-1 bo-all-1 bocl12 hov8 trans-04" />
                        </div>
                      </div>
                      <div className="thumb-100">
                        <div className="sub-frame sub-2">
                          <div className="wrap-main-pic">
                            <div className="main-pic">
                              <img src="images/pro-detail-thumb-03.jpg" alt="IMG-SLIDE" />
                            </div>
                          </div>
                          <div className="btn-sub-frame btn-2 bo-all-1 bocl12 hov8 trans-04" />
                        </div>
                      </div>
                      <div className="thumb-100">
                        <div className="sub-frame sub-3">
                          <div className="wrap-main-pic">
                            <div className="main-pic">
                              <img src="images/pro-detail-thumb-04.jpg" alt="IMG-SLIDE" />
                            </div>
                          </div>
                          <div className="btn-sub-frame btn-3 bo-all-1 bocl12 hov8 trans-04" />
                        </div>
                      </div>
                    </div>  
                  </div>
                </div>
              </div>
              <div className="col-md-5 col-lg-6">
                <div className="p-l-70 p-t-35 p-l-0-lg">
                  <h4 className="js-name1 txt-l-104 cl3 p-b-16">
                    Cà chua
                  </h4>
                  <span className="txt-m-117 cl9">
                    19000vnd
                  </span>
                  <div className="flex-w flex-m p-t-30 p-b-27">
                    <span className="fs-16 cl11 lh-15 txt-center m-r-15">
                      <i className="fa fa-star m-rl-1" />
                      <i className="fa fa-star m-rl-1" />
                      <i className="fa fa-star m-rl-1" />
                      <i className="fa fa-star m-rl-1" />
                      <i className="fa fa-star m-rl-1" />
                    </span>
                    <span className="txt-s-115 cl6 p-b-3">
                      (1 review)
                    </span>
                  </div>
                  <p className="txt-s-101 cl6">
                  </p>
                  <div className="flex-w flex-m p-t-55 p-b-30">
                    <div className="wrap-num-product flex-w flex-m bg12 p-rl-10 m-r-30 m-b-30">
                      <div className="btn-num-product-down flex-c-m fs-29" />
                      <input className="txt-m-102 cl6 txt-center num-product" type="number" name="num-product" defaultValue={1} />
                      <div className="btn-num-product-up flex-c-m fs-16" />
                    </div>
                    <button className="flex-c-m txt-s-103 cl0 bg10 size-a-2 hov-btn2 trans-04 m-b-30 js-addcart1">
                      Thêm vào giỏ
                    </button>
                  </div>
                  <div className="txt-s-107 p-b-6">
                    <span className="cl6">
                      Danh mục:
                    </span>
                    <span className="cl9">
                      Trái cây nhập
                    </span>
                  </div>
                  <div className="txt-s-107 p-b-6">
                    <span className="cl6">
                      Tags:
                    </span>
                    <a href="#" className="txt-s-107 cl9 hov-cl10 trans-04">
                      Healthy, Khỏe mạnh
                    </a>
                    <a href="#" className="txt-s-107 cl9 hov-cl10 trans-04">
                      Organic
                    </a>
                  </div>
                  <div className="txt-s-107 p-b-6">
                    <span className="cl6">
                      Giá tiền:
                    </span>
                    <span className="cl9">
                      15 000vnd
                    </span>
                  </div>
                  <div className="txt-s-107 p-b-6">
                    <span className="cl6">
                      Trọng lượng:
                    </span>
                    <span className="cl9">
                      0.5 kg
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Tab01 */}
            <div className="tab02 p-t-80">
              {/* Nav tabs */}
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active" data-toggle="tab" href="#description" role="tab">Mô tả</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="tab" href="#info" role="tab">chi tiết</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="tab" href="#reviews" role="tab">Reviews (01)</a>
                </li>
              </ul>
              {/* Tab panes */}
              <div className="tab-content">
                {/* - */}
                <div className="tab-pane fade show active" id="description" role="tabpanel">
                  <div className="p-t-30">
                    <p className="txt-s-112 cl9">
                      Sản phẩm sạch
                    </p>
                  </div>
                </div>
                {/* - */}
                <div className="tab-pane fade" id="info" role="tabpanel">
                  <ul className="p-t-21">
                    <li className="txt-s-101 flex-w how-bor2 p-tb-14">
                      <span className="cl6 size-w-54">
                        Thương hiệu
                      </span>
                      <span className="cl9 size-w-55">
                        Hiếu farm
                      </span>
                    </li>
                    <li className="txt-s-101 flex-w how-bor2 p-tb-14">
                      <span className="cl6 size-w-54">
                        Nguồn gốc
                      </span>
                      <span className="cl9 size-w-55">
                        Nhập khẩu Mỹ
                      </span>
                    </li>
                    <li className="txt-s-101 flex-w how-bor2 p-tb-14">
                      <span className="cl6 size-w-54">
                        Loại
                      </span>
                      <span className="cl9 size-w-55">
                        Oraganic
                      </span>
                    </li>
                  </ul>
                </div>
                {/* - */}
                <div className="tab-pane fade" id="reviews" role="tabpanel">
                  <div className="p-t-36">
                    <h5 className="txt-m-102 cl3 p-b-36">
                      1 review 
                    </h5>
                    <div className="flex-w flex-sb-t bo-b-1 bocl15 p-b-37">
                      <div className="wrap-pic-w size-w-56">
                        <img src="images/avatar-03.jpg" alt="AVATAR" />
                      </div>
                      <div className="size-w-57 p-t-2">
                        <div className="flex-w flex-sb-m p-b-8">
                          <div className="flex-w flex-b m-r-20 p-tb-5">
                            <span className="txt-m-103 cl6 m-r-20">
                              bim
                            </span>
                            <span className="txt-s-120 cl9">
                              ( Đà Nẵng – 14/10/2018 ) 
                            </span>
                          </div>
                          <span className="fs-16 cl11 lh-15 txt-center m-r-15 p-tb-5">
                            <i className="fa fa-star m-rl-1" />
                            <i className="fa fa-star m-rl-1" />
                            <i className="fa fa-star m-rl-1" />
                            <i className="fa fa-star m-rl-1" />
                            <i className="fa fa-star m-rl-1" />
                          </span>
                        </div>
                        <p className="txt-s-101 cl6">
                          Sản phẩm tươi, đóng gói cẩn thận
                        </p>
                      </div>
                    </div>
                    {/* Add review */}
                    <form className="w-full p-t-42">
                      <h5 className="txt-m-102 cl3 p-b-20">
                        Bình luận
                      </h5>
                      <p className="txt-s-101 cl6 p-b-10">
                        vui lòng điền các trường *
                      </p>
                      <div className="flex-w flex-m p-b-3">
                        <span className="txt-s-101 cl6 p-b-5 m-r-10">
                          Rating
                        </span>
                        <span className="wrap-rating fs-16 cl11 pointer">
                          <i className="item-rating pointer fa fa-star-o m-rl-1" />
                          <i className="item-rating pointer fa fa-star-o m-rl-1" />
                          <i className="item-rating pointer fa fa-star-o m-rl-1" />
                          <i className="item-rating pointer fa fa-star-o m-rl-1" />
                          <i className="item-rating pointer fa fa-star-o m-rl-1" />
                          <input className="dis-none" type="number" name="rating" />
                        </span>
                      </div>
                      <span className="txt-s-101 cl6">
                        review của bạn *
                      </span>
                      <div className="row p-t-12">
                        <div className="col-sm-6 p-b-30">
                          <input className="txt-s-101 cl3 plh1 size-a-25 bo-all-1 bocl11 focus1 p-rl-20" type="text" name="name" placeholder="Tên *" />
                        </div>
                        <div className="col-sm-6 p-b-30">
                          <input className="txt-s-101 cl3 plh1 size-a-25 bo-all-1 bocl11 focus1 p-rl-20" type="text" name="email" placeholder="Email *" />
                        </div>
                        <div className="col-12 p-b-30">
                          <textarea className="txt-s-101 cl3 plh1 size-a-26 bo-all-1 bocl11 focus1 p-rl-20 p-tb-10" name="review" placeholder="Review của bạn *" defaultValue={""} />
                        </div>
                      </div>
                      <div className="flex-r">
                        <button className="flex-c-m txt-s-103 cl0 bg10 size-a-27 hov-btn2 trans-04">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Related product */}
        <section className="sec-related bg0 p-b-85">
          <div className="container">
            {/* slide9 */}
            <div className="wrap-slick9">
              <div className="flex-w flex-sb-m p-b-33 p-rl-15">
                <h3 className="txt-l-112 cl3 m-r-20 respon1 p-tb-15">
                  SẢn PHẨM LIÊN QUAN
                </h3>
                <div className="wrap-arrow-slick9 flex-w m-t-6" />
              </div>
              <div className="slick9">
                {/* - */}
                <div className="item-slick9 p-all-15">
                  {/* Block1 */}
                  <div className="block1">
                    <div className="block1-bg wrap-pic-w bo-all-1 bocl12 hov3 trans-04">
                      <img src="images/product-02.jpg" alt="IMG" />
                      <div className="block1-content flex-col-c-m p-b-46">
                        <a href="product-single.html" className="txt-m-103 cl3 txt-center hov-cl10 trans-04 js-name-b1">
                          Strawberry
                        </a>
                        <span className="block1-content-more txt-m-104 cl9 p-t-21 trans-04">
                          23000vnd
                        </span>
                        <div className="block1-wrap-icon flex-c-m flex-w trans-05">
                          <a href="product-single.html" className="block1-icon flex-c-m wrap-pic-max-w">
                            <img src="images/icons/icon-view.png" alt="ICON" />
                          </a>
                          <a href="#" className="block1-icon flex-c-m wrap-pic-max-w js-addcart-b1">
                            <img src="images/icons/icon-cart.png" alt="ICON" />
                          </a>
                          <a href="wishlist.html" className="block1-icon flex-c-m wrap-pic-max-w js-addwish-b1">
                            <img className="icon-addwish-b1" src="images/icons/icon-heart.png" alt="ICON" />
                            <img className="icon-addedwish-b1" src="images/icons/icon-heart2.png" alt="ICON" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* - */}
                <div className="item-slick9 p-all-15">
                  {/* Block1 */}
                  <div className="block1">
                    <div className="block1-bg wrap-pic-w bo-all-1 bocl12 hov3 trans-04">
                      <img src="images/product-03.jpg" alt="IMG" />
                      <div className="block1-content flex-col-c-m p-b-46">
                        <a href="product-single.html" className="txt-m-103 cl3 txt-center hov-cl10 trans-04 js-name-b1">
                          Cà chua
                        </a>
                        <span className="block1-content-more txt-m-104 cl9 p-t-21 trans-04">
                          19000vnd
                        </span>
                        <div className="block1-wrap-icon flex-c-m flex-w trans-05">
                          <a href="product-single.html" className="block1-icon flex-c-m wrap-pic-max-w">
                            <img src="images/icons/icon-view.png" alt="ICON" />
                          </a>
                          <a href="#" className="block1-icon flex-c-m wrap-pic-max-w js-addcart-b1">
                            <img src="images/icons/icon-cart.png" alt="ICON" />
                          </a>
                          <a href="wishlist.html" className="block1-icon flex-c-m wrap-pic-max-w js-addwish-b1">
                            <img className="icon-addwish-b1" src="images/icons/icon-heart.png" alt="ICON" />
                            <img className="icon-addedwish-b1" src="images/icons/icon-heart2.png" alt="ICON" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* - */}
                <div className="item-slick9 p-all-15">
                  {/* Block1 */}
                  <div className="block1">
                    <div className="block1-bg wrap-pic-w bo-all-1 bocl12 hov3 trans-04">
                      <img src="images/product-04.jpg" alt="IMG" />
                      <div className="block1-content flex-col-c-m p-b-46">
                        <a href="product-single.html" className="txt-m-103 cl3 txt-center hov-cl10 trans-04 js-name-b1">
                          Táo
                        </a>
                        <span className="block1-content-more txt-m-104 cl9 p-t-21 trans-04">
                          22000vnd
                        </span>
                        <div className="block1-wrap-icon flex-c-m flex-w trans-05">
                          <a href="product-single.html" className="block1-icon flex-c-m wrap-pic-max-w">
                            <img src="images/icons/icon-view.png" alt="ICON" />
                          </a>
                          <a href="#" className="block1-icon flex-c-m wrap-pic-max-w js-addcart-b1">
                            <img src="images/icons/icon-cart.png" alt="ICON" />
                          </a>
                          <a href="wishlist.html" className="block1-icon flex-c-m wrap-pic-max-w js-addwish-b1">
                            <img className="icon-addwish-b1" src="images/icons/icon-heart.png" alt="ICON" />
                            <img className="icon-addedwish-b1" src="images/icons/icon-heart2.png" alt="ICON" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* - */}
                <div className="item-slick9 p-all-15">
                  {/* Block1 */}
                  <div className="block1">
                    <div className="block1-bg wrap-pic-w bo-all-1 bocl12 hov3 trans-04">
                      <img src="images/product-05.jpg" alt="IMG" />
                      <div className="block1-content flex-col-c-m p-b-46">
                        <a href="product-single.html" className="txt-m-103 cl3 txt-center hov-cl10 trans-04 js-name-b1">
                          Hạt dẻ
                        </a>
                        <span className="block1-content-more txt-m-104 cl9 p-t-21 trans-04">
                          120000vnd
                        </span>
                        <div className="block1-wrap-icon flex-c-m flex-w trans-05">
                          <a href="product-single.html" className="block1-icon flex-c-m wrap-pic-max-w">
                            <img src="images/icons/icon-view.png" alt="ICON" />
                          </a>
                          <a href="#" className="block1-icon flex-c-m wrap-pic-max-w js-addcart-b1">
                            <img src="images/icons/icon-cart.png" alt="ICON" />
                          </a>
                          <a href="wishlist.html" className="block1-icon flex-c-m wrap-pic-max-w js-addwish-b1">
                            <img className="icon-addwish-b1" src="images/icons/icon-heart.png" alt="ICON" />
                            <img className="icon-addedwish-b1" src="images/icons/icon-heart2.png" alt="ICON" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* - */}
                <div className="item-slick9 p-all-15">
                  {/* Block1 */}
                  <div className="block1">
                    <div className="block1-bg wrap-pic-w bo-all-1 bocl12 hov3 trans-04">
                      <img src="images/product-06.jpg" alt="IMG" />
                      <div className="block1-content flex-col-c-m p-b-46">
                        <a href="product-single.html" className="txt-m-103 cl3 txt-center hov-cl10 trans-04 js-name-b1">
                          Nho
                        </a>
                        <span className="block1-content-more txt-m-104 cl9 p-t-21 trans-04">
                          90000vnd
                        </span>
                        <div className="block1-wrap-icon flex-c-m flex-w trans-05">
                          <a href="product-single.html" className="block1-icon flex-c-m wrap-pic-max-w">
                            <img src="images/icons/icon-view.png" alt="ICON" />
                          </a>
                          <a href="#" className="block1-icon flex-c-m wrap-pic-max-w js-addcart-b1">
                            <img src="images/icons/icon-cart.png" alt="ICON" />
                          </a>
                          <a href="wishlist.html" className="block1-icon flex-c-m wrap-pic-max-w js-addwish-b1">
                            <img className="icon-addwish-b1" src="images/icons/icon-heart.png" alt="ICON" />
                            <img className="icon-addedwish-b1" src="images/icons/icon-heart2.png" alt="ICON" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*  */}
                <div className="item-slick9 p-all-15">
                  {/* Block1 */}
                  <div className="block1">
                    <div className="block1-bg wrap-pic-w bo-all-1 bocl12 hov3 trans-04">
                      <img src="images/product-07.jpg" alt="IMG" />
                      <div className="block1-content flex-col-c-m p-b-46">
                        <a href="product-single.html" className="txt-m-103 cl3 txt-center hov-cl10 trans-04 js-name-b1">
                          Bắp cải
                        </a>
                        <span className="block1-content-more txt-m-104 cl9 p-t-21 trans-04">
                          15000vnd
                        </span>
                        <div className="block1-wrap-icon flex-c-m flex-w trans-05">
                          <a href="product-single.html" className="block1-icon flex-c-m wrap-pic-max-w">
                            <img src="images/icons/icon-view.png" alt="ICON" />
                          </a>
                          <a href="#" className="block1-icon flex-c-m wrap-pic-max-w js-addcart-b1">
                            <img src="images/icons/icon-cart.png" alt="ICON" />
                          </a>
                          <a href="wishlist.html" className="block1-icon flex-c-m wrap-pic-max-w js-addwish-b1">
                            <img className="icon-addwish-b1" src="images/icons/icon-heart.png" alt="ICON" />
                            <img className="icon-addedwish-b1" src="images/icons/icon-heart2.png" alt="ICON" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* - */}
                <div className="item-slick9 p-all-15">
                  {/* Block1 */}
                  <div className="block1">
                    <div className="block1-bg wrap-pic-w bo-all-1 bocl12 hov3 trans-04">
                      <img src="images/product-08.jpg" alt="IMG" />
                      <div className="block1-content flex-col-c-m p-b-46">
                        <a href="product-single.html" className="txt-m-103 cl3 txt-center hov-cl10 trans-04 js-name-b1">
                          Cà rốt
                        </a>
                        <span className="block1-content-more txt-m-104 cl9 p-t-21 trans-04">
                          38000vnd
                        </span>
                        <div className="block1-wrap-icon flex-c-m flex-w trans-05">
                          <a href="product-single.html" className="block1-icon flex-c-m wrap-pic-max-w">
                            <img src="images/icons/icon-view.png" alt="ICON" />
                          </a>
                          <a href="#" className="block1-icon flex-c-m wrap-pic-max-w js-addcart-b1">
                            <img src="images/icons/icon-cart.png" alt="ICON" />
                          </a>
                          <a href="wishlist.html" className="block1-icon flex-c-m wrap-pic-max-w js-addwish-b1">
                            <img className="icon-addwish-b1" src="images/icons/icon-heart.png" alt="ICON" />
                            <img className="icon-addedwish-b1" src="images/icons/icon-heart2.png" alt="ICON" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* - */}
                <div className="item-slick9 p-all-15">
                  {/* Block1 */}
                  <div className="block1">
                    <div className="block1-bg wrap-pic-w bo-all-1 bocl12 hov3 trans-04">
                      <img src="images/product-01.jpg" alt="IMG" />
                      <div className="block1-content flex-col-c-m p-b-46">
                        <a href="product-single.html" className="txt-m-103 cl3 txt-center hov-cl10 trans-04 js-name-b1">
                          Táo đỏ
                        </a>
                        <span className="block1-content-more txt-m-104 cl9 p-t-21 trans-04">
                          21000vnd
                        </span>
                        <div className="block1-wrap-icon flex-c-m flex-w trans-05">
                          <a href="product-single.html" className="block1-icon flex-c-m wrap-pic-max-w">
                            <img src="images/icons/icon-view.png" alt="ICON" />
                          </a>
                          <a href="#" className="block1-icon flex-c-m wrap-pic-max-w js-addcart-b1">
                            <img src="images/icons/icon-cart.png" alt="ICON" />
                          </a>
                          <a href="wishlist.html" className="block1-icon flex-c-m wrap-pic-max-w js-addwish-b1">
                            <img className="icon-addwish-b1" src="images/icons/icon-heart.png" alt="ICON" />
                            <img className="icon-addedwish-b1" src="images/icons/icon-heart2.png" alt="ICON" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>  
                </div>
                {/* - */}
                <div className="item-slick9 p-all-15">
                  {/* Block1 */}
                  <div className="block1">
                    <div className="block1-bg wrap-pic-w bo-all-1 bocl12 hov3 trans-04">
                      <img src="images/product-33.jpg" alt="IMG" />
                      <div className="block1-content flex-col-c-m p-b-46">
                        <a href="product-single.html" className="txt-m-103 cl3 txt-center hov-cl10 trans-04 js-name-b1">
                          Rau muống
                        </a>
                        <span className="block1-content-more txt-m-104 cl9 p-t-21 trans-04">
                          8000vnd
                        </span>
                        <div className="block1-wrap-icon flex-c-m flex-w trans-05">
                          <a href="product-single.html" className="block1-icon flex-c-m wrap-pic-max-w">
                            <img src="images/icons/icon-view.png" alt="ICON" />
                          </a>
                          <a href="#" className="block1-icon flex-c-m wrap-pic-max-w js-addcart-b1">
                            <img src="images/icons/icon-cart.png" alt="ICON" />
                          </a>
                          <a href="wishlist.html" className="block1-icon flex-c-m wrap-pic-max-w js-addwish-b1">
                            <img className="icon-addwish-b1" src="images/icons/icon-heart.png" alt="ICON" />
                            <img className="icon-addedwish-b1" src="images/icons/icon-heart2.png" alt="ICON" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default SingleProduct