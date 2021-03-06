import React, {Component} from 'react';
import  { connect } from 'react-redux';
import ReactLoading from 'react-loading';
import {addCart} from "../actions/index";         //QUAN
import Slider from 'rc-slider';
import addjs from "../jslib/jslib";
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';

import axios from 'axios';
import {Link,NavLink} from "react-router-dom";

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;
class Shop extends Component {
    constructor(props) {
        super(props);
        var idcat=1;
        // alert("a"+this.props.match.params.id);
        if(this.props.match.params.id !==null) idcat =this.props.match.params.id;
        this.state = {
            isLoading:true,
            curpage:1,
            page:0,
            sliderValues: [10, 100],
            isfilter:false,
            filter:[],
            filter1:[],
            product:[],
            categories:[],
            soL:[],
            productsOfC:[],
            listPsOfC:[],
            icat:idcat,
           productF:[],
            ifrate:0,
            ifcat:this.props.match.params.id,
            ifprice:0,
            ifprice1:1000000
        };
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        addjs();
    }
    async getData(){
        await axios.get('https://api-organic.herokuapp.com/v1/categories').then(res =>{
            this.setState({
                categories:res.data,
            });
            this.state.categories.map((it,index) => {  this.soPinC(it.id)});
                axios.get('https://organicshoptl.herokuapp.com/api/categories/'+this.state.icat).then(res =>{
                    this.setState({
                        product:res.data,
                        filter:res.data,
                        // product
                        page:Math.round(res.data.length/6.0),
                        isLoading:false,
                    });
                addjs();
            }).catch(err=>{alert("Get products fail!")})
        }).catch(err=>{alert("Get categories fail!")})
    }
    componentDidMount(){
        this.getData();
    }
    getprobyidcat=(id)=>{
        var result=0;
        console.log("id"+id);
        // this.state.soL.push(id);
        axios.get('https://organicshoptl.herokuapp.com/api/categories/'+id).then(res =>{
            this.setState({
                listPsOfC:res.data,
            });
            // alert("toigetprobyid roi");
            console.log(this.state.listPsOfC)
        }).catch(err1=>{alert("Get productsOfC fail!")});
        return result;
    }
    soPinC =(id)=>{
        // event.preventDefault();
        var result=0;
        console.log("id"+id);
        // this.state.soL.push(id);
        axios.get('https://organicshoptl.herokuapp.com/api/categories/'+id).then(res =>{
            //      callApi(0,`categories/${id}`,'GET',null).then( res =>{
            this.setState({
                productsOfC:res.data,

            });
            // this.state.listPsOfC.push({id:id, list: this.state.productsOfC});
            // this.setState(this.state);
            var obj = {id:id, lengthC:this.state.productsOfC.length};
            result = this.state.productsOfC.length;
            this.state.soL.push(obj);
            this.setState(this.state);
            // this.state.listPsOfC.push({id:id, ProductC:this.state.productsOfC});
            // this.setState(this.state);
            // alert("rs"+result);
            // addjs();
        }).catch(err1=>{alert("Get productsOfC fail!")});
        // console.log(this.state.soL);
        // alert("sl"+this.state.soL);

        return result;
    }
    setCurPage(i){
        this.setState({
            curpage:i,
        })
    }
    createPage(){
        let page = [];
        // Outer loop to create parent
        for (let i = 1; i <=this.state.page; i++) {
            page.push(<a href="javascript:void(0)" onClick={this.setCurPage.bind(this,i)} className={this.state.curpage===i?'active-pagi1 flex-c-m txt-s-115 cl6 size-a-23 bo-all-1 bocl15 hov-btn1 trans-04 m-all-3':'flex-c-m txt-s-115 cl6 size-a-23 bo-all-1 bocl15 hov-btn1 trans-04 m-all-3'}>{i}</a>);
        }
        return page;
    }
    handleChange = sliderValues => {
        this.setState({ sliderValues });
        addjs();
    };
    getmaincat=(id)=>{
        return this.state.categories.find(x=>x.id===id).parent_id;
    }

