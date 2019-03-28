import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import addjs from '../jslib/jslib';
class WishList extends Component {
  componentDidMount(){
    addjs();
  }
  render() {
    return (
      <div>
        {/* Title page */}
        <section className="how-overlay2 bg-img1" style={{backgroundImage: 'url(images/post.jpg)'}}>
          <div className="container">
            <div className="txt-center p-t-160 p-b-165">
              <h2 className="txt-l-101 cl0 txt-center p-b-14 respon1">
                SẢN PHẨM YÊU THÍCH
              </h2>
              <span className="txt-m-201 cl0 flex-c-m flex-w">
                <a href="home.htm" className="txt-m-201 cl0 hov-cl10 trans-04 m-r-6">
                  Home
                </a>
                <span>
                  / Wishlist
                </span>
              </span>
            </div>
          </div>
        </section>
        {/* content page */}
        <div className="bg0 p-t-100 p-b-80">
          <div className="container">
            <div className="wrap-table-shopping-cart rs1-table">
              <table className="table-shopping-cart">
                <tbody><tr className="table_head bg12">
                    <th className="column-1 p-l-30">Tên sản phẩm</th>
                    <th className="column-2">Giá</th>
                    <th className="column-3">Tình trạng</th>
                    <th className="column-4">Thêm vào giỏ</th>
                  </tr>
                  <tr className="table_row">
                    <td className="column-1">
                      <div className="flex-w flex-m">
                        <div className="wrap-pic-w size-w-50 bo-all-1 bocl12 m-r-30">
                          <img src="images/best-sell-01.jpg" alt="IMG" />
                        </div>
                        <span>
                          Cheery
                        </span>
                      </div>
                    </td>
                    <td className="column-2">
                      18000vnd
                    </td>
                    <td className="column-3">
                      <div className="flex-t">
                        <img className="m-t-4 m-r-8" src="images/icons/icon-list3.png" alt="IMG" />
                        <span className="size-w-53 txt-m-104 cl6">
                          Còn hàng
                        </span>
                      </div>
                    </td>
                    <td className="column-4">
                      <div className="flex-w flex-sb-m">
                        <a href="#" className="flex-c-m txt-s-103 cl6 size-a-2 how-btn1 bo-all-1 bocl11 hov-btn1 trans-04">
                          Thanh toán
                          <span className="lnr lnr-chevron-right m-l-7" />
                          <span className="lnr lnr-chevron-right" />
                        </a>
                        <div className="fs-15 hov-cl10 pointer">
                          <span className="lnr lnr-cross" />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="table_row">
                    <td className="column-1">
                      <div className="flex-w flex-m">
                        <div className="wrap-pic-w size-w-50 bo-all-1 bocl12 m-r-30">
                          <img src="images/best-sell-02.jpg" alt="IMG" />
                        </div>
                        <span>
                          Asparagus
                        </span>
                      </div>
                    </td>
                    <td className="column-2">
                      12000vnd
                    </td>
                    <td className="column-3">
                      <div className="flex-t">
                        <img className="m-t-4 m-r-8" src="images/icons/icon-list3.png" alt="IMG" />
                        <span className="size-w-53 txt-m-104 cl6">
                          Còn hàng 
                        </span>
                      </div>
                    </td>
                    <td className="column-4">
                      <div className="flex-w flex-sb-m">
                        <a href="#" className="flex-c-m txt-s-103 cl6 size-a-2 how-btn1 bo-all-1 bocl11 hov-btn1 trans-04">
                          Thanh toán
                          <span className="lnr lnr-chevron-right m-l-7" />
                          <span className="lnr lnr-chevron-right" />
                        </a>
                        <div className="fs-15 hov-cl10 pointer">
                          <span className="lnr lnr-cross" />
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody></table>
            </div>
            <div className="flex-w flex-sb-m p-t-30">
              <div className="flex-w flex-m m-r-50 m-tb-10">
                <div className="flex-c-m txt-s-103 cl6 size-h-9 how-btn1 bo-all-1 bocl11 hov-btn1 trans-04 pointer p-rl-29 m-tb-10 m-r-30">
                  Xóa tất cả  
                </div>
                <div className="flex-c-m txt-s-103 cl6 size-h-9 how-btn1 bo-all-1 bocl11 hov-btn1 trans-04 pointer p-rl-29 m-tb-10">
                  Cập nhật 
                </div>
              </div>
              <a href="shop-sidebar-grid.html" className="flex-c-m txt-s-103 cl0 bg10 size-h-9 hov-btn2 trans-04 pointer p-rl-29 m-tb-10">
                Tiếp tục mua hàng
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default WishList