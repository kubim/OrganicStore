import React, { Component } from 'react';
import {Link, NavLink} from 'react-router-dom';
import  { connect } from 'react-redux';
import {listCIDPRequest, listPARequest, listPIDCARequest,listCARequest} from "./../actions/index";
import addjs from '../jslib/jslib';
import axios from 'axios';
import InlineBlock from 'react-inline-block';
import ReactLoading from "react-loading";
import callApi from "../utils/apiCaller";
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
const styles ={
    display: 'inline-block',
    width: '25%',
    padding: '1%'
}
class Home extends Component {

      constructor(props) {
        super(props);
        this.state = {
            categories:[],
            products:[],
            productsOfC:[],
            productssaleoff:[],
            listPsOfC:[],
            soL:[],
            isloading:true,
            deal:
                // null,
                {
                id: 3,
                name: "Mít Sấy ",
                price: 69000,
                unit: "gói",
                stock: 1,
                rating: 4,
                buy: 43,
                tbl_category_id: 6,
                sku: "MSCB51220_SYL",
                sname: "",
                description: null
            },
            ide:1
        };
    }

      ic =id=>event=> {
        event.preventDefault();
        // while(this.state.productsOfC === null){}
        if(id === null) id=1;

        this.setState({
            isloading:false,
            ide:id
        })
        // addjs();
        // alert(id + "editstart");

        // this.setState({});
        // this.soPinC(this.state.ide);
        // this.soPinC(id)

        // this.setState({
        //     isloading:false
        // })

    }
    async getData(){
        await
            axios.get('https://api-organic.herokuapp.com/v1/categories').then(res =>{
                res.data.map((it,index) => {  this.soPinC(it.id)});
            this.setState({
                categories:res.data,
            });

                axios.get('https://organicshoptl.herokuapp.com/api/products').then(res =>{
                    this.setState({
                        products:res.data,
                        // isLoading:false,
                        // yyy
                    });

            axios.get('http://organicshoptl.herokuapp.com/api/productdeal').then(res =>{
                this.setState({
                    productssaleoff:res.data,
                });

                axios.get('http://organicshoptl.herokuapp.com/api/productdeal').then(res =>{
                    this.setState({
                        deal:res.data,
                        isLoading:false,

                    });

                    addjs();
                }).catch(err=>{alert("Get deal fail!")})
            }).catch(err=>{alert("Get products fail!")})
            }).catch(err=>{alert("Get products sale off fail!")})
        }).catch(err=>{alert("Get categories fail!")})


    }
    componentDidMount(){
        this.getData();
    }
    getmaincat=(id)=>{
        return this.state.categories.find(x=>x.id===id).parent_id;
    }
    // componentDidUpdate(){
    //     addjs();
    // }
    //  componentDidMount(){
    //   //addjs();
    //    axios.get('https://organicshoptl.herokuapp.com/api/products').then(res =>{
    //   //   callApi(1,'products','GET',null).then( res =>{
    //         this.setState({
    //             products:res.data,
    //         });
    //        axios.get('https://api-organic.herokuapp.com/v1/categories').then(res =>{
    //     // callApi(1,'categories','GET',null).then( res =>{
    //           this.setState({
    //             categories:res.data,
    //           });
    //             console.log("ct");
    //             this.state.categories.map((it,index) => {  this.soPinC(it.id)});
    //
    //           // addjs();
    //
    //
    //             console.log(this.state.listPsOfC);
    //             console.log(this.state.categories);
    //             console.log(this.state.soL);
    //         }).catch(err=>{alert("Get categories fail!")})
    //       // addjs();
    //       // this.state.categories.map((item,index) => { return (item.id !==0)? console.log(this.soPinC(item.id)):null});
    //   }).catch(err=>{alert("Get products fail!")})
    //
    // }
     soPinC =(id)=>{
        // event.preventDefault();
        var result=0;
        console.log("id"+id);
        // this.state.soL.push(id);
     axios.get('https://organicshoptl.herokuapp.com/api/categories/'+id).then(res =>{
     //      callApi(0,`categories/${id}`,'GET',null).then( res =>{
            this.setState({
                productsOfC:res.data,
                // isLoading:false,
            });
            this.state.listPsOfC.push({id:id, list: this.state.productsOfC});
            // this.setState(this.state);
            var obj = {id:id, lengthC:this.state.productsOfC.length};
            result = this.state.productsOfC.length;
            this.state.soL.push(obj);
            this.setState(this.state);
            // alert("rs"+result);
            // addjs();
        }).catch(err1=>{alert("Get productsOfC fail!")});
        // console.log(this.state.soL);
        // alert("sl"+this.state.soL);

        return result;
    }
    // componentDidUpdate(){
    //   addjs();
    // }
  render() {

        return (

      <div>
          {this.state.isLoading?(<ReactLoading style={{width:'100px',margin:'auto'}} type={"bubbles"} color={"green"} height={'10'} width={'10'} />):(
              <div>
        <div>
        {/* Slider */}
        {/*<section className="sec-slider">*/}
          {/*<div className="rev_slider_wrapper fullwidthbanner-container">*/}
            {/*<div id="rev_slider_1" className="rev_slide fullwidthabanner" data-version="5.4.5" style={{display: 'none'}}>*/}
              {/*<ul>*/}
                {/*/!* Slide 1 *!/*/}
                {/*<li data-transition="fade">*/}
                  {/*/!*  *!/*/}
                  {/*<img src="images/Banner1.jpg" alt="IMG-BG" className="rev-slidebg" />*/}
                  {/*/!*  *!/*/}
                  {/*<div className="tp-caption tp-resizeme layer1" data-frames="[{&quot;delay&quot;:1300,&quot;speed&quot;:1300,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:50px;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-visibility="['on', 'on', 'on', 'on']" data-fontsize="['35', '35', '35', '35']" data-lineheight="['42', '42', '42', '42']" data-color="['#333']" data-textalign="['left', 'left', 'center', 'center']" data-x="['left']" data-y="['center']" data-hoffset="['310', '80', '0', '0']" data-voffset="['-78', '-78', '-78', '-150']" data-width="['650','650','768','576']" data-height="['auto']" data-whitespace="['normal']" data-paddingtop="[0, 0, 0, 0]" data-paddingright="[15, 15, 15, 15]" data-paddingbottom="[0, 0, 0, 0]" data-paddingleft="[15, 15, 15, 15]" data-basealign="slide" data-responsive_offset="on">*/}
                    {/*<span className="child1">organic</span> <span className="child2">products</span>*/}
                  {/*</div>*/}
                  {/*/!*  *!/*/}
                  {/*<h2 className="tp-caption tp-resizeme layer2" data-frames="[{&quot;delay&quot;:500,&quot;speed&quot;:1500,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:[175%];y:0px;z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:1;&quot;,&quot;mask&quot;:&quot;x:[-100%];y:0;s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-visibility="['on', 'on', 'on', 'on']" data-fontsize="['75', '75', '75', '75']" data-lineheight="['82', '82', '82', '82']" data-color="['#333']" data-textalign="['left', 'left', 'center', 'center']" data-x="['left']" data-y="['center']" data-hoffset="['310', '80', '0', '0']" data-voffset="['0', '0', '0', '-30']" data-width="['650','650','768','576']" data-height="['auto']" data-whitespace="['normal']" data-paddingtop="[0, 0, 0, 0]" data-paddingright="[15, 15, 15, 15]" data-paddingbottom="[0, 0, 0, 0]" data-paddingleft="[15, 15, 15, 15]" data-basealign="slide" data-responsive_offset="on">*/}
                    {/*Fresh Fr<span>u</span>its*/}
                  {/*</h2>*/}
                  {/*/!*  *!/*/}
                  {/*<p className="tp-caption tp-resizeme layer3" data-frames="[{&quot;delay&quot;:1300,&quot;speed&quot;:1300,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:-50px;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-visibility="['on', 'on', 'on', 'on']" data-fontsize="['15', '15', '15', '15']" data-lineheight="['24', '24', '24', '24']" data-color="['#666']" data-textalign="['left', 'left', 'center', 'center']" data-x="['left']" data-y="['center']" data-hoffset="['310', '80', '0', '0']" data-voffset="['95', '95', '95', '95']" data-width="['650','650','768','576']" data-height="['auto', 'auto', 'auto', 'auto']" data-whitespace="['normal']" data-paddingtop="[0, 0, 0, 0]" data-paddingright="[15, 15, 35, 15]" data-paddingbottom="[0, 0, 0, 0]" data-paddingleft="[15, 15, 35, 15]" data-basealign="slide" data-responsive_offset="on">*/}
                  {/*</p>*/}
                  {/*/!*  *!/	*/}
                  {/*<div className="tp-caption tp-resizeme flex-w layer4" data-frames="[{&quot;delay&quot;:2500,&quot;speed&quot;:1500,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;z:0;rX:0;rY:0;rZ:0;sX:0.6;sY:0.6;skX:0;skY:0;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-x="['left']" data-y="['center']" data-hoffset="['310', '80', '0', '0']" data-voffset="['203', '203', '203', '203']" data-width="['650','650','768','576']" data-height="['auto']" data-paddingtop="[0, 0, 0, 0]" data-paddingright="[15, 15, 15, 15]" data-paddingbottom="[0, 0, 0, 0]" data-paddingleft="[15, 15, 15, 15]" data-basealign="slide" data-responsive_offset="on">*/}
                    {/*<a href="shop-sidebar-grid.html" className="btn-slide flex-c-m">*/}
                      {/*Mua ngay*/}
                      {/*<span className="lnr lnr-chevron-right m-l-7" />*/}
                      {/*<span className="lnr lnr-chevron-right" />*/}
                    {/*</a>*/}
                  {/*</div>*/}
                {/*</li>*/}
                {/*/!* Slide 2 *!/*/}
                {/*<li data-transition="fade">*/}
                  {/*/!*  *!/*/}
                  {/*<img src="images/Banner6.jpg" alt="IMG-BG" className="rev-slidebg" />*/}
                  {/*/!*  *!/*/}
                  {/*<div className="tp-caption tp-resizeme layer1" data-frames="[{&quot;delay&quot;:500,&quot;speed&quot;:1300,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:150px;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-visibility="['on', 'on', 'on', 'on']" data-fontsize="['35', '35', '35', '35']" data-lineheight="['42', '42', '42', '42']" data-color="['#333']" data-textalign="['left', 'left', 'center', 'center']" data-x="['left']" data-y="['center']" data-hoffset="['310', '80', '0', '0']" data-voffset="['-78', '-78', '-78', '-150']" data-width="['650','650','768','576']" data-height="['auto']" data-whitespace="['normal']" data-paddingtop="[0, 0, 0, 0]" data-paddingright="[15, 15, 15, 15]" data-paddingbottom="[0, 0, 0, 0]" data-paddingleft="[15, 15, 15, 15]" data-basealign="slide" data-responsive_offset="on">*/}
                    {/*<span className="child1">organic</span> <span className="child2">products</span>*/}
                  {/*</div>*/}
                  {/*/!*  *!/*/}
                  {/*<h2 className="tp-caption tp-resizeme layer2" data-frames="[{&quot;delay&quot;:1300,&quot;speed&quot;:1300,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:-50px;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-visibility="['on', 'on', 'on', 'on']" data-fontsize="['75', '75', '75', '75']" data-lineheight="['82', '82', '82', '82']" data-color="#E2C7C7" data-textalign="['left', 'left', 'center', 'center']" data-x="['left']" data-y="['center']" data-hoffset="['310', '80', '0', '0']" data-voffset="['0', '0', '0', '-30']" data-width="['650','650','768','576']" data-height="['auto']" data-whitespace="['normal']" data-paddingtop="[0, 0, 0, 0]" data-paddingright="[15, 15, 15, 15]" data-paddingbottom="[0, 0, 0, 0]" data-paddingleft="[15, 15, 15, 15]" data-basealign="slide" data-responsive_offset="on">*/}
                    {/*Fresh Veget<span>a</span>bles */}
                  {/*</h2>*/}
                  {/*/!*  *!/*/}
                  {/*<p className="tp-caption tp-resizeme layer3" data-frames="[{&quot;delay&quot;:500,&quot;speed&quot;:1300,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:-150px;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-visibility="['on', 'on', 'on', 'on']" data-fontsize="['15', '15', '15', '15']" data-lineheight="['24', '24', '24', '24']" data-color="['#666']" data-textalign="['left', 'left', 'center', 'center']" data-x="['left']" data-y="['center']" data-hoffset="['310', '80', '0', '0']" data-voffset="['95', '95', '95', '95']" data-width="['650','650','768','576']" data-height="['auto', 'auto', 'auto', 'auto']" data-whitespace="['normal']" data-paddingtop="[0, 0, 0, 0]" data-paddingright="[15, 15, 35, 15]" data-paddingbottom="[0, 0, 0, 0]" data-paddingleft="[15, 15, 35, 15]" data-basealign="slide" data-responsive_offset="on">*/}
                  {/*</p>*/}
                  {/*/!*  *!/	*/}
                  {/*<div className="tp-caption tp-resizeme flex-w layer4" data-frames="[{&quot;delay&quot;:2000,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-x="['left']" data-y="['center']" data-hoffset="['310', '80', '0', '0']" data-voffset="['203', '203', '203', '203']" data-width="['650','650','768','576']" data-height="['auto']" data-paddingtop="[0, 0, 0, 0]" data-paddingright="[15, 15, 15, 15]" data-paddingbottom="[0, 0, 0, 0]" data-paddingleft="[15, 15, 15, 15]" data-basealign="slide" data-responsive_offset="on">*/}
                    {/*<a href="shop-sidebar-grid.html" className="btn-slide flex-c-m">*/}
                      {/*Mua ngay*/}
                      {/*<span className="lnr lnr-chevron-right m-l-7" />*/}
                      {/*<span className="lnr lnr-chevron-right" />*/}
                    {/*</a>*/}
                  {/*</div>*/}
                {/*</li>*/}
                {/*/!* Slide 3 *!/*/}
                {/*<li data-transition="fade">*/}
                  {/*/!*  *!/*/}
                  {/*<img src="images/Banner8.jpg" alt="IMG-BG" className="rev-slidebg" />*/}
                  {/*/!*  *!/*/}
                  {/*<div className="tp-caption tp-resizeme layer1" data-frames="[{&quot;delay&quot;:1300,&quot;speed&quot;:1300,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:-200px;skX:85px;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-visibility="['on', 'on', 'on', 'on']" data-fontsize="['35', '35', '35', '35']" data-lineheight="['42', '42', '42', '42']" data-color="['#333']" data-textalign="['left', 'left', 'center', 'center']" data-x="['left']" data-y="['center']" data-hoffset="['310', '80', '0', '0']" data-voffset="['-78', '-78', '-78', '-150']" data-width="['650','650','768','576']" data-height="['auto']" data-whitespace="['normal']" data-paddingtop="[0, 0, 0, 0]" data-paddingright="[15, 15, 15, 15]" data-paddingbottom="[0, 0, 0, 0]" data-paddingleft="[15, 15, 15, 15]" data-basealign="slide" data-responsive_offset="on">*/}
                    {/*<span className="child1">organic</span> <span className="child2">products</span>*/}
                  {/*</div>*/}
                  {/*/!*  *!/*/}
                  {/*<h2 className="tp-caption tp-resizeme layer2" data-frames="[{&quot;delay&quot;:500,&quot;speed&quot;:1300,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:200px;skX:-85px;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-visibility="['on', 'on', 'on', 'on']" data-fontsize="['75', '75', '75', '75']" data-lineheight="['82', '82', '82', '82']" data-color="#F44C39 " data-textalign="['left', 'left', 'center', 'center']" data-x="['left']" data-y="['center']" data-hoffset="['310', '80', '0', '0']" data-voffset="['0', '0', '0', '-30']" data-width="['650','650','768','576']" data-height="['auto']" data-whitespace="['normal']" data-paddingtop="[0, 0, 0, 0]" data-paddingright="[15, 15, 15, 15]" data-paddingbottom="[0, 0, 0, 0]" data-paddingleft="[15, 15, 15, 15]" data-basealign="slide" data-responsive_offset="on">*/}
                    {/*Best Dr<span>i</span>ed */}
                  {/*</h2>*/}
                  {/*/!*  *!/*/}
                  {/*<p className="tp-caption tp-resizeme layer3" data-frames="[{&quot;delay&quot;:1300,&quot;speed&quot;:1300,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:-200px;skX:85px;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-visibility="['on', 'on', 'on', 'on']" data-fontsize="['15', '15', '15', '15']" data-lineheight="['24', '24', '24', '24']" data-color="['#666']" data-textalign="['left', 'left', 'center', 'center']" data-x="['left']" data-y="['center']" data-hoffset="['310', '80', '0', '0']" data-voffset="['95', '95', '95', '95']" data-width="['650','650','768','576']" data-height="['auto', 'auto', 'auto', 'auto']" data-whitespace="['normal']" data-paddingtop="[0, 0, 0, 0]" data-paddingright="[15, 15, 35, 15]" data-paddingbottom="[0, 0, 0, 0]" data-paddingleft="[15, 15, 35, 15]" data-basealign="slide" data-responsive_offset="on">*/}
                    {/*Đồ khô Đà Lạt giảm giá cực shock*/}
                  {/*</p>*/}
                  {/*/!*  *!/	*/}
                  {/*<div className="tp-caption tp-resizeme flex-w layer4" data-frames="[{&quot;delay&quot;:2500,&quot;speed&quot;:1500,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:bottom;rZ:90deg;sX:2;sY:2;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-x="['left']" data-y="['center']" data-hoffset="['310', '80', '0', '0']" data-voffset="['203', '203', '203', '203']" data-width="['650','650','768','576']" data-height="['auto']" data-paddingtop="[0, 0, 0, 0]" data-paddingright="[15, 15, 15, 15]" data-paddingbottom="[0, 0, 0, 0]" data-paddingleft="[15, 15, 15, 15]" data-basealign="slide" data-responsive_offset="on">*/}
                    {/*<a href="shop-sidebar-grid.html" className="btn-slide flex-c-m">*/}
                      {/*Mua ngay*/}
                      {/*<span className="lnr lnr-chevron-right m-l-7" />*/}
                      {/*<span className="lnr lnr-chevron-right" />*/}
                    {/*</a>*/}
                  {/*</div>*/}
                {/*</li>*/}
              {/*</ul>				*/}
            {/*</div>*/}
          {/*</div>*/}
        {/*</section>*/}
        </div>

        {/* Item */}
        <div style={{marginTop: '40px'}} className="sec-item flex-w">

          {/*  */}
          {this.state.categories.map((item,index) => { return (item.parent_id === 1)?
              // (index>0 && index<4)?
          <div key={index} className="of-hidden size-w-2 respon2" style={{margin: 'auto', width: '25%'}}>
            <div className="hov-img1 pos-relative">
              <img src="images/vegetable.jpg" alt="IMG" />
              {/*<a href={`/shop/${item.id}`} className="s-full ab-t-l flex-col-c-m bg11 p-all-15 hov1-parent">*/}
                <Link to={"/shop/"+item.id} className="s-full ab-t-l flex-col-c-m bg11 p-all-15 hov1-parent">
                <div className="wrap-pic-max-w">
                  <img src="images/icons/symbol-03.png" alt="IMG" />
                </div>
                <span className="txt-l-102 cl0 txt-center p-t-30 p-b-13">
                  {item.name}
                </span>
                <div className="hov1 trans-04">
                  <div className="txt-m-102 cl0 txt-center hov1-child trans-04">
                    - {this.state.soL.map((item1,index1) => { return (item1.id === item.id)?
                      <div key={index1}>{item1.lengthC}</div>:null})} Sản phẩm -
                  </div>
                </div>
                </Link>
              {/*</a>*/}
            </div>
          </div>:null})}
          {/*  */}
        </div>

        {/* Product */}
          <div className="sec-product bg0 p-t-145 p-b-25">
              <div className="container">
                  <div className="size-a-1 flex-col-c-m p-b-48">
                      <div className="txt-center txt-m-201 cl10 how-pos1-parent m-b-14">
                          Sản phẩm nổi bật
                          <div className="how-pos1">
                              <img src="images/icons/symbol-02.png" alt="IMG" />
                          </div>
                      </div>
                      <h3 className="txt-center txt-l-101 cl3 respon1">
                          SẢN PHẨM ORGANIC
                      </h3>
                  </div>
                  <div className="p-b-46">
                      <div className="flex-w flex-c-m filter-tope-group">
                          <button className="txt-m-104 cl9 hov2 trans-04 p-rl-27 p-b-10 how-active1" data-filter="*">
                              Tất cả sản phẩm
                          </button>
                          {this.state.categories.map((item,index) => { return (item.id<5 && item.id>1)?
                              <button className="txt-m-104 cl9 hov2 trans-04 p-rl-27 p-b-10 how-active1" data-filter={".cat"+item.id}>
                                  {item.name}
                              </button>:null})}
                          {/*<button className="txt-m-104 cl9 hov2 trans-04 p-rl-27 p-b-10" data-filter=".vegetable-fill">*/}
                          {/*Rau củ*/}
                          {/*</button>*/}

                          {/*<button  className="txt-m-104 cl9 hov2 trans-04 p-rl-27 p-b-10" data-filter=".fruit-fill">*/}
                          {/*Trái cây Việt Nam*/}
                          {/*</button>*/}

                          {/*<button  className="txt-m-104 cl9 hov2 trans-04 p-rl-27 p-b-10" data-filter=".fruit-juic-fill">*/}
                          {/*Trái cây nhập khẩu*/}
                          {/*</button>*/}

                          {/*<button className="txt-m-104 cl9 hov2 trans-04 p-rl-27 p-b-10" data-filter=".dried-fill">*/}
                          {/*Đồ khô*/}
                          {/*</button>*/}

                          {/*<button className="txt-m-104 cl9 hov2 trans-04 p-rl-27 p-b-10" data-filter=".other-fill">*/}
                          {/*Khác*/}
                          {/*</button>*/}
                      </div>
                  </div>
                  <div className="row isotope-grid">
                      {/* - */}
                      {this.state.products.map((item,index)=>{return (index<8)?
                          <div key={index} className={"col-sm-6 col-md-4 col-lg-3 p-b-75 isotope-item other-fill cat"+item.tbl_category_id +" cat"+this.getmaincat(item.tbl_category_id)}>
                              {/* Block1 */}
                              <div className="block1">
                                  <div className="block1-bg wrap-pic-w bo-all-1 bocl12 hov3 trans-04">

                                      <img src={'https://organic-store.herokuapp.com/api/product/' + item.id} alt="IMG" />
                                      <div className="block1-content flex-col-c-m p-b-46">
                                          <Link to={"/singleproduct/"+item.id} className="txt-m-103 cl3 txt-center hov-cl10 trans-04 js-name-b1">
                                              {item.name}
                                          </Link>
                                          <span className="block1-content-more txt-m-104 cl9 p-t-21 trans-04">
                                            {item.price}vnd
                      </span>
                                          <div className="block1-wrap-icon flex-c-m flex-w trans-05">
                                              <Link to={"/singleproduct/"+item.id} className="block1-icon flex-c-m wrap-pic-max-w">
                                                  <img src="images/icons/icon-view.png" alt="ICON" />
                                              </Link>
                                              <Link to={"/cart/"+item.id} className="block1-icon flex-c-m wrap-pic-max-w js-addcart-b1">
                                                  <img src="images/icons/icon-cart.png" alt="ICON" />
                                              </Link>
                                              <Link to={"/wishlist/"+item.id} className="block1-icon flex-c-m wrap-pic-max-w js-addwish-b1">
                                                  <img className="icon-addwish-b1" src="images/icons/icon-heart.png" alt="ICON" />
                                                  <img className="icon-addedwish-b1" src="images/icons/icon-heart2.png" alt="ICON" />
                                              </Link>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>:null})}

        {/*<div className="sec-product bg0 p-t-145 p-b-25">*/}
          {/*<div className="container">*/}
            {/*<div className="size-a-1 flex-col-c-m p-b-48">*/}
              {/*<div className="txt-center txt-m-201 cl10 how-pos1-parent m-b-14">*/}
                {/*Sản phẩm nổi bật*/}
                {/*<div className="how-pos1">*/}
                  {/*<img src="images/icons/symbol-02.png" alt="IMG" />*/}
                {/*</div>*/}
              {/*</div>*/}
              {/*<h3 className="txt-center txt-l-101 cl3 respon1">*/}
                {/*SẢN PHẨM ORGANIC*/}
              {/*</h3>*/}
            {/*</div>*/}

              {/*<Tabs*/}
                  {/*defaultTab="1"*/}
                  {/*initialSelectedIndex="1"*/}
                  {/*onChange={(tabId) => { console.log(tabId); this.setState({ide:tabId}) }}*/}
                  {/*// selectedIndex={1}*/}
              {/*>*/}
                  {/*<TabList className="p-b-46 flex-w flex-c-m filter-tope-group">*/}
                      {/*{this.state.categories.map((item,index) => { return (item.id<4)?*/}
                      {/*<Tab tabFor={item.id}  className={"txt-m-104 cl9 hov2 trans-04 p-rl-27 p-b-10 how-active1"+"active"}> {item.name}</Tab>*/}
                          {/*:null})}*/}

                  {/*</TabList>*/}
                  {/*<div className="isotope-grid" style={{display:  'unset' , height: '0px'}}>*/}

                      {/*/!*<p>Tab 1 content</p>*!/*/}
                      {/*{*/}
                          {/*// (this.state.isloading)?(<ReactLoading style={{width:'100px',margin:'auto'}} type={"bubbles"} color={"green"} height={'10'} width={'10'} />):*/}
                          {/*// console.log("tabid"+this.state.ide),*/}
                          {/*this.state.listPsOfC.map((item,index) => { return (item.id===this.state.ide)?*/}
                              {/*item.list.map((item1,index1) => { return (index1<8)?*/}
                                  {/*<TabPanel tabId={this.state.ide} classname="col-sm-6 col-md-4 col-lg-3 p-b-75 isotope-item" style={styles}>*/}
                      {/*<div style={{margin: 'auto'}}>*/}
                          {/*<div className="block1-bg wrap-pic-w bo-all-1 bocl12 hov3 trans-04">*/}
                              {/*<img src="images/product-01.jpg" alt="IMG" />*/}
                              {/*<div className="block1-content flex-col-c-m p-b-46">*/}
                                  {/*<Link to={"/singleProduct/"+item1.id} className="txt-m-103 cl3 txt-center hov-cl10 trans-04 js-name-b1">*/}
                                      {/*{item1.name}*/}
                                  {/*</Link>*/}
                                  {/*<span className="block1-content-more txt-m-104 cl9 p-t-21 trans-04">*/}
                          {/*...vnd*/}
                      {/*</span>*/}
                                  {/*<div className="block1-wrap-icon flex-c-m flex-w trans-05">*/}
                                      {/*<Link to={"/singleProduct/"+item1.id} className="block1-icon flex-c-m wrap-pic-max-w">*/}
                                          {/*<img src="images/icons/icon-view.png" alt="ICON" />*/}
                                      {/*</Link>*/}
                                      {/*<Link to={"/cart/"} href="#" className="block1-icon flex-c-m wrap-pic-max-w js-addcart-b1">*/}
                                          {/*<img src="images/icons/icon-cart.png" alt="ICON" />*/}
                                      {/*</Link>*/}
                                      {/*<Link to={"/wishlist/"+item1.id} className="block1-icon flex-c-m wrap-pic-max-w js-addwish-b1">*/}
                                          {/*<img className="icon-addwish-b1" src="images/icons/icon-heart.png" alt="ICON" />*/}
                                          {/*<img className="icon-addedwish-b1" src="images/icons/icon-heart2.png" alt="ICON" />*/}
                                      {/*</Link>*/}
                                  {/*</div>*/}
                              {/*</div>*/}
                          {/*</div>*/}
                      {/*</div>*/}
                                  {/*</TabPanel>      :null}):null})}*/}


                  {/*</div>*/}
              {/*</Tabs>*/}

            {/*<div className="p-b-46">*/}
              {/*<div className="flex-w flex-c-m filter-tope-group">*/}
                {/*{this.state.categories.map((item,index) => { return (index<4)?*/}
                  {/*<button key={index} onClick={this.ic(item.id)} className="txt-m-104 cl9 hov2 trans-04 p-rl-27 p-b-10 how-active1" data-filter={`${item.id}`}>*/}
                    {/*{item.name}*/}
                  {/*</button>*/}
                {/*:null})}*/}
              {/*</div>*/}
            {/*</div>*/}
            {/*<div className="row isotope-grid">*/}
              {/*/!* - *!/*/}
                {/*{*/}
                  {/*// (this.state.isloading)?(<ReactLoading style={{width:'100px',margin:'auto'}} type={"bubbles"} color={"green"} height={'10'} width={'10'} />):*/}
                    {/*this.state.listPsOfC.map((item,index) => { return (item.id===this.state.ide)?*/}
                    {/*item.list.map((item1,index1) => { return (index1<8)?*/}
                    {/*// fruit-juic-fill other-fill*/}
              {/*<div className={"col-sm-6 col-md-4 col-lg-3 p-b-75 isotope-item"+ this.state.ide +" 1"}>*/}
                {/*/!* Block1 *!/*/}
                {/*<div className="block1">*/}
                  {/*<div className="block1-bg wrap-pic-w bo-all-1 bocl12 hov3 trans-04">*/}
                    {/*<img src="images/product-01.jpg" alt="IMG" />*/}
                    {/*<div className="block1-content flex-col-c-m p-b-46">*/}
                      {/*<Link to={"/singleProduct/"+item1.id} className="txt-m-103 cl3 txt-center hov-cl10 trans-04 js-name-b1">*/}
                          {/*{item1.name}*/}
                      {/*</Link>*/}
                      {/*<span className="block1-content-more txt-m-104 cl9 p-t-21 trans-04">*/}
                          {/*{item1.price}vnd*/}
                      {/*</span>*/}
                      {/*<div className="block1-wrap-icon flex-c-m flex-w trans-05">*/}
                        {/*<Link to={"/singleProduct/"+item1.id} className="block1-icon flex-c-m wrap-pic-max-w">*/}
                          {/*<img src="images/icons/icon-view.png" alt="ICON" />*/}
                        {/*</Link>*/}
                        {/*<Link to={"/cart/"+item1.id} href="#" className="block1-icon flex-c-m wrap-pic-max-w js-addcart-b1">*/}
                          {/*<img src="images/icons/icon-cart.png" alt="ICON" />*/}
                        {/*</Link>*/}
                        {/*<Link to={"/wishlist/"+item1.id} className="block1-icon flex-c-m wrap-pic-max-w js-addwish-b1">*/}
                          {/*<img className="icon-addwish-b1" src="images/icons/icon-heart.png" alt="ICON" />*/}
                          {/*<img className="icon-addedwish-b1" src="images/icons/icon-heart2.png" alt="ICON" />*/}
                        {/*</Link>*/}
                      {/*</div>*/}
                    {/*</div>*/}
                  {/*</div>*/}
                {/*</div>*/}
              {/*</div>:null}):null})}*/}

            {/*</div>*/}
      </div>
          </div>

        </div>
        {/* Deal */}

        <section className="sec-deal bg-img1" style={{backgroundImage: 'url("images/bg-01.jpg")'}}>
          <div className="flex-w flex-m how-pos2-parent">
            <img className="how-pos2 respon4 dis-none-xl" src="images/deal1.png" alt="IMG" />
            <div className="size-w-3 txt-center wrap-pic-max-s w-full-lg">
              <img src={'https://organic-store.herokuapp.com/api/product/' + this.state.deal.id} alt="IMG" />
            </div>
            <div className="size-w-4 p-t-105 p-b-90 p-r-15 respon3">
              <div className="size-a-1 flex-col-l-m p-b-35">
                <div className="txt-m-201 cl10 how-pos1-parent m-b-14">
                  Giá tốt nhất
                  <div className="how-pos1">
                    <img src="images/icons/symbol-02.png" alt="IMG" />
                  </div>
                </div>
                <h3 className="txt-l-101 cl3 respon1">
                  deal chớp nhoáng
                </h3>
              </div>
              <div className="p-b-32">
                  <Link to={'/singleproduct/'+this.state.deal.id} className="txt-m-105 cl6 hov-cl10 trans-04">
                    {this.state.deal.name} Hội An
                  </Link>
                <div className="txt-m-105 p-t-15 p-b-22">
                  <span className="cl9">
                    {this.state.deal.price}vnd
                  </span>
                  <span className="cl10">
                    Chỉ còn 15vnd
                  </span>
                </div>
                <p className="txt-s-102 cl9">
                    {this.state.deal.description}
                  Bắp nếp Cẩm Nam ngọt, thơm, mềm dẻo rất đặc trưng hoàn toàn khác biệt với những nơi khác do vị trí nằm ở bãi bồi cồn bãi bốn bề sông nước, khí hậu, thổ nhưỡng quanh năm ôn hòa
                </p>
              </div>
              <div className="flex-w coutdown100 p-b-22" data-year={0} data-month={0} data-date={10} data-hours={23} data-minutes={0} data-seconds={0} data-timezone="auto">
                <div className="flex-col-c-m how1 p-b-5 m-r-20 m-b-20">
                  <span className="txt-l-102 cl6 days">
                    10
                  </span>
                  <span className="txt-m-106 cl9">
                    ngày
                  </span>
                </div>
                <div className="flex-col-c-m how1 p-b-5 m-r-20 m-b-20">
                  <span className="txt-l-102 cl6 hours">
                    25
                  </span>
                  <span className="txt-m-106 cl9">
                    giờ
                  </span>
                </div>
                <div className="flex-col-c-m how1 p-b-5 m-r-20 m-b-20">
                  <span className="txt-l-102 cl6 minutes">
                    56
                  </span>
                  <span className="txt-m-106 cl9">
                    phút
                  </span>
                </div>
                <div className="flex-col-c-m how1 p-b-5 m-r-20 m-b-20">
                  <span className="txt-l-102 cl6 seconds">
                    42
                  </span>
                  <span className="txt-m-106 cl9">
                    giây
                  </span>
                </div>
              </div>
              <div className="flex-w">
                  <Link to={'/singleproduct/'+this.state.deal.id} className="flex-c-m txt-s-103 cl6 size-a-2 how-btn1 bo-all-1 bocl11 hov-btn1 trans-04">
                  Mua ngay
                  <span className="lnr lnr-chevron-right m-l-7" />
                  <span className="lnr lnr-chevron-right" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* Product2 */}
        <section className="sec-product2 bg0 p-t-110 p-b-50">
          <div className="size-w-20 m-rl-auto p-rl-15">
            <div className="row">
              <div className="col-lg-6 p-b-100">
                <div className="p-rl-15 p-rl-0-xl">
                  <div className="size-a-1 flex-col-c-m p-b-44">
                    <div className="txt-center txt-m-202 cl10 how-pos1-parent m-b-8">
                      SẢN PHẨM ORGANIC ƯA CHUỘNG
                      <div className="how-pos1 p-b-3">
                        <img src="images/icons/symbol-02.2.png" alt="IMG" />
                      </div>
                    </div>
                    <h3 className="txt-center">
                      <span className="txt-l-109 cl6">
                        SẢN PHẨM
                      </span>
                      <span className="txt-l-108 cl3">
                        NỔI BẬT
                      </span> 
                    </h3>
                  </div>
                  {/* slide4 */}
                  <div className="wrap-slick4 bo-all-1 bocl12">
                    <div className="slick4">
                      {this.state.products.sort((c,d)=>  d.buy-c.buy).map((item,index) => { return (index<6)?
                          <div key={index} className="item-slick4">
                            <div className="block1">
                              <div className="block1-bg wrap-pic-w">
                                <img src={'https://organic-store.herokuapp.com/api/product/' + item.id} alt="IMG"/>
                                <div className="block1-content flex-col-c-m p-b-46">
                                  {/*<a href="product-single.html" className="txt-m-103 cl3 txt-center hov-cl10 trans-04 js-name-b1">*/}
                                  <Link to="/singleProduct"
                                        className="txt-m-103 cl3 txt-center hov-cl10 trans-04 js-name-b1">
                                    {item.name}
                                  </Link>
                                  {/*</a>*/}
                                  <span className="block1-content-more txt-m-104 cl9 p-t-21 trans-04">
                                     {item.price}
                                 </span>
                                  <div className="block1-wrap-icon flex-c-m flex-w trans-05">
                                    {/*<a href="product-single.html" className="block1-icon flex-c-m wrap-pic-max-w">*/}
                                    <Link to={"/singleProduct"+item.id} className="block1-icon flex-c-m wrap-pic-max-w">
                                      <img src="images/icons/icon-view.png" alt="ICON"/>
                                    </Link>
                                    {/*</a>*/}
                                    {/*<a href="#" className="block1-icon flex-c-m wrap-pic-max-w js-addcart-b1">*/}
                                    <Link to={"/cart"} className="block1-icon flex-c-m wrap-pic-max-w js-addcart-b1">
                                      <img src="images/icons/icon-cart.png" alt="ICON"/>
                                    </Link>
                                    {/*</a>*/}
                                    {/*<a href="wishlist.html" className="block1-icon flex-c-m wrap-pic-max-w js-addwish-b1">*/}
                                    <Link to={"/wishlist"} className="block1-icon flex-c-m wrap-pic-max-w js-addwish-b1">
                                      <img className="icon-addwish-b1" src="images/icons/icon-heart.png" alt="ICON"/>
                                      <img className="icon-addedwish-b1" src="images/icons/icon-heart2.png" alt="ICON"/>
                                    </Link>
                                    {/*</a>*/}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>:null})}

                    </div>
                    <div className="wrap-arrow-slick4 flex-w">
                      <button className="arrow-slick4 prev-slick4">
                        <i className="fa fa-angle-left" aria-hidden="true" />
                      </button>
                      <button className="arrow-slick4 next-slick4">
                        <i className="fa fa-angle-right" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 p-b-100">
                <div className="p-rl-15 p-rl-0-xl">
                  <div className="size-a-1 flex-col-c-m p-b-44">
                    <div className="txt-center txt-m-202 cl10 how-pos1-parent m-b-8">
                      SẢN PHẨM CÁC NÔNG TRẠI
                      <div className="how-pos1 p-b-3">
                        <img src="images/icons/symbol-02.2.png" alt="IMG" />
                      </div>
                    </div>
                    <h3 className="txt-center">
                      <span className="txt-l-109 cl6">
                        SẢN PHẨM
                      </span>
                      <span className="txt-l-108 cl3">
                        SALE OFF
                      </span> 
                    </h3>
                  </div>
                  {/* slide4 */}
                  <div className="wrap-slick4 bo-all-1 bocl12">
                    <div className="slick4">
                        {this.state.products.sort((c,d)=>  d.buy-c.buy).map((item,index) => { return (index<6)?
                      <div key={index} className="item-slick4">
                        {/* Block1 */}
                        <div className="block1">
                          <div className="block1-bg wrap-pic-w">
                              <img src={'https://organic-store.herokuapp.com/api/product/' + item.id} alt="IMG"/>
                            <div className="block1-content flex-col-c-m p-b-46">
                                <Link to="/singleProduct"
                                      className="txt-m-103 cl3 txt-center hov-cl10 trans-04 js-name-b1">
                                    {item.name}
                                </Link>

                              <span className="block1-content-more txt-m-104 cl9 p-t-21 trans-04">
                                {item.price}
                              </span>
                              <div className="block1-wrap-icon flex-c-m flex-w trans-05">
                                  <Link to={"/singleProduct"+item.id} className="block1-icon flex-c-m wrap-pic-max-w">
                                      <img src="images/icons/icon-view.png" alt="ICON"/>
                                  </Link>
                                <a href="#" className="block1-icon flex-c-m wrap-pic-max-w js-addcart-b1">
                                  <img src="images/icons/icon-cart.png" alt="ICON" />
                                </a>
                                <a href="wishlist.html" className="block1-icon flex-c-m wrap-pic-max-w js-addwish-b1">
                                  <img className="icon-addwish-b1" src="images/icons/icon-heart.png" alt="ICON" />
                                  <img className="icon-addedwish-b1" src="images/icons/icon-heart2.png" alt="ICON" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>	
                      </div>:null})}

                    </div>
                    <div className="wrap-arrow-slick4 flex-w">
                      <button className="arrow-slick4 prev-slick4">
                        <i className="fa fa-angle-left" aria-hidden="true" />
                      </button>
                      <button className="arrow-slick4 next-slick4">
                        <i className="fa fa-angle-right" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Blog */}
              </div>
              )}
      </div>
        );
    }
}
const mapStateToProps = (state) => {
  return {
    products : state.products,
    categories : state.categories
    // ,
    // categoriesbyidp: state.categories
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return{
    listPALL : () => {
      dispatch(listPARequest());
    },
    // listCALL : () => {
    //     dispatch(listCARequest());
    // },
    listCIDPCALL : (id) => {
      dispatch(listCIDPRequest(id));
    },
    // listPIDCACALL : (id) => {
    //     dispatch(listPIDCARequest(id));
    // },

  }
}
export default connect(mapStateToProps,mapDispatchToProps) (Home)