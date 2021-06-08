const { default: Navbar_Action } = require("../action/navbarAction")

let navBarReducer=(state={showCart:false},action)=>{
    
    if(action.type==Navbar_Action.TOGGLE_CART){

        return{
            ...state,
            showCart:!state.showCart
        }
    }else if(action.type==Navbar_Action.CLOSE_CART){

        return{
            ...state,
            showCart:false
        }
    }

    return state

}

export default navBarReducer;