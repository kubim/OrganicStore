const loginState={
  account:JSON.parse(localStorage.getItem('userData')),
  pending:false,
  error:false,
}
export default function loginReducer(state = loginState, action) {
  switch (action.type) {
    case 'PENDING':
      return {account:null,error:false,pending: true};
    case 'LOGIN_SUCCESS':{
      localStorage.setItem('userData', JSON.stringify(action.data));
      return {account:Object.assign(action.data),error:false,pending: false};
    }
    case 'LOGIN_ERROR':
      return {account:null,error:true,pending:false};
    case 'LOGOUT':{
      localStorage.removeItem("userData");
      return {account:null,error:false,pending:false};
    }
    default:
      return state;
  }
}

