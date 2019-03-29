const cartState = JSON.parse(localStorage.getItem('cart'))!==null?JSON.parse(localStorage.getItem('cart')):{cart:[],sum:0}
const cartReducer =(state=cartState,action)=>{
    switch (action.type) {
        case 'ADD_WITH_QUANTITY':{
            let check = findProductInCart(state.cart,action.product);
            if(check!==-1) {
                state.cart[check].quantity+=action.quantity;
            }
            else{
                action.product.quantity=action.quantity;
                state.cart=state.cart.concat(action.product);
            }
            state.sum += action.product.price*action.quantity;
            localStorage.setItem('cart', JSON.stringify(state));
            return {...state};
        }
        case 'ADD_TO_CART':{
            let check = findProductInCart(state.cart,action.product);
            if(check!==-1) {
                state.cart[check].quantity+=1;
            }
            else{
                action.product.quantity=1;
                state.cart=state.cart.concat(action.product);
            }
            state.sum += action.product.price
            localStorage.setItem('cart', JSON.stringify(state));
            return {...state};
        }
        case 'DOWN_QUANTITY':{
            let check = findProductInCart(state.cart,action.product);
            if(state.cart[check].quantity>1){
                state.cart[check].quantity-=1;
                state.sum-=action.product.price;
            }
            localStorage.setItem('cart', JSON.stringify(state));
            return {...state};
        }
        case 'DELETE_CART':{
            let check = findProductInCart(state.cart,action.product);
            state.sum-=action.product.price*state.cart[check].quantity;
            state.cart=state.cart.filter(x=>x.id!==action.product.id);
            localStorage.setItem('cart', JSON.stringify(state));
            return {...state}
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