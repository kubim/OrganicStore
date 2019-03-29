import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Orders extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                {this.props.orders.length===0?
                <div className="bo-all-1 bocl15 flex-w flex-sb-m p-rl-30 p-tb-10 p-rl-15-ssm">
                    <div className="flex-t p-tb-8 m-r-30">
                        <img className="m-t-6 m-r-10" src="images/icons/icon-list.png" alt="IMG" />
                        <span className="size-w-53 txt-s-101 cl6">
                                Chưa có sản phẩm nào được order.
                              </span>
                    </div>
                    <Link to="/shop/1" className="flex-c-m txt-s-105 cl0 bg10 size-a-42 hov-btn2 trans-04 p-rl-10 m-tb-8">
                        Mua ngay
                    </Link>
                </div>:
                <div className="wrap-table-shopping-cart rs1-table">
                    <table className="table-shopping-cart">
                        <tbody><tr className="table_head bg12">
                            <th className="column-1 p-l-30">Địa chỉ</th>
                            <th className="column-2">Tên người nhận</th>
                            <th className="column-3">Tình trạng</th>
                            <th className="column-4">Chi tiết</th>
                        </tr>
                        {this.props.orders.map((item,index)=>
                            <tr key={index} className="table_row">
                                <td className="column-1">
                                    <div className="flex-w flex-m">
                                        {/*<div className="wrap-pic-w size-w-50 bo-all-1 bocl12 m-r-30">*/}
                                            {/*<img src="images/best-sell-01.jpg" alt="IMG" />*/}
                                        {/*</div>*/}
                                        <span>
                                            {item.owner_address}
                                        </span>
                                    </div>
                                </td>
                                <td className="column-2">
                                    {item.owner_name}
                                </td>
                                <td className="column-3">
                                    <div className="flex-t">
                                        <span className="size-w-53 txt-m-104 cl6">
                                            {item.ref_order_status_code === "w" ?"WAITING"
                                                : (item.ref_order_status_code === "s" ?"SHIPPING"
                                                        : (item.ref_order_status_code === "d" ?"DELIVERED" :"CANCEL")
                                                )
                                            }
                                        </span>
                                    </div>
                                </td>
                                <td className="column-4">
                                    <div className="flex-w flex-sb-m">
                                        <Link to={"/singleproduct/:id"} className="flex-c-m txt-s-103 cl6 size-a-2 how-btn1 bo-all-1 bocl11 hov-btn1 trans-04">
                                            Xem
                                            <span className="lnr lnr-chevron-right m-l-7" />
                                            <span className="lnr lnr-chevron-right" />
                                        </Link>
                                        {/*<div className="fs-15 hov-cl10 pointer">*/}
                                            {/*<span className="lnr lnr-cross" />*/}
                                        {/*</div>*/}
                                    </div>
                                </td>
                            </tr>
                        )}
                        </tbody></table>
                </div>}
            </div>
        );
    }
}
export default Orders