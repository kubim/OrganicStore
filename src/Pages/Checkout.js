import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import addjs from '../jslib/jslib';
import {connect} from 'react-redux';
class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname:'',
      city:'',
      street:'',
      phone:'',
      email:'',
      note:'',
    };
  }
  checkOut(){
    alert("Tên:"+this.state.firstname+"\nGiao đến"+this.state.street+"tại thành phố "+this.state.city+"\nSố điện thoại: "+this.state.phone+"\nEmail: "+this.state.email+"\nGhi chú: "+this.state.note+"\nTổng tiền:"+this.props.sum+"VND");
  }
  componentDidMount(){
    addjs();
  }
  onChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({  [name]: value });
  }
  render() {
    return (
      <div>
        <section className="how-overlay2 bg-img1" style={{backgroundImage: 'url(images/post.jpg)'}}>
          <div className="container">
            <div className="txt-center p-t-160 p-b-165">
              <h2 className="txt-l-101 cl0 txt-center p-b-14 respon1">
                Thanh toán
              </h2>
              <span className="txt-m-201 cl0 flex-c-m flex-w">
                <a href="home.htm" className="txt-m-201 cl0 hov-cl10 trans-04 m-r-6">
                  Home
                </a>
                <span>
                  / Thanh toán
                </span>
              </span>
            </div>
          </div>
        </section>
        {/* content page */}
        <div className="bg0 p-t-95 p-b-50">
          <div className="container">
            {/* Login */}
            <div>
              <div className="txt-s-101 txt-center">
                <span className="cl3">
                </span>
                <span className="cl10 hov12 js-toggle-panel1">
                  Click here để login
                </span>
              </div>
              <div className="how-bor3 p-rl-15 p-tb-28 m-tb-33 dis-none js-panel1">
                <form className="size-w-60 m-rl-auto">
                  <p className="txt-s-120 cl9 txt-center p-b-26">
                    If you have shopped with us before, please enter your details in the boxes below. If you are a new customer, please proceed to the Billing &amp; Shipping section.
                  </p>
                  <div className="row">
                    <div className="col-sm-6 p-b-20">
                      <div>
                        <div className="txt-s-101 cl6 p-b-10">
                          Username or email <span className="cl12">*</span>
                        </div>
                        <input className="txt-s-120 cl3 size-a-21 bo-all-1 bocl15 p-rl-15 focus1" type="text" name="username" />
                      </div>
                    </div>
                    <div className="col-sm-6 p-b-20">
                      <div>
                        <div className="txt-s-101 cl6 p-b-10">
                          Password <span className="cl12">*</span>
                        </div>
                        <input className="txt-s-120 cl3 size-a-21 bo-all-1 bocl15 p-rl-15 focus1" type="password" name="password" />
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="flex-c-m txt-s-105 cl0 bg10 size-a-21 hov-btn2 trans-04 p-rl-10">
                        Login
                      </button>
                      <div className="flex-w flex-m p-t-10 p-b-3">
                        <input id="check-creatacc" className="size-a-35 m-r-10" type="checkbox" name="creatacc" />
                        <label htmlFor="check-creatacc" className="txt-s-101 cl9">
                          Create an account?
                        </label>
                      </div>
                      <a href="#" className="txt-s-101 cl9 hov-cl10 trans-04">
                        Lost your password?
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* enter code */}
            <div className="p-t-17 p-b-70">
              <div className="txt-s-101 txt-center">
                <span className="cl3">
                  voucher? 
                </span>
                <span className="cl10 hov12 js-toggle-panel1">
                  Click here để nhập mã 
                </span>
              </div>
              <div className="m-t-35 dis-none js-panel1">
                <div className="size-w-60 flex-w m-rl-auto">
                  <input className="bo-all-1 bocl15 focus1 size-a-37 txt-s-120 cl3 plh2 p-rl-20 w-full-sm" type="text" name="coupon" placeholder="Coupon code" />
                  <button className="bg10 size-a-36 txt-s-105 cl0 p-rl-15 trans-04 hov-btn2 mt-4 mt-sm-0 w-full-sm">
                    Ap dụng voucher
                  </button>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-7 col-lg-8 p-b-50">
                <div>
                  <h4 className="txt-m-124 cl3 p-b-28">
                    Chi tiết đơn hàng
                  </h4>
                  <div className="row p-b-50">
                    <div className="col-sm-6 p-b-23">
                      <div>
                        <div className="txt-s-101 cl6 p-b-10">
                          Tên <span className="cl12">*</span>
                        </div>
                        <input className="txt-s-120 cl3 size-a-21 bo-all-1 bocl15 p-rl-20 focus1" type="text"
                               name="firstname" onChange={this.onChange}/>
                      </div>
                    </div>
                    {/*<div className="col-12 p-b-23">*/}
                    {/*<div>*/}
                    {/*<div className="txt-s-101 cl6 p-b-10">*/}
                    {/*Đất nước <span className="cl12">*</span>*/}
                    {/*</div>*/}
                    {/*<div className="rs1-select2 rs2-select2 bg0 w-full bo-all-1 bocl15 m-tb-7 m-r-15">*/}
                    {/*<select className="js-select2" name="country">*/}
                    {/*<option>Việt Nam</option>*/}
                    {/*<option>US</option>*/}
                    {/*</select>*/}
                    {/*<div className="dropDownSelect2" />*/}
                    {/*</div>*/}
                    {/*</div>*/}
                    {/*</div>*/}
                    <div className="col-12 p-b-23">
                      <div>
                        <div className="txt-s-101 cl6 p-b-10">
                          Địa chỉ <span className="cl12">*</span>
                        </div>
                        <input className="plh2 txt-s-120 cl3 size-a-21 bo-all-1 bocl15 p-rl-20 focus1 m-b-20"
                               type="text" name="street" placeholder="địa chỉ sô nhà đường" onChange={this.onChange}/>
                      </div>
                    </div>
                    <div className="col-12 p-b-23">
                      {/*<div>*/}
                      <div className="txt-s-101 cl6 p-b-10">
                        Thành phố <span className="cl12">*</span>
                      </div>
                      {/*<select className="js-select2" name="city" onChange={this.onChange}>*/}
                      {/*<option value={"Đà Nẵng"}>Đà Nẵng</option>*/}
                      {/*<option value={"Hội An"}>Hội An</option>*/}
                      {/*</select>*/}
                      {/*<div className="dropDownSelect2" />*/}
                      {/*</div>*/}
                      <select style={{width: '100px'}} name="city" id="input" className="form-control"
                              required="required" onChange={this.onChange} defaultValue="Đà Nẵng">
                        <option value="Đà Nẵng"> Đà Nẵng</option>
                        <option value="Hội An">Hội An</option>
                        <option value="Huế">Huế</option>
                      </select>
                    </div>
                    {/*<div className="col-12 p-b-23">*/}
                    {/*<div>*/}
                    {/*<div className="txt-s-101 cl6 p-b-10">*/}
                    {/*Quận/ Huyện <span className="cl12">*</span>*/}
                    {/*</div>*/}
                    {/*<select className="js-select2" name="country">*/}
                    {/*<option>Việt Nam</option>*/}
                    {/*<option>US</option>*/}
                    {/*</select>*/}
                    {/*<div className="dropDownSelect2" />*/}
                    {/*</div>*/}
                    {/*</div>*/}
                    {/*<div className="col-12 p-b-23">*/}
                    {/*<div>*/}
                    {/*<div className="txt-s-101 cl6 p-b-10">*/}
                    {/*Xã/ Phường <span className="cl12">*</span>*/}
                    {/*</div>*/}
                    {/*<select className="js-select2" name="country">*/}
                    {/*<option>Việt Nam</option>*/}
                    {/*<option>US</option>*/}
                    {/*</select>*/}
                    {/*<div className="dropDownSelect2" />*/}
                    {/*</div>*/}
                    {/*</div>*/}
                    <div className="col-sm-6 p-b-23">
                      <div>
                        <div className="txt-s-101 cl6 p-b-10">
                          Số điện thoại <span className="cl12">*</span>
                        </div>
                        <input className="txt-s-120 cl3 size-a-21 bo-all-1 bocl15 p-rl-20 focus1" type="text"
                               name="phone" onChange={this.onChange}/>
                      </div>
                    </div>
                    <div className="col-sm-6 p-b-23">
                      <div>
                        <div className="txt-s-101 cl6 p-b-10">
                          Email <span className="cl12">*</span>
                        </div>
                        <input className="txt-s-120 cl3 size-a-21 bo-all-1 bocl15 p-rl-20 focus1" type="text"
                               name="email" onChange={this.onChange}/>
                      </div>
                    </div>
                    {/*<div className="flex-w flex-m p-rl-15 m-t--10">*/}
                    {/*<input id="check-ca" className="size-a-35 m-r-10" type="checkbox" name="ca" />*/}
                    {/*<label htmlFor="check-ca" className="txt-s-101 cl9">*/}
                    {/*Create an account?*/}
                    {/*</label>*/}
                    {/*</div>*/}
                  </div>
                  <h4 className="txt-m-124 cl3 p-b-19">
                  </h4>
                  <div>
                    <div className="txt-s-101 cl6 p-b-10">
                      order note
                    </div>
                    <textarea className="plh2 txt-s-120 cl3 size-a-38 bo-all-1 bocl15 p-rl-20 p-tb-10 focus1"
                              name="note" placeholder="Ghi chú order của bạn " onChange={this.onChange}/>
                  </div>
                </div>
              </div>
              <div className="col-md-5 col-lg-4 p-b-50">
                <div className="how-bor4 p-t-35 p-b-40 p-rl-30 m-t-5">
                  <h4 className="txt-m-124 cl3 p-b-11">
                    Sản phẩm order
                  </h4>
                  <div className="flex-w flex-sb-m txt-m-103 cl6 bo-b-1 bocl15 p-b-21 p-t-18">
                 <span>Sản phẩm</span>
                 <span>Tiền</span>
                 </div>
                 {/*  */}
                 {this.props.cart.map((item, index) =>
                   <div key={index} className="flex-w flex-sb-m txt-s-101 cl6 bo-b-1 bocl15 p-b-21 p-t-18">
                   <span>
                     {item.name}
                     <img className="m-rl-3" src="images/icons/icon-multiply.png" alt="icon"/>
                      {item.quantity}
                   </span>
                   <span>
                      {item.price * item.quantity}
                   </span>
                   </div>
                   )}
                   {/*  */}
                   <div className="flex-w flex-m txt-m-103 bo-b-1 bocl15 p-tb-23">
                      <span className="size-w-61 cl6">
                         Tổng tiền
                      </span>
                      <span className="size-w-62 cl9">
                         {this.props.sum}VND
                      </span>
                   </div>
                   <div className="flex-w flex-m txt-m-103 p-tb-23">
                         <span className="size-w-61 cl6">
                            Tổng cộng
                         </span>
                         <span className="size-w-62 cl10">
                             {this.props.sum}VND
                         </span>
                   </div>
                  <div className="bo-all-1 bocl15 p-b-25 m-b-30">
                    <div className="flex-w flex-m bo-b-1 bocl15 p-rl-20 p-tb-16">
                      <input className="m-r-15" id="radio1" type="radio" name="pay" defaultValue="payment"
                             defaultChecked="checked"/>
                      <label className="txt-m-103 cl6" htmlFor="radio1">
                        Kiểm tra thẻ
                      </label>
                    </div>
                    <div className="content-payment bo-b-1 bocl15 p-rl-20 p-tb-15">
                      <p className="txt-s-120 cl9">
                        Vui lòng kiểm tra thẻ
                      </p>
                    </div>
                    <div className="flex-w flex-m p-rl-20 p-t-17 p-b-10">
                      <input className="m-r-15" id="radio2" type="radio" name="pay" defaultValue="paypal"/>
                      <label className="txt-m-103 cl6" htmlFor="radio2">
                        Paypal
                      </label>
                      <div className="w-full p-l-29 p-t-16">
                        <a href="#"><img src="images/icons/paypal.png" alt="IMG"/></a>
                      </div>
                    </div>
                    <div className="content-paypal bo-tb-1 bocl15 p-rl-20 p-tb-15 m-tb-10 dis-none">
                      <p className="txt-s-120 cl9">
                        Thanh toán thông qua PayPal
                      </p>
                    </div>
                    <div className="p-l-49">
                      <a href="#" className="txt-s-120 cl6 hov-cl10 trans-04 p-t-10">
                        What is paypal?
                      </a>
                    </div>
                  </div>
                  <button onClick={this.checkOut.bind(this)}
                          className="flex-c-m txt-s-105 cl0 bg10 size-a-21 hov-btn2 trans-04 p-rl-10">
                    Thanh toán
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    cart : state.cart.cart,
    sum : state.cart.sum,
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return{

  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Checkout)