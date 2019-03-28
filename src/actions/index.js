import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
// import Link from "react-router-dom/es/Link";
import * as types from './../constants/ActionTypes';
import callApi from './../utils/apiCaller'


//product
export const listPARequest = () => {
    return (dispatch) => {
        return callApi(0,'products','GET',null).then( res => {
            dispatch(listPA(res.data))// save d to list
        });
    }
}

export const listPA = (products) => {
    return {
        type : types.P_ALL,
        products //payload: products
    }
}

export const PSRequest = (id) => {
    return (dispatch) => {
        // return callApi(0,'products','GET',null).then( res => {
        return callApi(0,`product/${id}`,'GET',null).then (res =>{
            dispatch(PS(res.data))// save d to list
        });
    }
}

export const PS = (products) => {
    alert(products.id);
    return {
        type : types.P,
        products, //payload: products
        // id
    }
}

export const listPIDCARequest = (id) => {
    return (dispatch) => {
        return callApi(0,'products','GET',null).then( res => {
            dispatch(listPA(res.data,id))// save d to list
        });
    }
}

export const listPIDCA = (products,id) => {
    alert(products.id);
    return {
        type : types.P_IDC,
        products, //payload: products
        id
    }
}

//cat
export const listCARequest = () => {
    return (dispatch) => {
        return callApi(1,'categories','GET',null).then( res => {
            dispatch(listCA(res.data))// save d to list
        });
    }
}

export const listCA = (categories) => {
    return {
        type : types.C_ALL,
        categories //payload: categories
    }
}

export const listCIDPRequest = (id) => {
    return dispatch => {
        // return callApi(1,`categories/${id}`,'GET',null).then (res =>{
        return callApi(1,'categories','GET',null).then( res => {
            dispatch(listCIDP(id, res.data));
        })
    }
}
export const listCIDP = (id, categories) => {
    return {
        type: types.C_ID_P,
        id, //payload: categories
        categories
    }
}

export const listCIDPCRequest = (id) => {
    return dispatch => {
        // return callApi(1,`categories/${id}`,'GET',null).then (res =>{
        return callApi(1,'categories','GET',null).then( res => {
            dispatch(listCIDPC(id, res.data));
        })
    }
}
export const listCIDPC = (id, categories) => {
    return {
        // alert("listCIDPC"+id);
        type: types.C_ID_P_C,
        id, //payload: categories
        categories
    }
}


//QUAN
export const addCart = (product) => {
    return {
        type : 'ADD_TO_CART',
        product //payload: products
    }
}
export const delCart = (product) => {
    return {
        type : 'DELETE_CART',
        product, //payload: products
    }
}
export const downQuantity = (product) => {
    return {
        type : 'DOWN_QUANTITY',
        product //payload: products
    }
}
// export const onDetail = (product) => {
//     return {
//         type : 'ON_DETAIL',
//         product //payload: products
//     }
// }
//QUAN


