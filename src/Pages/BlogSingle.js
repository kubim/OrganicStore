import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import addjs from '../jslib/jslib';
class BlogSingle extends Component {
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
                THÔNG TIN
              </h2>
              <span className="txt-m-201 cl0 flex-c-m flex-w">
                <a href="home.htm" className="txt-m-201 cl0 hov-cl10 trans-04 m-r-6">
                  Home
                </a>
                <a href="blog-list.html" className="txt-m-201 cl0 hov-cl10 trans-04 m-r-6">
                  / Bài viết
                </a>
                <span>
                  / TÁC DỤNG NGĂN NGỪA BỆNH TỪ TRÁI CÂY MÀ BẠN ÍT BIẾT TỚI
                </span>
              </span>
            </div>
          </div>
        </section>
        {/* Content page */}
        <section className="bg0 p-t-100 p-b-20">
          <div className="container">
            <div className="row">
              <div className="col-sm-11 col-md-8 col-lg-9 m-rl-auto p-b-80">
                {/* detail blog */}
                <div className="p-b-50">
                  <div className="wrap-pic-w">
                    <img src="images/blog-14.jpg" alt="BLOG" />
                  </div>
                  <div className="p-t-30">
                    <h4 className="txt-m-125 cl3">
                      TÁC DỤNG NGĂN NGỪA BỆNH TỪ TRÁI CÂY MÀ BẠN ÍT BIẾT TỚI
                    </h4>
                    <div className="flex-w flex-m txt-s-115 cl9 p-t-14 p-b-22">
                      <span className="m-r-22">
                        March 28, 2018
                      </span>
                      <span className="m-r-22">
                        Đăng bởi <span className="txt-s-108 cl6">Long</span>
                      </span>
                      <span>
                        15 Bình luận
                      </span>
                    </div>
                    <p className="txt-s-101 cl6 p-b-12">
                      Trong trái cây có vô vàn những tác dụng mà chưa chắc chúng ta đã biết tới ...
                    </p>
                    <h5 className="txt-m-104 cl3 p-t-18 p-b-19">
                      Sức khỏe
                    </h5>
                    <p className="txt-s-101 cl6 p-b-12">
                      Trong trái cây có vô vàn những tác dụng mà chưa chắc chúng ta đã biết tới. Trong mỗi loại trái cây đều có những vi chất quý giá riêng, nếu các bạn hiểu về chúng và áp dụng cho sức khỏe thì các bạn sẽ thấy trái cây thật sự rất vi diệu đó là món quà tuyệt vời mà thiên nhiên ban tặng cho chúng ta. Sau đây tôi sẽ kể ra một số loại trái cây trong đó có một số loại trái cây nhập khẩu đang được các bạn trẻ yêu thích có những tác dụng tuyệt vời trong đời sống cũng như sức khỏe của chúng ta.
                    </p>
                    <p className="txt-s-101 cl6 p-b-12">
                      Trái cây là món quà của tạo hóa
                    </p>
                    <p className="txt-s-101 cl6 p-b-12">
                      Trong trái cây có vô vàn những tác dụng mà chưa chắc chúng ta đã biết tới.
                    </p>
                    <div className="flex-t p-l-62 p-t-15 p-b-27 p-l-15-sm">
                      <div className="m-r-22 p-t-6">
                        <img src="images/icons/icon-start-para.png" alt="IMG" />
                      </div>
                      <p className="size-w-53 txt-m-126 cl9">
                        Trái cây là món quà của tạo hóa
                      </p>
                    </div>
                    <p className="txt-s-101 cl6 p-b-12">
                      Theo các kết quả nghiên cứu không những trái cây đóng vai trò chính yếu trong việc tẩy độc cho cơ thể mà còn cung cấp năng lượng cần thiết cho các hoạt động trong cuộc sống. Giúp cơ thể ngăn ngừa những loại bệnh mà chúng ta có thể gặp trong cuộc sống. Nhưng các bạn nên lưu ý khi sử dụng trái cây hãy trọn mua trái cây ở những cửa hàng đảm bảo vệ sinh an toàn và các bạn phải làm sạch trước khi sử dụng nhé.
                    </p>
                  </div>
                  <div className="flex-w flex-sb-m p-t-20">
                    <div className="flex-t flex-w p-t-6 p-r-30">
                      <div className="txt-s-106 cl6 size-w-35 p-r-11">
                        <img className="m-r-2 m-b-2" src="images/icons/icon-tag.png" alt="IMG" />
                        Tags:
                      </div>
                      <div className="size-w-66">
                        <a href="#" className="txt-s-106 cl9 hov-cl10 trans-04">
                          Trái cây,
                        </a>
                        <a href="#" className="txt-s-106 cl9 hov-cl10 trans-04">
                          Farm,
                        </a>
                        <a href="#" className="txt-s-106 cl9 hov-cl10 trans-04">
                          Oraganic .
                        </a>
                      </div>
                    </div>
                    <a href="#" className="txt-s-106 cl6 hov-cl10 trans-04 p-t-6">
                      <img className="m-r-4 m-b-3" src="images/icons/icon-share.png" alt="IMG" />
                      Share
                    </a>
                  </div>
                </div>
                {/* Admin */}
                <div className="flex-w flex-sb how-bor5 m-b-40">
                  <div className="wrap-pic-w size-a-44 bg-img3 w-full-ssm" style={{backgroundImage: 'url(images/admin-01.jpg)'}}>
                  </div>
                  <div className="size-w-68 flex-col-m p-all-30 w-full-ssm">
                    <h6 className="txt-s-121 cl3 p-b-14">
                      NƯỚC ÉP TRÁI CÂY GIẢM CÂN
                    </h6>
                    <p className="txt-s-101 cl6">
                      Vitamin dồi dào trong trái cây bổ cung cho cơ thể những vi chất quý giá giúp bạn tăng cường sức khỏe và làm đẹp da.
                    </p>
                    <div className="flex-w flex-m p-t-20">
                      <a href="#" className="wrap-pic-max-s pos-relative lh-00 hov6 size-h-6 m-r-11 m-tb-5">
                        <img className="hov6-child1" src="images/icons/icon-instagram.png" alt="instagram" />
                        <img className="ab-t-l hov6-child2" src="images/icons/icon-instagram2.png" alt="instagram" />
                      </a>
                      <a href="#" className="wrap-pic-max-s pos-relative lh-00 hov6 size-h-6 m-r-11 m-tb-5">
                        <img className="hov6-child1" src="images/icons/icon-twitter.png" alt="twitter" />
                        <img className="ab-t-l hov6-child2" src="images/icons/icon-twitter2.png" alt="twitter" />
                      </a>
                      <a href="#" className="wrap-pic-max-s pos-relative lh-00 hov6 size-h-6 m-r-11 m-tb-5">
                        <img className="hov6-child1" src="images/icons/icon-google.png" alt="google" />
                        <img className="ab-t-l hov6-child2" src="images/icons/icon-google2.png" alt="google" />
                      </a>
                      <a href="#" className="wrap-pic-max-s pos-relative lh-00 hov6 size-h-6 m-r-11 m-tb-5">
                        <img className="hov6-child1" src="images/icons/icon-facebook.png" alt="facebook" />
                        <img className="ab-t-l hov6-child2" src="images/icons/icon-facebook2.png" alt="facebook" />
                      </a>
                    </div>
                  </div>
                </div>
                {/*  */}
                <div className="flex-t bg12 p-t-18 p-b-20 p-rl-30 p-rl-0-ssm">
                  <div className="size-w-53 flex-t m-r-30 m-r-15-ssm">
                    <div className="p-t-11 m-r-20 m-r-15-ssm">
                      <a href="#" className="flex-c-m how-btn2 trans-04">
                        <span className="lnr lnr-chevron-left" />
                      </a>
                    </div>
                    <div className="size-w-53 flex-col-l">
                      <a href="#" className="txt-m-127 cl3 hov-cl10 trans-04">
                        NƯỚC ÉP TRÁI CÂY GIẢM CÂN
                      </a>
                      <span className="txt-s-114 cl9">
                        Bài viết trước
                      </span>
                    </div>
                  </div>
                  <div className="size-w-53 flex-t">
                    <div className="size-w-53 flex-col-r">
                      <a href="#" className="txt-m-127 cl3 txt-right hov-cl10 trans-04">
                        NƯỚC ÉP TRÁI CÂY GIẢM CÂN
                      </a>
                      <span className="txt-s-114 cl9 txt-right">
                        Bài viết kế tiếp
                      </span>
                    </div>
                    <div className="flex-r p-t-11 m-l-20 m-l-15-ssm">
                      <a href="#" className="flex-c-m how-btn2 trans-04">
                        <span className="lnr lnr-chevron-right" />
                      </a>
                    </div>
                  </div>
                </div>
                {/* Comment */}
                <h4 className="txt-m-101 cl3 p-t-55">
                  Bình luận
                </h4>
                <div className="wrap-cmt">
                  {/* Main cmt */}
                  <div className="how-bor2 p-b-40 p-t-35">  
                    <div className="main-cmt flex-w flex-sb-t">
                      <div className="wrap-pic-w size-w-71 p-t-5">
                        <img src="images/avatar-04.jpg" alt="IMG" />
                      </div>
                      <div className="size-w-72 flex-col-l respon17">
                        <div className="flex-w p-b-13">
                          <span className="txt-s-121 cl3 m-r-20">
                            châu
                          </span>
                          <span className="txt-s-114 cl9">
                            20/10/2018 9:39
                          </span>
                        </div>
                        <p className="txt-s-101 cl6">
                          hay
                        </p>
                        <a href="#" className="dis-block txt-s-103 cl3 bo-b-1 bocl3 hov13 trans-04 p-t-18 js-show-phản hồi-cmt">
                          phản hồi
                        </a>
                      </div>
                    </div>
                    {/* form phản hồi cmt */}
                    <form className="js-phản hồi-cmt dis-none">
                      <div className="flex-w p-t-45">
                        <span className="txt-m-114 cl3 m-r-19 p-b-13">
                          comment:
                        </span>
                        <span className="txt-s-121 cl6 pointer hov-cl10 trans-04 js-hide-phản hồi-cmt p-b-13">
                          Cancel phản hồi
                        </span>
                      </div>
                      <div className="row p-t-12">
                        <div className="col-lg-6 p-b-30">
                          <input className="txt-s-120 cl3 plh1 size-a-21 bo-all-1 bocl15 focus1 p-rl-20" type="text" name="name" placeholder="Name" />
                        </div>
                        <div className="col-lg-6 p-b-30">
                          <input className="txt-s-120 cl3 plh1 size-a-21 bo-all-1 bocl15 focus1 p-rl-20" type="text" name="email" placeholder="Email" />
                        </div>
                        <div className="col-12 p-b-30">
                          <textarea className="txt-s-120 cl3 plh1 size-a-26 bo-all-1 bocl15 focus1 p-rl-20 p-tb-10" name="cmt" placeholder="Your comment" defaultValue={""} />
                        </div>
                      </div>
                      <div className="flex-l p-t-10">
                        <button className="flex-c-m txt-s-105 cl0 bg10 size-a-45 hov-btn2 trans-04">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                  {/*  */}
                  <div className="wrap-phản hồi-cmt p-l-145 respon16">
                    {/* phản hồi cmt */}
                    <div className="bo-b-1 bocl15 p-b-40 p-t-35">
                      <div className="phản hồi-cmt flex-w flex-sb-t p-r-40 p-r-0-md">
                        <div className="wrap-pic-w size-w-71 p-t-5">
                          <img src="images/avatar-05.jpg" alt="IMG" />
                        </div>
                        <div className="size-w-72 flex-col-l respon17">
                          <div className="flex-w p-b-13">
                            <span className="txt-s-121 cl3 m-r-20">
                              Phước
                            </span>
                            <span className="txt-s-114 cl9">
                              20/10/2018 9:39
                            </span>
                          </div>
                          <p className="txt-s-101 cl6">
                            Ừ hay quá
                          </p>
                          <a href="#" className="dis-block txt-s-103 cl3 bo-b-1 bocl3 hov13 trans-04 p-t-18 js-show-phản hồi-cmt">
                            phản hồi
                          </a>
                        </div>
                      </div>
                      {/* form phản hồi cmt */}
                      <form className="js-phản hồi-cmt dis-none">
                        <div className="flex-w p-t-45">
                          <span className="txt-m-114 cl3 m-r-19 p-b-13">
                            Leave us a comment:
                          </span>
                          <span className="txt-s-121 cl6 pointer hov-cl10 trans-04 js-hide-phản hồi-cmt p-b-13">
                            Cancel phản hồi
                          </span>
                        </div>
                        <div className="row p-t-12">
                          <div className="col-lg-6 p-b-30">
                            <input className="txt-s-120 cl3 plh1 size-a-21 bo-all-1 bocl15 focus1 p-rl-20" type="text" name="name" placeholder="Name" />
                          </div>
                          <div className="col-lg-6 p-b-30">
                            <input className="txt-s-120 cl3 plh1 size-a-21 bo-all-1 bocl15 focus1 p-rl-20" type="text" name="email" placeholder="Email" />
                          </div>
                          <div className="col-12 p-b-30">
                            <textarea className="txt-s-120 cl3 plh1 size-a-26 bo-all-1 bocl15 focus1 p-rl-20 p-tb-10" name="cmt" placeholder="Your comment" defaultValue={""} />
                          </div>
                        </div>
                        <div className="flex-l p-t-10">
                          <button className="flex-c-m txt-s-105 cl0 bg10 size-a-45 hov-btn2 trans-04">
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                    {/* phản hồi cmt */}
                    <div className="bo-b-1 bocl15 p-b-40 p-t-35">
                      <div className="phản hồi-cmt flex-w flex-sb-t p-r-40 p-r-0-md">
                        <div className="wrap-pic-w size-w-71 p-t-5">
                          <img src="images/avatar-06.jpg" alt="IMG" />
                        </div>
                        <div className="size-w-72 flex-col-l respon17">
                          <div className="flex-w p-b-13">
                            <span className="txt-s-121 cl3 m-r-20">
                              Long
                            </span>
                            <span className="txt-s-114 cl9">
                              20/10/2018 9:39
                            </span>
                          </div>
                          <p className="txt-s-101 cl6">
                            Rứa mà kêu hay
                          </p>
                          <a href="#" className="dis-block txt-s-103 cl3 bo-b-1 bocl3 hov13 trans-04 p-t-18 js-show-phản hồi-cmt">
                            phản hồi
                          </a>
                        </div>
                      </div>
                      {/* form phản hồi cmt */}
                      <form className="js-phản hồi-cmt dis-none">
                        <div className="flex-w p-t-45">
                          <span className="txt-m-114 cl3 m-r-19 p-b-13">
                            Leave us a comment:
                          </span>
                          <span className="txt-s-121 cl6 pointer hov-cl10 trans-04 js-hide-phản hồi-cmt p-b-13">
                            Cancel phản hồi
                          </span>
                        </div>
                        <div className="row p-t-12">
                          <div className="col-lg-6 p-b-30">
                            <input className="txt-s-120 cl3 plh1 size-a-21 bo-all-1 bocl15 focus1 p-rl-20" type="text" name="name" placeholder="Name" />
                          </div>
                          <div className="col-lg-6 p-b-30">
                            <input className="txt-s-120 cl3 plh1 size-a-21 bo-all-1 bocl15 focus1 p-rl-20" type="text" name="email" placeholder="Email" />
                          </div>
                          <div className="col-12 p-b-30">
                            <textarea className="txt-s-120 cl3 plh1 size-a-26 bo-all-1 bocl15 focus1 p-rl-20 p-tb-10" name="cmt" placeholder="Your comment" defaultValue={""} />
                          </div>
                        </div>
                        <div className="flex-l p-t-10">
                          <button className="flex-c-m txt-s-105 cl0 bg10 size-a-45 hov-btn2 trans-04">
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  {/* Main cmt */}
                  <div className="how-bor2 p-b-40 p-t-35">
                    <div className="main-cmt flex-w flex-sb-t">
                      <div className="wrap-pic-w size-w-71 p-t-5">
                        <img src="images/avatar-07.jpg" alt="IMG" />
                      </div>
                      <div className="size-w-72 flex-col-l respon17">
                        <div className="flex-w p-b-13">
                          <span className="txt-s-121 cl3 m-r-20">
                            Quân
                          </span>
                          <span className="txt-s-114 cl9">
                            20/10/2018 9:39
                          </span>
                        </div>
                        <p className="txt-s-101 cl6">
                          Mình muốn giảm cân lành mạnh bài viết hay quá.
                        </p>
                        <a href="#" className="dis-block txt-s-103 cl3 bo-b-1 bocl3 hov13 trans-04 p-t-18 js-show-phản hồi-cmt">
                          phản hồi
                        </a>
                      </div>
                    </div>
                    {/* form phản hồi cmt */}
                    <form className="js-phản hồi-cmt dis-none">
                      <div className="flex-w p-t-45">
                        <span className="txt-m-114 cl3 m-r-19 p-b-13">
                          Leave us a comment:
                        </span>
                        <span className="txt-s-121 cl6 pointer hov-cl10 trans-04 js-hide-phản hồi-cmt p-b-13">
                          Cancel phản hồi
                        </span>
                      </div>
                      <div className="row p-t-12">
                        <div className="col-lg-6 p-b-30">
                          <input className="txt-s-120 cl3 plh1 size-a-21 bo-all-1 bocl15 focus1 p-rl-20" type="text" name="name" placeholder="Name" />
                        </div>
                        <div className="col-lg-6 p-b-30">
                          <input className="txt-s-120 cl3 plh1 size-a-21 bo-all-1 bocl15 focus1 p-rl-20" type="text" name="email" placeholder="Email" />
                        </div>
                        <div className="col-12 p-b-30">
                          <textarea className="txt-s-120 cl3 plh1 size-a-26 bo-all-1 bocl15 focus1 p-rl-20 p-tb-10" name="cmt" placeholder="Your comment" defaultValue={""} />
                        </div>
                      </div>
                      <div className="flex-l p-t-10">
                        <button className="flex-c-m txt-s-105 cl0 bg10 size-a-45 hov-btn2 trans-04">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                {/* Leave comment */}
                <h4 className="txt-m-101 cl3 p-t-25 p-b-26">
                  Bình luận:
                </h4>
                <form>
                  <div className="row p-t-12">
                    <div className="col-sm-6 p-b-30">
                      <input className="txt-s-120 cl3 plh1 size-a-21 bo-all-1 bocl15 focus1 p-rl-20" type="text" name="name" placeholder="Name" />
                    </div>
                    <div className="col-sm-6 p-b-30">
                      <input className="txt-s-120 cl3 plh1 size-a-21 bo-all-1 bocl15 focus1 p-rl-20" type="text" name="email" placeholder="Email" />
                    </div>
                    <div className="col-12 p-b-30">
                      <textarea className="txt-s-120 cl3 plh1 size-a-26 bo-all-1 bocl15 focus1 p-rl-20 p-tb-10" name="cmt" placeholder="Your comment" defaultValue={""} />
                    </div>
                  </div>
                  <div className="flex-l p-t-10">
                    <button className="flex-c-m txt-s-105 cl0 bg10 size-a-45 hov-btn2 trans-04">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-sm-11 col-md-4 col-lg-3 m-rl-auto p-b-80">
                <div className="rightbar">
                  {/*  */}
                  <div className="size-a-21 pos-relative">
                    <input className="s-full bo-all-1 bocl15 p-rl-20" type="text" name="search" placeholder="Search bài viết..." />
                    <button className="flex-c-m fs-18 size-a-22 ab-t-r hov11">
                      <img className="hov11-child trans-04" src="images/icons/icon-search.png" alt="ICON" />
                    </button>
                  </div>
                  {/*  */}
                  <div className="p-t-55">
                    <h4 className="txt-m-101 cl3 p-b-27">
                      Danh mục bài viết
                    </h4>
                    <ul>
                      <li className="p-b-5">
                        <a href="#" className="flex-sb-m flex-w txt-s-101 cl6 hov-cl10 trans-04 p-tb-3">
                          <span className="m-r-10">
                            Tình hình rau củ quả
                          </span>
                          <span>
                            3
                          </span>
                        </a>
                      </li>
                      <li className="p-b-5">
                        <a href="#" className="flex-sb-m flex-w txt-s-101 cl6 hov-cl10 trans-04 p-tb-3">
                          <span className="m-r-10">
                            Thông tin làm đẹp
                          </span>
                          <span>
                            5
                          </span>
                        </a>
                      </li>
                      <li className="p-b-5">
                        <a href="#" className="flex-sb-m flex-w txt-s-101 cl6 hov-cl10 trans-04 p-tb-3">
                          <span className="m-r-10">
                            Thông tin sức khỏe
                          </span>
                          <span>
                            9
                          </span>
                        </a>
                      </li>
                      <li className="p-b-5">
                        <a href="#" className="flex-sb-m flex-w txt-s-101 cl6 hov-cl10 trans-04 p-tb-3">
                          <span className="m-r-10">
                            Hôm nay ăn gì?
                          </span>
                          <span>
                            9
                          </span>
                        </a>
                      </li>
                      <li className="p-b-5">
                        <a href="#" className="flex-sb-m flex-w txt-s-101 cl6 hov-cl10 trans-04 p-tb-3">
                          <span className="m-r-10">
                            Khác
                          </span>
                          <span>
                            2
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/*  */}
                  <div className="p-t-40">
                    <h4 className="txt-m-101 cl3 p-b-37">
                      bÀI VIẾT GẦN ĐÂY
                    </h4>
                    <ul>
                      <li className="flex-w flex-sb-t p-b-30">
                        <a href="#" className="size-w-64 wrap-pic-w hov4">
                          <img src="images/last-post-01.jpg" alt="IMG" />
                        </a>
                        <div className="size-w-65 flex-col-l p-t-7">
                          <a href="#" className="txt-m-103 cl3 hov-cl10 trans-04 p-b-3">
                            Châu
                          </a>
                          <span className="txt-s-106 cl9">
                            18/10/2018
                          </span>
                        </div>
                      </li>
                      <li className="flex-w flex-sb-t p-b-30">
                        <a href="#" className="size-w-64 wrap-pic-w hov4">
                          <img src="images/last-post-02.jpg" alt="IMG" />
                        </a>
                        <div className="size-w-65 flex-col-l p-t-7">
                          <a href="#" className="txt-m-103 cl3 hov-cl10 trans-04 p-b-3">
                            Hiếu
                          </a>
                          <span className="txt-s-106 cl9">
                            18/10/2018
                          </span>
                        </div>
                      </li>
                      <li className="flex-w flex-sb-t p-b-30">
                        <a href="#" className="size-w-64 wrap-pic-w hov4">
                          <img src="images/last-post-03.jpg" alt="IMG" />
                        </a>
                        <div className="size-w-65 flex-col-l p-t-7">
                          <a href="#" className="txt-m-103 cl3 hov-cl10 trans-04 p-b-3">
                            Quân
                          </a>
                          <span className="txt-s-106 cl9">
                            18/10/2018
                          </span>
                        </div>
                      </li>
                      <li className="flex-w flex-sb-t p-b-30">
                        <a href="#" className="size-w-64 wrap-pic-w hov4">
                          <img src="images/last-post-04.jpg" alt="IMG" />
                        </a>
                        <div className="size-w-65 flex-col-l p-t-7">
                          <a href="#" className="txt-m-103 cl3 hov-cl10 trans-04 p-b-3">
                            Phước 
                          </a>
                          <span className="txt-s-106 cl9">
                            18/10/2018
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/*  */}
                  <div className="p-t-25">
                    <h4 className="txt-m-101 cl3 p-b-37">
                      Search by tags
                    </h4>
                    <div className="flex-w m-r--10">
                      <a href="#" className="dis-block bg12 txt-s-101 cl6 hov-btn1 trans-03 p-tb-5 p-rl-12 m-r-10 m-b-10">
                        Food
                      </a>
                      <a href="#" className="dis-block bg12 txt-s-101 cl6 hov-btn1 trans-03 p-tb-5 p-rl-12 m-r-10 m-b-10">
                        Green
                      </a>
                      <a href="#" className="dis-block bg12 txt-s-101 cl6 hov-btn1 trans-03 p-tb-5 p-rl-12 m-r-10 m-b-10">
                        Vegetables
                      </a>
                      <a href="#" className="dis-block bg12 txt-s-101 cl6 hov-btn1 trans-03 p-tb-5 p-rl-12 m-r-10 m-b-10">
                        Organic
                      </a>
                      <a href="#" className="dis-block bg12 txt-s-101 cl6 hov-btn1 trans-03 p-tb-5 p-rl-12 m-r-10 m-b-10">
                        Farm
                      </a>
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
export default BlogSingle