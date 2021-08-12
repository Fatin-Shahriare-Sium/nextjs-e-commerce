import { createContext, useContext, useEffect, useReducer, useState } from "react";
import UseUpdate from "../component/hooks/useUpdate";
import Product_Action from "./action/productAction";
import productReducer from "./reducer/productReducer";

let inState = {
    products: [],
    carted: [],
    controller: { cartShow: false },
    error: { msg: '', color: '' },
    carosule: { category: true, carosuleImg: true }
}


let DataContext = createContext()

export let useData = () => {
    return useContext(DataContext)
}

let DataProvider = ({ children }) => {

    let [auth, setAuth] = useState({ user: '', tokenx: '' })
    let [state, dispatch] = useReducer(productReducer, inState)
    let { updateCartedProductToServer, updateCartedProductToClient } = UseUpdate()

    useEffect(() => {
        console.log('tokenx value', localStorage.getItem('tokenx'));
        console.log("typeof window !== 'undefined' && localStorage.getItem('userx')");

        if (localStorage.getItem('tokenx') == null || localStorage.getItem('tokenx') == 'undefined') {
            setAuth({ user: '', tokenx: '' })
        } else {

            console.log(" if (localStorage.getItem('tokenx'))");
            setAuth({ user: JSON.parse(localStorage.getItem('userx')), tokenx: localStorage.getItem('tokenx') })
        }


        // localStorage.setItem('tokenx', JSON.stringify(''))
    }, [typeof window !== 'undefined' && localStorage.getItem('tokenx')])

    useEffect(() => {


        if (auth.user) {

            updateCartedProductToClient(auth.user._id)
            dispatch({ type: Product_Action.LOAD_CART })
        } else {
            dispatch({ type: Product_Action.LOAD_CART })
        }
    }, [auth])

    useEffect(() => {

        if (auth.user) {
            updateCartedProductToServer(auth.user._id)
        }
    }, [JSON.stringify(state.carted)])


    let store = {
        productState: state,
        auth,
        dispatch,
        error: state.error,
        carosuleState: state.carosule
    }
    return (
        <DataContext.Provider value={store}>
            {children}
        </DataContext.Provider>
    )
}


export default DataProvider;
