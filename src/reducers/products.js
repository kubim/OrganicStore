import * as types from './../constants/ActionTypes';


var findItem = (products,id) => {
    var a = [] ;
    products.forEach((product,index) =>{
        if (product.tbl_category_id === id) {
            a.push(product);
        }
    });
    return a;
}

var initialState = [];
const products = (state = initialState,action) => {
    var { id } = action;
    // alert(id);
    switch (action.type) {
        case types.P_ALL:
            state = action.products;
            return [...state];
        case types.P:
            // return state;
            // state = findPbyID(action.products,id);
            return {state:action.products};
        case types.P_IDC:
            state = findItem(action.products,id);
            return [...state];
        default:return [...state];
    }
    // return state;
}

export default products;