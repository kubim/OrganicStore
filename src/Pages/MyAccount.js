import React, { Component } from 'react';
import addjs from '../jslib/jslib';
import axios from "axios";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import ReactLoading from "react-loading";
import ChangePassword from "../component/MyAccount/ChangePassword";
import Profile from "../component/MyAccount/Profile";
import Orders from "../component/MyAccount/Orders";
import {logout} from "../actions";
class MyAccount extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading:true,
            profile:null,
            orders:[],
            isOrder:false,
        };
    }
    async getData(){
      await axios.get('https://api-organic.herokuapp.com/v1/users/'+this.props.account.user_id)
          .then(res => {
              this.setState({
                  profile:res.data,
              });
              axios.get('https://api-organic.herokuapp.com/v1/user-order/'+this.props.account.user_id).then(res2=> {
                  this.setState({
                      orders: res2.data,
                      isLoading: false,
                  });
              })
            addjs();
          }).catch(err=>{alert("Get user fail!")})
    }
    componentDidMount(){
        this.getData();
    }
  render() {
    return (
        <div>
            <section className="how-overlay2 bg-img1" style={{backgroundImage: 'url(images/post.jpg)'}}>
              <div className="container">
                <div className="txt-center p-t-160 p-b-165">
                  <h2 className="txt-l-101 cl0 txt-center p-b-14 respon1">
                    Tài khoản
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
            <div className="bg0 p-t-95 p-b-70">
                {this.state.isLoading?(<ReactLoading style={{width:'100px',margin:'auto'}} type={"bubbles"} color={"green"} height={'10'} width={'10'} />):(
              <div className="container">
                {/* Tab03 */}
                <div className="tab03">
                  <div className="row">
                    <div className="col-md-3 col-lg-2 p-b-30">
                      {/* Nav tabs */}
                      <ul className="nav nav-tabs" role="tablist">
                        <li className="nav-item p-b-16">
                          <img src="images/avatar.jpg" alt="PRODUCT" />
                        </li>
                        <li className="nav-item p-b-16">
                          <a className="nav-link active" data-toggle="tab" href="#accountdetail" role="tab">Thông tin tài khoản</a>
                        </li>
                        <li className="nav-item p-b-16">
                          <a className="nav-link" data-toggle="tab" href="#dashboard" role="tab">Thống kê</a>
                        </li>
                        <li className="nav-item p-b-16">
                          <a className="nav-link" data-toggle="tab" href="#orders" role="tab">Đơn đặt hàng</a>
                        </li>
                        <li className="nav-item p-b-16">
                          <a className="nav-link" data-toggle="tab" href="#addresses" role="tab">Địa chỉ</a>
                        </li>
                        <li className="nav-item p-b-16">
                          <a className="nav-link" data-toggle="tab" href="#changepassword" role="tab">Đổi mật khẩu</a>
                        </li>
                        <li className="nav-item p-b-16">
                          <Link onClick={this.props.logout} to="/shop/1" className="nav-link" href="#">Đăng xuất</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-9 col-lg-10 p-b-30">
                      {/* Tab panes */}
                      <div className="tab-content p-l-70 p-l-0-lg">
                        {/*!Detail- */}
                        <div className="tab-pane fade show active" id="accountdetail" role="tabpanel">
                            <Profile profile={this.state.profile}/>
                        </div>
                        {/* - */}
                        <div className="tab-pane fade" id="dashboard" role="tabpanel">
                          <p>
                            Thống kê
                          </p>
                        </div>
                        {/* - */}
                        <div className="tab-pane fade" id="orders" role="tabpanel">
                            <Orders orders={this.state.orders}/>
                        </div>
                        {/* - */}
                        <div className="tab-pane fade" id="addresses" role="tabpanel">
                          <p className="txt-s-101 cl6">
                            Các địa chỉ bên dưới sẽ được dùng để thanh toán mặc định
                          </p>
                          <div className="flex-w flex-sb p-t-37">
                            <div className="size-w-63 flex-t w-full-sm p-b-35">
                              <div className="size-w-53 p-r-30">
                                <h5 className="txt-m-109 cl3 p-b-7">
                                  Địa chỉ thanh toán
                                </h5>
                                <p className="txt-s-101 cl6">
                                  Chưa được thiết lập
                                </p>
                              </div>
                              <a href="#" className="txt-s-115 cl10 hov12 hov-cl10 p-t-6">
                                Edit
                              </a>
                            </div>
                            <div className="size-w-63 flex-t w-full-sm p-b-35">
                              <div className="size-w-53 p-r-30">
                                <h5 className="txt-m-109 cl3 p-b-7">
                                  Địa chỉ giao hàng
                                </h5>
                                <p className="txt-s-101 cl6">
                                  Chưa được thiết lập
                                </p>
                              </div>
                              <a href="#" className="txt-s-115 cl10 hov12 hov-cl10 p-t-6">
                                Edit
                              </a>
                            </div>
                          </div>
                        </div>
                        {/* - */}
                        <div className="tab-pane fade" id="changepassword" role="tabpanel">
                            <ChangePassword token={this.props.account.auth_token}/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>)}
            </div>
        </div>
    );
  }
}
const mapStateToProps = (state) => {
    return {
        account: state.login.account
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return{
        logout : () => {
            dispatch(logout());
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(MyAccount)