import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import addjs from '../jslib/jslib';
class LostPass extends Component {
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
                My Account
              </h2>
              <span className="txt-m-201 cl0 flex-c-m flex-w">
                <a href="home.htm" className="txt-m-201 cl0 hov-cl10 trans-04 m-r-6">
                  Home
                </a>
                <span>
                  / My Account
                </span>
              </span>
            </div>
          </div>
        </section>
        {/* content page */}
        <div className="bg0 p-t-95 p-b-100">
          <div className="container">
            <form>
              <p className="txt-s-101 cl9 p-b-17">
                Mất mật khấu?  Vui lòng nhập tên hoặc địa chỉ email. Bạn sẽ nhận đcược 1 link tạo pass mới thông qua email
              </p>
              <div className="p-b-20">
                <div className="txt-s-101 cl9 p-b-14">
                  Tên email hoặc số điện thoại
                </div>
                <input className="txt-s-101 cl3 size-a-41 bo-all-1 bocl15 p-rl-15 focus1" type="text" name="username" />
              </div>
              <div className="flex-w">
                <button className="flex-c-m txt-s-105 cl0 bg10 size-a-40 hov-btn2 trans-04 p-rl-10 m-r-18">
                  OK
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default LostPass