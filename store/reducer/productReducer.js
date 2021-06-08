import useUrl from "../../component/hooks/useUrl"
import Navbar_Action from "../action/navbarAction"
import Product_Action from "../action/productAction"
let {url} =useUrl()

let productReducer=(state,action)=>{
    if(action.type==Product_Action.SAVE_PRODUCT){
        return{
            ...state,
            products:action.payload.allProducts
        }
    }else if(action.type==Product_Action.ADD_CART){
        let forCart=state.products.find(sig=>sig._id==action.payload.id)
        console.log(action);
        
            localStorage.setItem('cartedx',JSON.stringify([...state.carted,{...forCart,qty:parseInt(action.payload.qty)}]))
        
        return{
            ...state,
            carted:[...state.carted,{...forCart,qty:parseInt(action.payload.qty)}],
            controller:{...state.controller,cartShow:true}

        }
    }else if(action.type==Product_Action.INCREASE_CART){
        let preCartedArray=state.carted
        let index=preCartedArray.findIndex(sig=>sig._id==action.payload.id)
        
        preCartedArray[index].qty+=1
        localStorage.setItem('cartedx',JSON.stringify(preCartedArray))
        return{
            ...state,
            carted:preCartedArray
        }
    }else if(action.type==Product_Action.DECREASE_CART){
        let preCartedArray=state.carted
        let index=preCartedArray.findIndex(sig=>sig._id==action.payload.id)

        preCartedArray[index].qty>0 ? preCartedArray[index].qty-=1:preCartedArray
        localStorage.setItem('cartedx',JSON.stringify(preCartedArray))
        return{
            ...state,
            carted:preCartedArray
        }
    }else if(action.type==Product_Action.REMOVE_CART){
        
        let filtered=state.carted.filter(sig=>sig._id!== action.payload.id)
        
            localStorage.setItem('cartedx',JSON.stringify(filtered))
    
        return{
            ...state,
            carted:filtered
        }
    }else if(action.type==Product_Action.LOAD_CART){
        return{
            ...state,
            carted:localStorage.getItem('cartedx')?JSON.parse(localStorage.getItem('cartedx')):[]
        }
    }
    
    return state;
}

export default productReducer;

