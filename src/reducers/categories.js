import * as types from './../constants/ActionTypes';

var maxValue = (categories) => {
    var max= categories.reduce(function (a,b) {
        return Math.max(a.parent_id,b.parent_id);
    })
}
var findIndex = (categories,id) => {
    var result =-1;
    categories.forEach((category,index) =>{
    if (category.id === id) {
        result=index;
    }
});
    return result;
}
//
// var findItem = (categories,id) => {
//     var result =-1;
//     categories.forEach((category,index) =>{
//         if (category.id === id) {
//             result=category;
//         }
//     });
//     return result;
// }

var findCatbyIDP= (categories,id) => {
    var a=[];
    var result =null;
    if(id===1) return categories;
    categories.forEach((category,index) =>{
        // alert(category.parent_id);
        if (category.parent_id === id) {
            // result=index;
            a.push(category);
            // alert(a.length);
        }
    });
    return a;
}

// var MultiCat= (category,id) => {
//     var a=[];
//     var result =null;
//         a.push(category.parent_id);
//         MultiCat(findItem(categories))
//
//     // categories.forEach((category,index) =>{
//     //     // alert(category.parent_id);
//     //     if (category.parent_id === id) {
//     //         // result=index;
//     //         a.push(category);
//     //         // alert(a.length);
//     //     }
//     // });
//     return a;
// }

var findCatbyIDPC= (categories,id) => {
    var a=[];
    var result =null;
    categories.forEach((category,index) =>{
        // alert(category.parent_id);
        if (category.parent_id <= id) {
            // result=index;
            a.push(category);
            // alert(a.length);
        }
    });
    return a;
}

var initialState = [];
const categories = (state = initialState,action) => {
    var max=-1;
    var index=-1;
    var { id } = action;
    switch (action.type) {
        case types.C_ALL:
            // return state;
            state = action.categories;
            // max = max(state);
            return [...state];
        case types.C_ID_P:
            // return state;
            // state = action.categories;
            // alert("ham"+id);
            state= findCatbyIDP(action.categories,id)
            return [...state];
        case types.C_ID_P_C:
            // return state;
            // state = action.categories;
            // alert("ham"+id);
            state= findCatbyIDPC(action.categories,id)
            return [...state];

        default:return [...state];
    }
    // return state;
}
export default categories;