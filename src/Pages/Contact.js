import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import addjs from '../jslib/jslib';
class Contact extends Component {
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
                lIÊN HỆ
              </h2>
              <span className="txt-m-201 cl0 flex-c-m flex-w">
                <a href="home.htm" className="txt-m-201 cl0 hov-cl10 trans-04 m-r-6">
                  Home
                </a>
                <span>
                  / Contact
                </span>
              </span>
            </div>
          </div>
        </section>
        {/* Form Contact */}
        <section className="container bg0 p-t-150 p-b-90">
          <div className="row">
            <div className="col-sm-10 col-md-6 col-lg-5 m-rl-auto p-b-10">
              <div className="h-full how5 m-r--30 m-r-0-lg m-l-15-xl">
                <div className="bg-img3 h-full respon18" style={{backgroundImage: 'url(images/other-18.jpg)'}} />
              </div>
            </div>
            <div className="col-sm-10 col-md-6 col-lg-7 m-rl-auto p-b-10">
              <div className="p-t-75 p-l-70 p-rl-0-lg">
                <div className="size-a-1 flex-col-l p-b-70">
                  <div className="txt-m-201 cl10 how-pos1-parent m-b-14">
                    liên hệ với chúng tôi
                    <div className="how-pos1">
                      <img src="images/icons/symbol-02.png" alt="IMG" />
                    </div>
                  </div>
                  <h3 className="txt-l-101 cl3 respon1">
                    LIÊN HỆ
                  </h3>
                </div>
                <form id="contact-form" className="validate-form" method="post" action="includes/contact-form.php" name="contact">
                  <div className="row">
                    <div className="col-lg-6 p-b-20">
                      <div className="m-r--5 m-rl-0-lg validate-input" data-validate="Name is required">
                        <input className="txt-s-115 cl3 plh1 size-a-25 bo-all-1 bocl15 focus1 p-rl-20" type="text" name="name" placeholder="Tên *" />
                      </div>
                    </div>
                    <div className="col-lg-6 p-b-20">
                      <div className="m-l--5 m-rl-0-lg validate-input" data-validate="Valid email is: ex@abc.xyz">
                        <input className="txt-s-115 cl3 plh1 size-a-25 bo-all-1 bocl15 focus1 p-rl-20" type="text" name="email" placeholder="Email *" />
                      </div>
                    </div>
                    <div className="col-lg-6 p-b-20">
                      <div className="m-r--5 m-rl-0-lg">
                        <input className="txt-s-115 cl3 plh1 size-a-25 bo-all-1 bocl15 focus1 p-rl-20" type="text" name="address" placeholder="Địa chỉ" />
                      </div>
                    </div>
                    <div className="col-lg-6 p-b-20">
                      <div className="m-l--5 m-rl-0-lg validate-input" data-validate="Phone is required">
                        <input className="txt-s-115 cl3 plh1 size-a-25 bo-all-1 bocl15 focus1 p-rl-20" type="text" name="phone" placeholder="Số điện thoại *" />
                      </div>
                    </div>
                    <div className="col-12 p-b-20">
                      <div className="validate-input" data-validate="Message is required">
                        <textarea className="txt-s-115 cl3 plh1 size-a-48 bo-all-1 bocl15 focus1 p-rl-20 p-tb-10" name="msg" placeholder="Vấn đề của bạn" defaultValue={""} />
                      </div>  
                    </div>
                  </div>
                  <div className="flex-l p-t-10">
                    <button className="flex-c-m txt-s-103 cl0 bg10 size-a-2 hov-btn2 trans-04">
                      Gửi
                    </button>
                  </div>
                </form>
              </div>
            </div>  
          </div>
        </section>
        {/* Ccontact */}
        <section className="how-pos2-parent">
          <div className="map how-pos2 s-full respon19">
            <div className="contact-map h-full" id="google_map" data-map-x="19.420967" data-map-y="-99.162822" data-scrollwhell={0} data-draggable={1} data-zoom={15} />
          </div>
          <div className="container pointer-e-none">
            <div className="m-rl--15 flex-r">
              <div className="pointer-e-auto size-a-49 bg10 p-rl-40 p-t-50 p-b-30 w-full-lg p-rl-15-ssm">
                <h4 className="txt-l-108 cl0 p-b-18">
                  THÔNG TIN LIÊN HỆ
                </h4>
                <p className="txt-s-101 cl0">
                  Bạn đang cần hỗ trợ hay đóng góp ý kiến hãy liên hệ với chũng tôi
                </p>
                <ul className="p-t-44">
                  <li className="flex-m p-b-20">
                    <div className="wrap-pic-max-w size-w-73 m-r-20">
                      <img src="images/icons/icon-address-02.png" alt="IMG" />
                    </div>
                    <span className="size-w-74 txt-s-101 cl0">
                      193 Nguyễn Lương Bằng, Liên Chiểu, Đà Nẵng 
                    </span>
                  </li>
                  <li className="flex-m p-b-20">
                    <div className="wrap-pic-max-w size-w-73 m-r-20">
                      <img src="images/icons/icon-phone-04.png" alt="IMG" />
                    </div>
                    <span className="size-w-74 txt-s-101 cl0">
                      0236 3842 326
                    </span>
                  </li>
                  <li className="flex-m p-b-20">
                    <div className="wrap-pic-max-w size-w-73 m-r-20">
                      <img src="images/icons/icon-mail-04.png" alt="IMG" />
                    </div>
                    <span className="size-w-74 txt-s-101 cl0">
                      nhom115tlt2@gmail.com
                    </span>
                  </li>
                  <li className="flex-m p-b-20">
                    <div className="wrap-pic-max-w size-w-73 m-r-20">
                      <img src="images/icons/icon-web-02.png" alt="IMG" />
                    </div>
                    <span className="size-w-74 txt-s-101 cl0">
                      www.vltc.OrganicStore.com
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Contact