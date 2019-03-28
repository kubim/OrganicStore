const detailReducer =(state=null,action)=>{
    switch (action.type) {
        case 'ON_DETAIL':{
            return {state:state=action.product}
        }
        default:
            return state;
    }
}
export default detailReducer;
