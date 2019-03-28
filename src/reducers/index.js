import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
// import Link from "react-router-dom/es/Link";
import { combineReducers } from 'redux';
import products from './products'
import cartReducer from './cart'          //QUAN
import loginReducer from './login';
//import detailReducer from './detail'
import categories from './categories'

//BIM

//BIM
const myReducer = combineReducers({
    login:loginReducer,
    cart:cartReducer,                                       //QUAN
    products, //tasks: tasks
    categories
});


export  default myReducer;



