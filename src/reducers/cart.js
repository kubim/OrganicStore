const cartState = {
    cart:[],
    sum:0
}
const cartReducer =(state=cartState,action)=>{
    switch (action.type) {

        case 'ADD_TO_CART':{
            let check = findProductInCart(state.cart,action.product);
            if(check!==-1) {
                state.cart[check].quantity+=1;
                return {cart:state.cart,sum:state.sum+=action.product.price};
            }
            else{
                return {cart: state.cart.concat(action.product), sum: state.sum += action.product.price};
            }
        }
        case 'DOWN_QUANTITY':{
            let check = findProductInCart(state.cart,action.product);
            if(state.cart[check].quantity>1){
                state.cart[check].quantity-=1;
                return {cart:state.cart,sum:state.sum-=action.product.price};
            }
            else return state;
        }
        case 'DELETE_CART':{
            let check = findProductInCart(state.cart,action.product);
            return {cart:state.cart.filter(x=>x.id!==action.product.id),sum:state.sum-=action.product.price*state.cart[check].quantity};
        }
        default:
            return state;
    }
}
export default cartReducer;

var findProductInCart = (cart,product)=>{
    var index =-1;
    if(cart.length>0){
        for(let i=0;i<cart.length;i++){
            if(cart[i].id===product.id){
                index=i;
                break;
            }
        }
    }
    return index;
}