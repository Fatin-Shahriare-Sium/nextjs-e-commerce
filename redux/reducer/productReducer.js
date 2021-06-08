import useUrl from "../../component/hooks/useUrl"
import Product_Action from "../action/productAction"
let {url} =useUrl()
let inState={
    products:[],
    carted:[],
    user:typeof window !=='undefined' && localStorage.getItem('userx'),
    tokenx:typeof window !=='undefined' && localStorage.getItem('tokenx')
}
let productReducer=(state=inState,action)=>{
    if(action.type==Product_Action.SAVE_PRODUCT){
        return{
            ...state,
            products:action.payload
        }
    }else if(action.type==Product_Action.ADD_CART){
        let forCart=state.products.find(sig=>sig._id==action.payload.id)
        console.log(action);
        return{
            ...state,
            carted:[...state.carted,{...forCart,qty:parseInt(action.payload.qty)}]
        }
    }else if(action.type==Product_Action.INCREASE_CART){
        let preCartedArray=state.carted
        let index=preCartedArray.findIndex(sig=>sig._id==action.payload.id)
        
        preCartedArray[index].qty+=1

        return{
            ...state,
            carted:preCartedArray
        }
    }else if(action.type==Product_Action.DECREASE_CART){
        let preCartedArray=state.carted
        let index=preCartedArray.findIndex(sig=>sig._id==action.payload.id)

        preCartedArray[index].qty>0 ? preCartedArray[index].qty-=1:preCartedArray

        return{
            ...state,
            carted:preCartedArray
        }
    }
    
    return state;
}

export default productReducer;


export let loadProducts=()=>async (dispatch)=>{
    let res=await fetch(`${url}/product/all`)
    let data=await res.json()
    console.log('data in redux',data.allProduct);
    dispatch({
        type:Product_Action.SAVE_PRODUCT,
        payload:data.allProduct
    })
}