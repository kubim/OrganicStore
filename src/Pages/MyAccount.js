import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import addjs from '../jslib/jslib';
class MyAccount extends Component {
    constructor(props){
        super(props);
        this.state = {
            editOpen:false,
        };
    }
    componentDidMount(){
        addjs();
    }
    changeEditOpen(){
        this.setState({
            editOpen:!this.state.editOpen
        })
    }
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
                      <a className="nav-link" href="#">Đăng xuất</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-9 col-lg-10 p-b-30">
                  {/* Tab panes */}
                  <div className="tab-content p-l-70 p-l-0-lg">
                    {/*!Detail- */}
                    <div className="tab-pane fade show active" id="accountdetail" role="tabpanel">
                      <p className="txt-s-101 cl6 p-b-18">
                        Chào <span className="txt-s-108">châu</span> (Không phải <span className="txt-s-108">châu </span>? <a href="#" className="txt-s-101 cl6 hov-cl10">Đăng xuất</a>)
                      </p>
                      <form action method="POST" role="form">
                          <legend>Thông tin</legend>
                          <div className="form-group">
                              <label htmlFor>Họ và tên</label>
                              <input disabled={!this.state.editOpen} type="text" className="form-control"  defaultValue="Vương Lữ Trân Châu"/>
                          </div>
                          <div className="form-group">
                              <label htmlFor>Số điện thoại</label>
                              <input disabled={!this.state.editOpen} type="text" className="form-control" defaultValue={'0123456789'}/>
                          </div>
                          <div className="form-group">
                              <label htmlFor>Địa chỉ</label>
                              <input disabled={!this.state.editOpen} type="text"  className="form-control"  defaultValue="Hội An"/>
                          </div>
                          <div className="form-group">
                              <label htmlFor>Email</label>
                              <input disabled={!this.state.editOpen} type="text"  className="form-control" defaultValue="chauvuong97@gmail.com"/>
                          </div>
                          <button type="button" style={this.state.editOpen?{display:'none'}:null}  onClick={this.changeEditOpen.bind(this)}
                                  className="btn btn-warning">Cập nhật
                          </button>
                          <button style={this.state.editOpen?null:{display:'none'}} onClick={this.changeEditOpen.bind(this)} type="button"
                                  className="btn btn-success">Lưu
                          </button>
                          <button style={this.state.editOpen?null:{display:'none'}} onClick={this.changeEditOpen.bind(this)} type="button"
                                  className="btn btn-danger">Hủy
                          </button>
                      </form>
                    </div>
                    {/* - */}
                    <div className="tab-pane fade" id="dashboard" role="tabpanel">
                      <p>
                        Thống kê
                      </p>
                    </div>
                    {/* - */}
                    <div className="tab-pane fade" id="orders" role="tabpanel">
                      <div className="bo-all-1 bocl15 flex-w flex-sb-m p-rl-30 p-tb-10 p-rl-15-ssm">
                        <div className="flex-t p-tb-8 m-r-30">
                          <img className="m-t-6 m-r-10" src="images/icons/icon-list.png" alt="IMG" />
                          <span className="size-w-53 txt-s-101 cl6">
                            Chưa có sản phẩm nào được order.
                          </span>
                        </div>
                        <a href="shop-sidebar-grid.html" className="flex-c-m txt-s-105 cl0 bg10 size-a-42 hov-btn2 trans-04 p-rl-10 m-tb-8">
                          Mua ngay
                        </a>
                      </div>
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
                      <form>
                        <div className="row">
                          <h5 className="txt-m-109 cl3 p-rl-15 p-t-10 p-b-17">
                            Thay đổi password
                          </h5>
                          <div className="col-12 p-b-23">
                            <div>
                              <div className="txt-s-101 cl6 p-b-10">
                                Passwork hiện tại
                              </div>
                              <input className="txt-s-120 cl3 size-a-21 bo-all-1 bocl15 p-rl-20 focus1" type="text" name="current-pw" />
                            </div>
                          </div>
                          <div className="col-12 p-b-23">
                            <div>
                              <div className="txt-s-101 cl6 p-b-10">
                                Passwork mới
                              </div>
                              <input className="txt-s-120 cl3 size-a-21 bo-all-1 bocl15 p-rl-20 focus1" type="text" name="new-pw" />
                            </div>
                          </div>
                          <div className="col-12 p-b-23">
                            <div>
                              <div className="txt-s-101 cl6 p-b-10">
                                Nhập lại password
                              </div>
                              <input className="txt-s-120 cl3 size-a-21 bo-all-1 bocl15 p-rl-20 focus1" type="text" name="cf-new-pw" />
                            </div>
                          </div>
                          <div className="flex-w p-rl-15 p-t-17">
                            <button className="flex-c-m txt-s-105 cl0 bg10 size-a-43 hov-btn2 trans-04 p-rl-10">
                              Lưu
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default MyAccount