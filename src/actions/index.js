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
        }).catch(function (error) {
            console.log(error)
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
        }).catch(function (error) {
            console.log(error)
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

// export const listPIDCARequest = (id) => {
//     return (dispatch) => {
//         return callApi(0,'products','GET',null).then( res => {
//             dispatch(listPA(res.data,id))// save d to list
//         }).catch(function (error) {
//             console.log(error)
//         });
//     }
// }
// export const listPIDCARequest = (id) => {
//     return (dispatch) => {
//         return callApi(0,'products','GET',null).then( res => {
//             dispatch(listPIDCA(res.data,id))// save d to list
//         }).catch(function (error) {
//             console.log(error)
//         });
//     }
// }
export const listPIDCARequest = (id,data) => {
    alert(data);
    return (dispatch) => {
        return
        dispatch(listPIDCA(data,id))// save d to list

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
        }) .catch(function (error) {
            console.log(error)
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
            dispatch(listCIDP(id, res.data))
        }).catch(function (error) {
            console.log(error);
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
        }).catch(function (error) {
            console.log(error)
        })
    }
}
// export const listCIDPCRequest = (id,data) => {
//     return listCIDPC(id, data);
// }
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
//QUAN
export const pending = () =>{
    return {
        type:'PENDING'
    }
}
export const loginSuccess = (data) =>{
    return {
        type:'LOGIN_SUCCESS',
        data
    }
}
export const loginError = () =>{
    return {
        type:'LOGIN_ERROR'
    }
}
export const logout= () =>{
    return {
        type:'LOGOUT'
    }
}
export function login(email,password){
    return dispatch =>{
        dispatch(pending())
        Axios.post('https://api-organic.herokuapp.com/authenticate',{
            email:email,
            password:password
        }).then(res=>{
            alert("Login Success!")
            dispatch(loginSuccess(res.data))
        }).catch(err=>{
            alert("Login Error!")
            dispatch(loginError());
        });
    };
}
export const addWithQuantity = (product,quantity) => {
    return {
        type : 'ADD_WITH_QUANTITY',
        product,
        quantity
    }
}
//QUAN



