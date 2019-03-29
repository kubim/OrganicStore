import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import{connect} from 'react-redux';
import {addCart, delCart,downQuantity} from '../actions/index'
import addjs from '../jslib/jslib';
class Cart extends Component {
  componentDidMount(){
    addjs();
  }
  onDeleteCart(product,event){
    event.preventDefault();
    this.props.delCart(product);
  }
  //QUAN
  upQuantity = product =>e=>{
    e.preventDefault();
    this.props.addCart(product);
  }
  downQuantity = product =>e=>{
    e.preventDefault();
    this.props.downQuantity(product);
  }
  render() {
    return (
      <div>
        <section className="how-overlay2 bg-img1" style={{backgroundImage: 'url(images/post.jpg)'}}>
          <div className="container">
            <div className="txt-center p-t-160 p-b-165">
              <h2 className="txt-l-101 cl0 txt-center p-b-14 respon1">
                Giỏ hàng
              </h2>
              <span className="txt-m-201 cl0 flex-c-m flex-w">
                <a href="home.htm" className="txt-m-201 cl0 hov-cl10 trans-04 m-r-6">
                  Home
                </a>
                <span>
                  / Cart
                </span>
              </span>
            </div>
          </div>
        </section>
        {/* content page */}
        {this.props.cart.length===0?(
        <div className="bg0 p-tb-100">
          <div className="container">
              <div className="flex-col-l p-t-68">
                <span className="txt-m-123 cl3 p-b-18">
                  Chưa có sản phẩm nào
                </span>
                <Link  to="/shop/1" className="flex-c-m txt-s-105 cl0 bg10 size-a-34 hov-btn2 trans-04 p-rl-10 m-t-43">
                  <button  className="txt-s-101 cl9 hov-cl10 trans-04" style={{color: 'white'}}>Tiếp tục mua sắm</button>
                </Link>
              </div>
          </div>
        </div>):(
        <div className="bg0 p-tb-100">
          <div className="container">
            <form>
              <div className="wrap-table-shopping-cart">
                <table className="table-shopping-cart">
                  <tbody><tr className="table_head bg12">
                      <th className="column-1 p-l-30">Sản phẩm</th>
                      <th className="column-2">Giá</th>
                      <th className="column-3">Số lượng</th>
                      <th className="column-4">Tiền</th>
                    </tr>
                  {this.props.cart.map((item,index) =>
                      <tr key={index} className="table_row">
                        <td className="column-1">
                          <div className="flex-w flex-m">
                            <div className="wrap-pic-w size-w-50 bo-all-1 bocl12 m-r-30">
                              <img src={'https://organic-store.herokuapp.com/api/shop/image/'+item.id} alt="IMG" />
                            </div>
                            <span>
                              {item.name}
                            </span>
                          </div>
                        </td>
                        <td className="column-2">
                          {item.price}vnd
                        </td>
                        <td className="column-3">
                          <div className="wrap-num-product flex-w flex-m bg12 p-rl-10">
                            <div onClick={this.downQuantity(item)} className="btn-num-product-down flex-c-m fs-29" />
                            <input className="txt-m-102 cl6 txt-center num-product" type="number" name="num-product" value={item.quantity} />
                            <div onClick={this.upQuantity(item)} className="btn-num-product-up flex-c-m fs-16" />
                          </div>
                        </td>
                        <td className="column-4">
                          <div className="flex-w flex-sb-m">
                          <span>
                              {item.price*item.quantity}vnd
                          </span>
                            <div className="fs-15 hov-cl10 pointer">
                              <button onClick={this.onDeleteCart.bind(this,item)} ><span className="lnr lnr-cross" /></button>
                            </div>
                          </div>
                        </td>
                      </tr>
                  )}
                  </tbody></table>
              </div>
              <div className="flex-w flex-sb-m p-t-20">
                <div className="flex-w flex-m m-r-50 m-tb-10">
                  <input className="size-a-31 bo-all-1 bocl15 txt-s-123 cl6 plh1 p-rl-20 focus1 m-r-30 m-tb-10" type="text" name="coupon" placeholder="Mã giảm giá" />
                  <div className="flex-c-m txt-s-105 cl0 bg10 size-a-32 hov-btn2 trans-04 pointer p-rl-10 m-tb-10">
                    Áp dụng
                  </div>
                </div>
              </div>
              <div className="flex-col-l p-t-68">
                <span className="txt-m-123 cl3 p-b-18">
                  CART Thành tiền
                </span>
                <div className="flex-w flex-m bo-b-1 bocl15 w-full p-tb-18">
                  <span className="size-w-58 txt-m-109 cl3">
                    Tổng tiền
                  </span>
                  <span className="size-w-59 txt-m-104 cl6">
                    {this.props.sum}vnd
                  </span>
                </div>
                <div className="flex-w flex-m bo-b-1 bocl15 w-full p-tb-18">
                  <span className="size-w-58 txt-m-109 cl3">
                    Thành tiền
                  </span>
                  <span className="size-w-59 txt-m-104 cl10">
                    {this.props.sum}vnd
                  </span>
                </div>
                <Link  to="/checkout" className="flex-c-m txt-s-105 cl0 bg10 size-a-34 hov-btn2 trans-04 p-rl-10 m-t-43">
                  <button  className="txt-s-101 cl9 hov-cl10 trans-04" style={{color: 'white'}}>Thanh toán</button>
                </Link>
              </div>
            </form>
          </div>
        </div>)}
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
    delCart : (product) => {
      dispatch(delCart(product));
    },
    addCart : (product) => {
      dispatch(addCart(product));
    },
    downQuantity : (product) => {
      dispatch(downQuantity(product));
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)