     catfilter = id =>event=>{
        // alert(id);


        // if(id==0){
        //     this.setState({filter:this.state.product});
        // }
        // else
            {

            // this.getprobyidcat(id);
                axios.get('https://organicshoptl.herokuapp.com/api/categories/'+id).then(res =>{
                    // alert("ifrate"+this.state.ifrate+" length"+res.data.length);
                    this.setState({
                        isfilter:true,
                        // filter:res.data,
                        filter:res.data.filter(x=>(
                            (x.rating>=this.state.ifrate)
                            &&
                            (x.price>=this.state.ifprice) &&
                            (x.price<=(this.state.ifprice1))
                        )),
                        ifcat:id,


                    });
                    // alert("toigetprobyid roi"+this.state.filter.length);
                    console.log(this.state.filter);
                }).catch(err1=>{alert("Get productsOfC fail!")});
            // this.setState({
            //
            //     // filter:this.state.product.filter(x=>this.getmaincat(x.tbl_category_id)===id)
            //
            //         // .filter(x=>(this.getmaincat(x.tbl_category_id)===this.state.ifcat) )
            //
            //     // :this.state.listPsOfC,
            //
            // })
                console.log("ha");
                console.log(this.state.filter);
            // this.filtermulti(event)
        }
        addjs();
    }
    ratingfilter=id=>event=>{
        // alert("rating"+id);
        // this.setState({
        //     isfilter:true
        // })
        for (var i = 1; i <= 5; i++)
            document.getElementById(i).style.color = '#333';
        for (var i = 1; i <= id; i++)
            document.getElementById(i).style.color = 'yellow';
        document.getElementById('star').value = id;
        axios.get('https://organicshoptl.herokuapp.com/api/categories/'+this.state.ifcat).then(res =>{
            // alert("catloc"+this.state.ifcat);
            this.setState({
                isfilter:true,
                // filter:res.data,
                filter:res.data.filter(x=>(
                    (x.rating>=id)
                    &&
                    (x.price>=this.state.ifprice) &&
                    (x.price<=(this.state.ifprice1))
                )),
                ifrate:id,


            });
            // alert("toigetprobyid cua rate roi");
            // console.log(this.state.listPsOfC)
        }).catch(err1=>{alert("Get productsOfC fail!")});
        // this.setState({
        //     // filter:this.state.product.filter(x=>x.rating>id)
        //     ifrate:id,
        //
        //     filter:this.state.filter.filter(x=>((this.getmaincat(x.tbl_category_id)===this.state.ifcat) &&
        //         (x.rating>this.state.ifrate) &&
        //         (x.price>=this.state.ifprice) && (x.price<=(this.state.ifprice1))))
        //
        // })
        // this.filtermulti(event)
        addjs();
    }
    pricefilter=event=>{
        axios.get('https://organicshoptl.herokuapp.com/api/categories/'+this.state.ifcat).then(res =>{
            // alert("catloc"+this.state.ifcat);
            this.setState({
                isfilter:true,

                // filter:res.data,
                filter:res.data.filter(x=>(
                    (x.rating>=this.state.ifrate)
                    &&
                    (x.price>=this.state.sliderValues[0]*1000) &&
                    (x.price<=this.state.sliderValues[1]*1000)
                )),
                ifprice:this.state.sliderValues[0]*1000,
                ifprice1:this.state.sliderValues[1]*1000,


            });
            // alert("toigetprobyid cua rate roi");
            // console.log(this.state.listPsOfC)
        }).catch(err1=>{alert("Get productsOfC fail!")});
        // this.setState({
        //     isfilter:true,
        //     // filter:this.state.product.filter(x=> (x.price>(this.state.sliderValues[0]*1000)) && (x.price<(this.state.sliderValues[1]*1000)))
        //     ifprice:this.state.sliderValues[0]*1000,
        //     ifprice1:this.state.sliderValues[1]*1000,
        //
        //     filter:this.state.product.filter(x=>(this.getmaincat(x.tbl_category_id)===this.state.ifcat) &&
        //         (x=>x.rating>this.state.ifrate) &&
        //         (x.price>=this.state.ifprice) && (x.price<=(this.state.ifprice1)))
        //
        // })
        // this.filtermulti(event)
        addjs();
    }
    createRate(rating) {
        let rate = [];
        // Outer loop to create parent
        for (let i = 1; i <= rating; i++) {
            rate.push(<i className="fa fa-star m-rl-1"/>);
        }
        return rate;
    }
    sortfilter=event=>{

        this.setState({
            isfilter:true
        })
        switch (event.target.value) {
            case '1':
                this.setState({
                    filter:this.state.filter.sort(function(a, b) {
                        if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
                        if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
                        return 0;
                    })

                })
                break;
            case '2':{
                this.setState({
                    filter:this.state.filter.sort((a,b)=> a.price-b.price)
                })
                break;
            }
            case '3':{
                this.setState({
                    filter:this.state.filter.sort((a,b)=> b.price-a.price)
                })
                break;
            }
            default:
                this.setState({
                    filter:this.state.filter
                })
                break;
        }
        addjs();
    }
    searchfilter= event=>{;
        var s = document.getElementById("search").value.toLowerCase();
        this.setState({
            isfilter:true,
            filter:this.state.product.filter(x=>x.name.toLowerCase().includes(s))
        })
        addjs();
    }

