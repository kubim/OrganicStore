// import * as types from './../constants/ActionTypes';
// // var initialState = [];
// // var myReducer = (state = initialState,action) => {
// //     switch (action.type) {
// //         case types.P_ALL: return state;
// //
// //         default:return state;
// //     }
// //     return state;
// // }
// var initialState = {
//     products:[],
//     isLoading:false,
//     error:false,
// };
// const myReducer = (state = initialState,action) => {
//     switch (action.type) {
//         case 'PRODUCT_ALL':
//             return {products:[],error:false,isLoading: true};
//         case 'FETCH_SUCCESS':
//             return {products:action.products,error:false,isLoading: false};
//         case 'FETCH_ERROR':
//             return {products:[],error:true,isLoading:false};
//         default:
//             return state;
//     }
// }
// export default myReducer;