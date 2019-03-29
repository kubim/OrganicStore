import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import addjs from '../jslib/jslib';
import axios from "axios";
import {connect} from "react-redux";
import ReactLoading from "react-loading";
class WishList extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading:true,
      wishlist:[],
      products:[],
    };
  }
  async getData(){
    this.setState({products:[]})
    await axios.get('https://organicshoptl.herokuapp.com/api/wishlists-users/'+this.props.account.user_id)
        .then(res => {
          this.setState({
            wishlist:res.data
          })
          res.data.map((item)=>{
            axios.get('https://organicshoptl.herokuapp.com/api/products/'+item.product_id).then(res=>{
                this.setState({
                  products:this.state.products.concat(res.data)
                })
            })
          });
          this.setState({
            isLoading:false,
          });
          addjs();
        }).catch(err=>{alert("Get data fail!")})
  }
  async delData(idwishlist){
    await axios.delete('https://organicshoptl.herokuapp.com/api/wishlists/'+idwishlist).then(res=>{
      this.getData();
    })
  }
  onDelete(id){
    var idwishlist  = this.state.wishlist.find(x=>x.product_id===id).id;
    this.delData(idwishlist);
  }
  componentDidMount(){
    this.getData();
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
          {this.state.isLoading?(<ReactLoading style={{width:'100px',margin:'auto'}} type={"bubbles"} color={"green"} height={'10'} width={'10'} />):(
          <div className="container">
            <div className="wrap-table-shopping-cart rs1-table">
              <table className="table-shopping-cart">
                <tbody>
                  <tr className="table_head bg12">
                    <th className="column-1 p-l-30">Tên sản phẩm</th>
                    <th className="column-2">Giá</th>
                    <th className="column-3">Tình trạng</th>
                    <th className="column-4">Chi tiết</th>
                  </tr>
                  {this.state.products.map((item,index)=>
                  <tr className="table_row">
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
                      <div className="flex-t">
                        {item.stock===0?(<span className="size-w-53 txt-m-104 cl6">Hết hàng</span>):(
                        <div>
                        <img className="m-t-4 m-r-8" src="images/icons/icon-list3.png" alt="IMG" />
                        <span className="size-w-53 txt-m-104 cl6">
                          Còn hàng
                        </span>
                        </div>)}
                      </div>
                    </td>
                    <td className="column-4">
                      <div className="flex-w flex-sb-m">
                        <Link to={"/singleproduct/"+item.id} className="flex-c-m txt-s-103 cl6 size-a-2 how-btn1 bo-all-1 bocl11 hov-btn1 trans-04">
                          Xem
                          <span className="lnr lnr-chevron-right m-l-7" />
                          <span className="lnr lnr-chevron-right" />
                        </Link>
                        <div onClick={this.onDelete.bind(this,item.id)} className="fs-15 hov-cl10 pointer">
                          <span className="lnr lnr-cross" />
                        </div>
                      </div>
                    </td>
                  </tr>)}
                </tbody>
                </table>
            </div>
            <div className="flex-w flex-sb-m p-t-30">
              <div className="flex-w flex-m m-r-50 m-tb-10">
                <div className="flex-c-m txt-s-103 cl6 size-h-9 how-btn1 bo-all-1 bocl11 hov-btn1 trans-04 pointer p-rl-29 m-tb-10 m-r-30">
                  Xóa tất cả  
                </div>
                {/*<div className="flex-c-m txt-s-103 cl6 size-h-9 how-btn1 bo-all-1 bocl11 hov-btn1 trans-04 pointer p-rl-29 m-tb-10">*/}
                  {/*Cập nhật */}
                {/*</div>*/}
              </div>
              <Link to={"/shop/0"} className="flex-c-m txt-s-103 cl0 bg10 size-h-9 hov-btn2 trans-04 pointer p-rl-29 m-tb-10">
                Tiếp tục mua hàng
              </Link>
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

  }
}
export default connect(mapStateToProps,mapDispatchToProps)(WishList)