    //QUAN
    addCart(product){
        this.props.addCart(product);
    //    addjs();
    }
    //QUAN
  render() {
      const { sliderValues } = this.state;
        return (
            <div>
                    <div>
                {/* Title page */}
                <section className="how-overlay2 bg-img1" style={{backgroundImage: 'url(images/post.jpg)'}}>
                    <div className="container">
                        <div className="txt-center p-t-160 p-b-165">
                            <h2 className="txt-l-101 cl0 txt-center p-b-14 respon1">
                                shop
                            </h2>
                            <span className="txt-m-201 cl0 flex-c-m flex-w">
                {/*<a href="home.htm" className="txt-m-201 cl0 hov-cl10 trans-04 m-r-6">*/}
                  {/*Home*/}
                {/*</a>*/}
                 <NavLink to="/" className="txt-m-201 cl0 hov-cl10 trans-04 m-r-6">
                    Home
                 </NavLink>
                <span>
                  / Sản phẩm
                </span>
              </span>
                        </div>
                    </div>
                </section>
                {/* Content page */}
                <section className="bg0 p-t-85 p-b-45">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-10 col-md-4 col-lg-3 m-rl-auto p-b-50">
                                <div className="leftbar p-t-15">
                                    {/*  */}
                                    <div className="size-a-21 pos-relative">
                                        <input className="s-full bo-all-1 bocl15 p-rl-20" type="text" id="search"
                                               placeholder="Search sản phẩm..."/>
                                        <button onClick={this.searchfilter} className="flex-c-m fs-18 size-a-22 ab-t-r hov11">
                                            <img className="hov11-child trans-04" src="images/icons/icon-search.png"
                                                 alt="ICON"/>
                                        </button>
                                    </div>
                                    {/*  */}
                                    <div className="p-t-45">
                                        <h4 className="txt-m-101 cl3">
                                            LỌC THEO GIÁ
                                        </h4>
                                        <div className="filter-price p-t-32">
                                            {/*<div className="wra-filter-bar">*/}
                                                {/*<div id="filter-bar"/>*/}
                                            {/*</div>*/}
                                            <div style={{ width: '98%' , margin: 0 }}>
                                                {/*<p>Range with custom handle</p>*/}
                                                {sliderValues[0]}.000 - {sliderValues[1]}.000VND
                                                <Range onChange={this.handleChange} min={0} max={1000} defaultValue={sliderValues} tipFormatter={value => `${value}`} />
                                            </div>
                                            <div className="flex-sb-m flex-w p-t-16">
                                                {/*<div className="txt-s-115 cl9 p-t-10 p-b-10 m-r-20">*/}
                                                    {/*Giá: <span id="value-lower"></span>{value} - <span*/}
                                                    {/*id="value-upper">20</span>*/}
                                                {/*</div>*/}
                                                <div>
                                                    {/*<a href="#" className="txt-s-107 cl6 hov-cl10 trans-04">*/}
                                                        {/*Lọc*/}
                                                    {/*</a>*/}
                                                    <a onClick={this.pricefilter} href="javascript:void(0)" className="txt-s-107 cl6 hov-cl10 trans-04">
                                                        Lọc
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr/>
                                    {/*  */}
                                    <div>
                                        <h4 className="txt-m-101 cl3 p-b-20">
                                            DANH MỤC
                                        </h4>
                                        <ul>
                                            {this.state.categories.map((item,index) => { return (item.id <=4)?
                                            <li className="p-b-5">
                                                <a href="javascript:void(0)" onClick={this.catfilter(item.id)}
                                                   className="flex-sb-m flex-w txt-s-101 cl6 hov-cl10 trans-04 p-tb-3">
                                                  <span className="m-r-10">
                                                      {item.name}
                                                  </span>
                                                    <span>
                                                        {this.state.soL.map((item1,index1) => { return (item1.id === item.id)?
                                                            <div key={index1}>{item1.lengthC}</div>:null})}
                                                  </span>
                                                </a>
                                            </li>:null})}
                                            {/*<li className="p-b-5">*/}
                                                {/*<a href="javascript:void(0)" onClick={this.catfilter(1)}*/}
                                                   {/*className="flex-sb-m flex-w txt-s-101 cl6 hov-cl10 trans-04 p-tb-3">*/}
                                                  {/*<span className="m-r-10">*/}
                                                      {/*Rau,củ*/}
                                                  {/*</span>*/}
                                                    {/*<span>*/}
                                                        {/*2*/}
                                                  {/*</span>*/}
                                                {/*</a>*/}
                                            {/*</li>*/}
                                            {/*<li className="p-b-5">*/}
                                                {/*<a href="javascript:void(0)" onClick={this.catfilter(2)}*/}
                                                   {/*className="flex-sb-m flex-w txt-s-101 cl6 hov-cl10 trans-04 p-tb-3">*/}
                                                  {/*<span className="m-r-10">*/}
                                                      {/*Trái cây*/}
                                                  {/*</span>*/}
                                                    {/*<span>*/}
                                                        {/*2*/}
                                                  {/*</span>*/}
                                                {/*</a>*/}
                                            {/*</li>*/}
                                            {/*<li className="p-b-5">*/}
                                                {/*<a href="javascript:void(0)" onClick={this.catfilter(3)}*/}
                                                   {/*className="flex-sb-m flex-w txt-s-101 cl6 hov-cl10 trans-04 p-tb-3">*/}
                                                  {/*<span className="m-r-10">*/}
                                                      {/*Đồ khô*/}
                                                  {/*</span>*/}
                                                    {/*<span>*/}
                                                        {/*2*/}
                                                  {/*</span>*/}
                                                {/*</a>*/}
                                            {/*</li>*/}
                                        </ul>
                                    </div>
                                    <hr/>
                                    {/*  */}
                                    {/*<div>*/}
                                        {/*<h4 className="txt-m-101 cl3 p-b-20">*/}
                                            {/*THƯƠNG HIỆU*/}
                                        {/*</h4>*/}
                                        {/*<ul>*/}
                                            {/*<li className="p-b-5">*/}
                                                {/*<label>*/}
                                                    {/*<input className="brand" type="checkbox" defaultValue/>*/}
                                                    {/*Đà Lạt*/}
                                                {/*</label>*/}
                                            {/*</li>*/}
                                            {/*<li className="p-b-5">*/}
                                                {/*<label>*/}
                                                    {/*<input className="brand" type="checkbox" defaultValue/>*/}
                                                    {/*Huế mộng mơ*/}
                                                {/*</label>*/}
                                            {/*</li>*/}
                                            {/*<li className="p-b-5">*/}
                                                {/*<label>*/}
                                                    {/*<input className="brand" type="checkbox" defaultValue/>*/}
                                                    {/*Sóc Trăng*/}
                                                {/*</label>*/}
                                            {/*</li>*/}
                                            {/*<li className="p-b-5">*/}
                                                {/*<label>*/}
                                                    {/*<input className="brand" type="checkbox" defaultValue/>*/}
                                                    {/*Đà Nẵng*/}
                                                {/*</label>*/}
                                            {/*</li>*/}
                                        {/*</ul>*/}
                                    {/*</div>*/}
                                    <hr/>
                                    {/*Rating */}
                                    <div>
                                        <h4 className="txt-m-101 cl3 p-b-20">
                                            ĐÁNH GIÁ
                                        </h4>
                                        <div className="rating-wrap-post" style={{cursor: 'pointer'}}>
                                            <i id={1} className="fa fa-star" onClick={this.ratingfilter(1)}/>
                                            <i id={2} className="fa fa-star" onClick={this.ratingfilter(2)}/>
                                            <i id={3} className="fa fa-star" onClick={this.ratingfilter(3)}/>
                                            <i id={4} className="fa fa-star" onClick={this.ratingfilter(4)}/>
                                            <i id={5} className="fa fa-star" onClick={this.ratingfilter(5)}/>
                                            Trở lên
                                            <input style={{display: 'none'}} type="number" defaultValue id="star"/>
                                        </div>
                                    </div>
                                    <hr/>
                                    {/*  */}
                                    {/*<div>*/}
                                        {/*<h4 className="txt-m-101 cl3 p-b-20">*/}
                                            {/*THEO TAGS*/}
                                        {/*</h4>*/}
                                        {/*<div className="flex-w m-r--10">*/}
                                            {/*/!*<a href="#"*!/*/}
                                               {/*/!*className="dis-block bg12 txt-s-101 cl6 hov-btn1 trans-03 p-tb-5 p-rl-12 m-r-10 m-b-10">*!/*/}
                                                {/*/!*Trái cây*!/*/}
                                            {/*/!*</a>*!/*/}
                                            {/*/!*<a href="#"*!/*/}
                                               {/*/!*className="dis-block bg12 txt-s-101 cl6 hov-btn1 trans-03 p-tb-5 p-rl-12 m-r-10 m-b-10">*!/*/}
                                                {/*/!*Green*!/*/}
                                            {/*/!*</a>*!/*/}
                                            {/*/!*<a href="#"*!/*/}
                                               {/*/!*className="dis-block bg12 txt-s-101 cl6 hov-btn1 trans-03 p-tb-5 p-rl-12 m-r-10 m-b-10">*!/*/}
                                                {/*/!*Rau củ*!/*/}
                                            {/*/!*</a>*!/*/}
                                            {/*/!*<a href="#"*!/*/}
                                               {/*/!*className="dis-block bg12 txt-s-101 cl6 hov-btn1 trans-03 p-tb-5 p-rl-12 m-r-10 m-b-10">*!/*/}
                                                {/*/!*Organic*!/*/}
                                            {/*/!*</a>*!/*/}
                                            {/*/!*<a href="#"*!/*/}
                                               {/*/!*className="dis-block bg12 txt-s-101 cl6 hov-btn1 trans-03 p-tb-5 p-rl-12 m-r-10 m-b-10">*!/*/}
                                                {/*/!*Đồ khô*!/*/}
                                            {/*/!*</a>*!/*/}
                                            {/*<NavLink to="/shop/traicay" className="txt-s-115">*/}
                                                {/*Home*/}
                                            {/*</NavLink>*/}
                                            {/*<NavLink to="/shop/raucu" className="txt-s-115">*/}
                                                {/*Home*/}
                                            {/*</NavLink>*/}
                                            {/*<NavLink to="/shop" className="txt-s-115">*/}
                                                {/*Home*/}
                                            {/*</NavLink>*/}
                                            {/*<NavLink to="/" className="txt-s-115">*/}
                                                {/*Home*/}
                                            {/*</NavLink>*/}
                                            {/*<NavLink to="/" className="txt-s-115">*/}
                                                {/*Home*/}
                                            {/*</NavLink>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                            <div className="col-sm-10 col-md-8 col-lg-9 m-rl-auto p-b-50">
                                <div>
                                    <div className="flex-w flex-r-m p-b-45 flex-row-rev">
                                        <div className="flex-w flex-m p-tb-8">
                                            <div className="rs1-select2 bg0 size-w-52 bocl15 m-tb-7 m-r-15">
                                                <select onChange={this.sortfilter}  style={{width:'220px'}}
                                                  className="form-control" required="required" defaultValue="sort">
                                                    <option value="sort" disabled>Sort</option>
                                                    <option value="1">A-Z</option>
                                                    <option value="2">Theo giá trị từ thấp đến cao</option>
                                                    <option value="3">Theo giá trị từ cao đến thấp</option>
                                                </select>
                                                <div className="dropDownSelect2"/>
                                            </div>
                                            <div className="flex-w flex-m m-tb-7">
                                                <button
                                                    className="dis-block lh-00 pos-relative how-icon1 m-r-15 js-show-list">
                                                    <img className="icon-main trans-04"
                                                         src="images/icons/icon-menu-list.png" alt="ICON"/>
                                                    <img className="ab-t-l icon-hov trans-04"
                                                         src="images/icons/icon-menu-list1.png" alt="ICON"/>
                                                </button>
                                                <button
                                                    className="dis-block lh-00 pos-relative how-icon1 menu-active js-show-grid">
                                                    <img className="icon-main trans-04" src="images/icons/icon-grid.png"
                                                         alt="ICON"/>
                                                    <img className="ab-t-l icon-hov trans-04"
                                                         src="images/icons/icon-grid1.png" alt="ICON"/>
                                                </button>
                                            </div>
                                        </div>
                                        <span className="txt-s-101 cl9 m-r-30 size-w-53">
                      Show 1–12 trong 23 sản phẩm
                    </span>
                                    </div>
                                    {/* Shop grid */}
                                    <div className="shop-grid">
                                        {this.state.isLoading?(<ReactLoading style={{width:'100px',margin:'auto'}} type={"bubbles"} color={"green"} height={'10'} width={'10'} />):(
                                        <div className="row">
                                            {this.state.isfilter?this.state.filter.map((item,index) => {
                                                return ((index >= (6 * (this.state.curpage - 1))) && (index <= (6 * this.state.curpage - 1)))?
                                                        <div key={index} className="col-sm-6 col-lg-4 p-b-30">
                                                            <div className="block1">
                                                                <div
                                                                    className="block1-bg wrap-pic-w bo-all-1 bocl12 hov3 trans-04">
                                                                    <img style={{width: '267px', height: '352px'}}
                                                                         src={'https://organic-store.herokuapp.com/api/product/' + item.id}
                                                                         alt="IMG"/>
                                                                    <div className="block1-content flex-col-c-m p-b-46">
                                                                        <Link to={'/singleproduct/'+item.id}
                                                                           className="txt-m-103 cl3 txt-center hov-cl10 trans-04 js-name-b1">
                                                                            {item.name}
                                                                        </Link>
                                                                        <span>
                                                                        {this.createRate(item.rating)}
                                                                    </span>
                                                                        <span
                                                                            className="block1-content-more txt-m-104 cl9 p-t-21 trans-04">
                                                                {item.price}
                                                          </span>
                                                                        <div
                                                                            className="block1-wrap-icon flex-c-m flex-w trans-05">
                                                                            <Link to={'/singleproduct/' + item.id}
                                                                                  className="block1-icon flex-c-m wrap-pic-max-w">
                                                                                <img src="images/icons/icon-view.png"
                                                                                     alt="ICON"/>
                                                                            </Link>
                                                                            <button onClick={this.addCart.bind(this, item)}
                                                                                    className="block1-icon flex-c-m wrap-pic-max-w js-addcart-b1">
                                                                                <img src="images/icons/icon-cart.png"
                                                                                     alt="ICON"/>
                                                                            </button>
                                                                            <a href="wishlist.html"
                                                                               className="block1-icon flex-c-m wrap-pic-max-w js-addwish-b1">
                                                                                <img className="icon-addwish-b1"
                                                                                     src="images/icons/icon-heart.png"
                                                                                     alt="ICON"/>
                                                                                <img className="icon-addedwish-b1"
                                                                                     src="images/icons/icon-heart2.png"
                                                                                     alt="ICON"/>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>:null
                                                })
                                                :this.state.product.map((item,index) => {
                                                    return ((index >= (6 * (this.state.curpage - 1))) && (index <= (6 * this.state.curpage - 1)))?
                                                        <div key={index} className="col-sm-6 col-lg-4 p-b-30">
                                                            <div className="block1">
                                                                <div
                                                                    className="block1-bg wrap-pic-w bo-all-1 bocl12 hov3 trans-04">
                                                                    <img style={{width: '267px', height: '352px'}}
                                                                         src={'https://organic-store.herokuapp.com/api/product/' + item.id}
                                                                         alt="IMG"/>
                                                                    <div className="block1-content flex-col-c-m p-b-46">
                                                                        <Link to={'/singleproduct/'+item.id}
                                                                           className="txt-m-103 cl3 txt-center hov-cl10 trans-04 js-name-b1">
                                                                            {item.name}
                                                                        </Link>
                                                                        <span>
                                                                            {this.createRate(item.rating)}
                                                                        </span>
                                                                        <span
                                                                            className="block1-content-more txt-m-104 cl9 p-t-21 trans-04">
                                                                {item.price}
                                                          </span>
                                                                        <div
                                                                            className="block1-wrap-icon flex-c-m flex-w trans-05">
                                                                            <Link to={'/singleproduct/'+item.id}
                                                                                  className="block1-icon flex-c-m wrap-pic-max-w">
                                                                                <img src="images/icons/icon-view.png"
                                                                                     alt="ICON"/>
                                                                            </Link>
                                                                            <button onClick={this.addCart.bind(this,item)}
                                                                               className="block1-icon flex-c-m wrap-pic-max-w js-addcart-b1">
                                                                                <img src="images/icons/icon-cart.png"
                                                                                     alt="ICON"/>
                                                                            </button>
                                                                            <a href="wishlist.html"
                                                                               className="block1-icon flex-c-m wrap-pic-max-w js-addwish-b1">
                                                                                <img className="icon-addwish-b1"
                                                                                     src="images/icons/icon-heart.png"
                                                                                     alt="ICON"/>
                                                                                <img className="icon-addedwish-b1"
                                                                                     src="images/icons/icon-heart2.png"
                                                                                     alt="ICON"/>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>:null
                                                })}
                                        </div>)}
                                    </div>
                                    {/* Shop list */}
                                    {this.state.isLoading?(<ReactLoading style={{width:'100px',margin:'auto'}} type={"bubbles"} color={"green"} height={'10'} width={'10'} />):(
                                    <div className="shop-list dis-none">

                                        {this.state.isfilter?this.state.filter.map((item,index) => {
                                                return ((index >= (6 * (this.state.curpage - 1))) && (index <= (6 * this.state.curpage - 1)))?
                                        <div className="row p-b-30">
                                            <div className=" col-sm-5 col-lg-4">
                                                {/*<a href="product-single.html"*/}
                                                   {/*className="wrap-pic-w bo-all-1 bocl12 hov8 trans-04">*/}
                                                <Link to={'/singleproduct/' + item.id} className="wrap-pic-w bo-all-1 bocl12 hov8 trans-04">
                                                    <img src={'https://organic-store.herokuapp.com/api/product/' + item.id}
                                                         alt="IMG"/>
                                                    {/*<img src="images/product-37.jpg" alt="PRODUCT"/>*/}
                                                {/*</a>*/}
                                                </Link>
                                            </div>
                                            <div className=" col-sm-7 col-lg-8">
                                                <div className="p-t-5 p-b-20">
                                                    <div className="flex-w flex-sb-m">
                                                        {/*<a href="product-single.html"*/}
                                                           {/*className="txt-m-120 cl3 hov-cl10 trans-04 m-r-20 js-name1">*/}
                                                        {/*<NavLink to="/singleProduct" className="txt-m-120 cl3 hov-cl10 trans-04 m-r-20 js-name1">*/}
                                                            <Link to={'/singleproduct/'+item.id}
                                                                  className="txt-m-120 cl3 hov-cl10 trans-04 m-r-20 js-name1">
                                                                {item.name}
                                                            </Link>
                                                        {/*</a>*/}
                                                        {/*</NavLink>*/}
                                                        {/*<a href="wishlist.html"*/}
                                                           {/*className="lh-00 pos-relative how-icon1 m-tb-15 js-addwish1">*/}
                                                        <Link to="/wishlist" className="lh-00 pos-relative how-icon1 m-tb-15 js-addwish1">
                                                            <img className="icon-main trans-04"
                                                                 src="images/icons/icon-heart-color.png" alt="ICON"/>
                                                            <img className="ab-t-l icon-hov trans-04"
                                                                 src="images/icons/icon-heart-color2.png" alt="ICON"/>
                                                        {/*</a>*/}
                                                        </Link>
                                                    </div>
                                                    <span className="txt-m-117 cl9">
                            21vnd
                          </span>
                                                    <p className="txt-s-101 cl6 p-t-18">
                                                        farm hiếu
                                                    </p>

                                                    <div className="flex-w p-t-29">
                                                        <button onClick={this.addCart.bind(this,item)}
                                                                className="flex-c-m txt-s-103 cl0 bg10 size-a-2 hov-btn2 trans-04 js-addcart1">
                                                            {/*<img src="images/icons/icon-cart.png"*/}
                                                            {/*alt="ICON"/>*/}
                                                            Thêm vào giỏ
                                                        </button>
                                                        {/*<button*/}
                                                            {/*className="flex-c-m txt-s-103 cl0 bg10 size-a-2 hov-btn2 trans-04 js-addcart1">*/}
                                                            {/*Thêm vào giỏ*/}
                                                        {/*</button>*/}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>:null
                                                })
                                                :this.state.product.map((item,index) => {
                                                    return ((index >= (6 * (this.state.curpage - 1))) && (index <= (6 * this.state.curpage - 1)))?
                                        <div className="row p-b-30">
                                            <div className=" col-sm-5 col-lg-4">
                                                {/*<a href="product-single.html"*/}
                                                   {/*className="wrap-pic-w bo-all-1 bocl12 hov8 trans-04">*/}
                                                <Link to={'/singleproduct/' + item.id} className="wrap-pic-w bo-all-1 bocl12 hov8 trans-04">
                                                    <img src={'https://organic-store.herokuapp.com/api/product/' + item.id}
                                                         alt="IMG"/>
                                                    {/*<img src="images/product-37.jpg" alt="PRODUCT"/>*/}
                                                    {/*</a>*/}
                                                </Link>
                                                {/*<NavLink to="/singleProduct" className="wrap-pic-w bo-all-1 bocl12 hov8 trans-04">*/}
                                                    {/*<img src="images/product-38.jpg" alt="PRODUCT"/>*/}
                                                {/*/!*</a>*!/*/}
                                                {/*</NavLink>*/}
                                            </div>
                                            <div className=" col-sm-7 col-lg-8">
                                                <div className="p-t-5 p-b-20">
                                                    <div className="flex-w flex-sb-m">
                                                        {/*<a href="product-single.html"*/}
                                                           {/*className="txt-m-120 cl3 hov-cl10 trans-04 m-r-20 js-name1">*/}
                                                        {/*<NavLink to="/singleProduct" className="txt-m-120 cl3 hov-cl10 trans-04 m-r-20 js-name1">*/}
                                                            {/*Cà chua*/}
                                                        {/*/!*</a>*!/*/}
                                                        {/*</NavLink>*/}
                                                        <Link to={'/singleproduct/'+item.id}
                                                              className="txt-m-120 cl3 hov-cl10 trans-04 m-r-20 js-name1">
                                                            {item.name}
                                                        </Link>
                                                        {/*<a href="wishlist.html"*/}
                                                           {/*className="lh-00 pos-relative how-icon1 m-tb-15 js-addwish1">*/}
                                                        <Link to="/wishlist" className="lh-00 pos-relative how-icon1 m-tb-15 js-addwish1">
                                                            <img className="icon-main trans-04"
                                                                 src="images/icons/icon-heart-color.png" alt="ICON"/>
                                                            <img className="ab-t-l icon-hov trans-04"
                                                                 src="images/icons/icon-heart-color2.png" alt="ICON"/>
                                                        {/*</a>*/}
                                                        </Link>
                                                    </div>
                                                    <span className="txt-m-117 cl9">
                            15vnd
                          </span>
                                                    <p className="txt-s-101 cl6 p-t-18">
                                                        farm
                                                    </p>
                                                    <div className="flex-w p-t-29">
                                                        <button onClick={this.addCart.bind(this,item)}
                                                                className="flex-c-m txt-s-103 cl0 bg10 size-a-2 hov-btn2 trans-04 js-addcart1">
                                                            {/*<img src="images/icons/icon-cart.png"*/}
                                                            {/*alt="ICON"/>*/}
                                                            Thêm vào giỏ
                                                        </button>
                                                        {/*<button*/}
                                                            {/*className="flex-c-m txt-s-103 cl0 bg10 size-a-2 hov-btn2 trans-04 js-addcart1">*/}
                                                            {/*Thêm vào giỏ*/}
                                                        {/*</button>*/}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>:null
                                                })}

                                    </div>)}
                                    {/* Pagination */}
                                    <div className="flex-w flex-c-m p-t-47">
                                        {this.createPage()}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                </div>
            </div>
        );
  }
}
const mapStateToProps = (state) => {
    return {
        //products : state.products,
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return{
        addCart : (product) => {
            dispatch(addCart(product));
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Shop)