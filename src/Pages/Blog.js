import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import addjs from '../jslib/jslib';
class Blog extends Component {
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
                Thông tin sưc khỏe làm đẹp
              </h2>
              <span className="txt-m-201 cl0 flex-c-m flex-w">
                <a href="home.htm" className="txt-m-201 cl0 hov-cl10 trans-04 m-r-6">
                  Home
                </a>
                <span>
                </span>
              </span>
            </div>
          </div>
        </section>
        {/* Content page */}
        <section className="bg0 p-t-100 p-b-95">
          <div className="container">
            {/* item blog */}
            <div className="p-b-47">
              <a href="blog-single.html" className="wrap-pic-w how-pos8-parent hov4">
                <img src="images/blog-14.jpg" alt="BLOG" />
                <div className="size-a-4 bg10 flex-col-c-m how-pos8">
                  <span className="txt-l-106 cl0 p-b-4">
                    20
                  </span>
                  <span className="txt-m-108 cl0 p-b-5">
                    October
                  </span>
                </div>
              </a>
              <div className="p-t-35">
                <h4>
                  <a href="blog-single.html" className="txt-m-125 cl3 hov-cl10 trans-04">
                    TÁC DỤNG NGĂN NGỪA BỆNH TỪ TRÁI CÂY MÀ BẠN ÍT BIẾT TỚI
                  </a>
                </h4>
                <p className="txt-s-101 cl6 p-t-18">
                  Trong trái cây có vô vàn những tác dụng mà chưa chắc chúng ta đã biết tới ...
                </p>
                <div className="flex-w flex-sb-m">
                  <div className="flex-w flex-m txt-s-115 cl9 m-r-30 p-tb-19">
                    <span className="m-r-25">
                      Đăng bởi <span className="txt-s-108 cl6">Long</span>
                    </span>
                    <span>
                      15 Comments
                    </span>
                  </div>
                  <div className="how-line2 p-l-40 m-t-2">
                    <a href="blog-single.html" className="txt-s-105 cl9 hov-cl10 trans-04">
                      Đọc tiếp
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 col-md-4 p-b-45">
                <div>
                  <a href="blog-single.html" className="wrap-pic-w hov4 how-pos5-parent">
                    <img src="images/blog-19.jpg" alt="BLOG" />
                    <div className="flex-col-c-m size-a-9 bg10 how-pos5">
                      <span className="txt-l-110 cl0">
                        18
                      </span>
                      <span className="txt-s-110 cl0">
                        June
                      </span>
                    </div>
                  </a>
                  <div className="p-t-28">
                    <h4 className="p-b-10">
                      <a href="blog-single.html" className="txt-m-109 cl3 hov-cl10 trans-04">
                        TÁC DỤNG NGĂN NGỪA BỆNH TỪ TRÁI CÂY MÀ BẠN ÍT BIẾT TỚI
                      </a>
                    </h4>
                    <p className="txt-s-101 cl6 p-b-18">
                      Trong trái cây có vô vàn những tác dụng mà chưa chắc chúng ta đã biết tới ...
                    </p>
                    <div className="how-line2 p-l-40">
                      <a href="blog-single.html" className="txt-s-105 cl9 hov-cl10 trans-04">
                        Đọc tiếp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 p-b-45">
                <div>
                  <a href="blog-single.html" className="wrap-pic-w hov4 how-pos5-parent">
                    <img src="images/blog-20.jpg" alt="BLOG" />
                    <div className="flex-col-c-m size-a-9 bg10 how-pos5">
                      <span className="txt-l-110 cl0">
                        18
                      </span>
                      <span className="txt-s-110 cl0">
                        June
                      </span>
                    </div>
                  </a>
                  <div className="p-t-28">
                    <h4 className="p-b-10">
                      <a href="blog-single.html" className="txt-m-109 cl3 hov-cl10 trans-04">
                        TÁC DỤNG NGĂN NGỪA BỆNH TỪ TRÁI CÂY MÀ BẠN ÍT BIẾT TỚI
                      </a>
                    </h4>
                    <p className="txt-s-101 cl6 p-b-18">
                      Trong trái cây có vô vàn những tác dụng mà chưa chắc chúng ta đã biết tới ...
                    </p>
                    <div className="how-line2 p-l-40">
                      <a href="blog-single.html" className="txt-s-105 cl9 hov-cl10 trans-04">
                        Đọc tiếp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 p-b-45">
                <div>
                  <a href="blog-single.html" className="wrap-pic-w hov4 how-pos5-parent">
                    <img src="images/blog-21.jpg" alt="BLOG" />
                    <div className="flex-col-c-m size-a-9 bg10 how-pos5">
                      <span className="txt-l-110 cl0">
                        18
                      </span>
                      <span className="txt-s-110 cl0">
                        June
                      </span>
                    </div>
                  </a>
                  <div className="p-t-28">
                    <h4 className="p-b-10">
                      <a href="blog-single.html" className="txt-m-109 cl3 hov-cl10 trans-04">
                        TÁC DỤNG NGĂN NGỪA BỆNH TỪ TRÁI CÂY MÀ BẠN ÍT BIẾT TỚI
                      </a>
                    </h4>
                    <p className="txt-s-101 cl6 p-b-18">
                      Trong trái cây có vô vàn những tác dụng mà chưa chắc chúng ta đã biết tới ...
                    </p>
                    <div className="how-line2 p-l-40">
                      <a href="blog-single.html" className="txt-s-105 cl9 hov-cl10 trans-04">
                        Đọc tiếp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 p-b-45">
                <div>
                  <a href="blog-single.html" className="wrap-pic-w hov4 how-pos5-parent">
                    <img src="images/blog-22.jpg" alt="BLOG" />
                    <div className="flex-col-c-m size-a-9 bg10 how-pos5">
                      <span className="txt-l-110 cl0">
                        18
                      </span>
                      <span className="txt-s-110 cl0">
                        June
                      </span>
                    </div>
                  </a>
                  <div className="p-t-28">
                    <h4 className="p-b-10">
                      <a href="blog-single.html" className="txt-m-109 cl3 hov-cl10 trans-04">
                        TÁC DỤNG NGĂN NGỪA BỆNH TỪ TRÁI CÂY MÀ BẠN ÍT BIẾT TỚI 
                      </a>
                    </h4>
                    <p className="txt-s-101 cl6 p-b-18">
                      Trong trái cây có vô vàn những tác dụng mà chưa chắc chúng ta đã biết tới ...
                    </p>
                    <div className="how-line2 p-l-40">
                      <a href="blog-single.html" className="txt-s-105 cl9 hov-cl10 trans-04">
                        Đọc tiếp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 p-b-45">
                <div>
                  <a href="blog-single.html" className="wrap-pic-w hov4 how-pos5-parent">
                    <img src="images/blog-23.jpg" alt="BLOG" />
                    <div className="flex-col-c-m size-a-9 bg10 how-pos5">
                      <span className="txt-l-110 cl0">
                        18
                      </span>
                      <span className="txt-s-110 cl0">
                        June
                      </span>
                    </div>
                  </a>
                  <div className="p-t-28">
                    <h4 className="p-b-10">
                      <a href="blog-single.html" className="txt-m-109 cl3 hov-cl10 trans-04">
                        TÁC DỤNG NGĂN NGỪA BỆNH TỪ TRÁI CÂY MÀ BẠN ÍT BIẾT TỚI
                      </a>
                    </h4>
                    <p className="txt-s-101 cl6 p-b-18">
                      Trong trái cây có vô vàn những tác dụng mà chưa chắc chúng ta đã biết tới ...
                    </p>
                    <div className="how-line2 p-l-40">
                      <a href="blog-single.html" className="txt-s-105 cl9 hov-cl10 trans-04">
                        Đọc tiếp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 p-b-45">
                <div>
                  <a href="blog-single.html" className="wrap-pic-w hov4 how-pos5-parent">
                    <img src="images/blog-24.jpg" alt="BLOG" />
                    <div className="flex-col-c-m size-a-9 bg10 how-pos5">
                      <span className="txt-l-110 cl0">
                        18
                      </span>
                      <span className="txt-s-110 cl0">
                        June
                      </span>
                    </div>
                  </a>
                  <div className="p-t-28">
                    <h4 className="p-b-10">
                      <a href="blog-single.html" className="txt-m-109 cl3 hov-cl10 trans-04">
                        TÁC DỤNG NGĂN NGỪA BỆNH TỪ TRÁI CÂY MÀ BẠN ÍT BIẾT TỚI
                      </a>
                    </h4>
                    <p className="txt-s-101 cl6 p-b-18">
                      Trong trái cây có vô vàn những tác dụng mà chưa chắc chúng ta đã biết tới ...
                    </p>
                    <div className="how-line2 p-l-40">
                      <a href="blog-single.html" className="txt-s-105 cl9 hov-cl10 trans-04">
                        Đọc tiếp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Pagination */}
            <div className="flex-w flex-c-m p-t-25">
              <a href="#" className="flex-c-m txt-s-115 cl6 size-a-23 bo-all-1 bocl15 hov-btn1 trans-04 m-all-3 active-pagi1">
                1
              </a>
              <a href="#" className="flex-c-m txt-s-115 cl6 size-a-23 bo-all-1 bocl15 hov-btn1 trans-04 m-all-3">
                2
              </a>
              <a href="#" className="flex-c-m txt-s-115 cl6 size-a-24 how-btn1 bo-all-1 bocl15 hov-btn1 trans-04 m-all-3 p-b-1">
                Tiếp
                <span className="lnr lnr-chevron-right m-t-3 m-l-7" />
                <span className="lnr lnr-chevron-right m-t-3" />
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Blog