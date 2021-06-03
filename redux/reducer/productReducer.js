import useUrl from "../../component/hooks/useUrl"
import Product_Action from "../action/productAction"
let {url} =useUrl()
let inState={
    products:[],
    cart:[],
    count:5000
}
let productReducer=(state=inState,action)=>{
    
    if(action.type==Product_Action.SAVE_PRODUCT){
        console.log(action);
        return{
            ...state,
            products:action.payload
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