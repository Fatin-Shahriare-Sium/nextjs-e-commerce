import { createContext, useContext, useEffect, useReducer, useState } from "react";
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
    useEffect(() => {

        dispatch({ type: Product_Action.LOAD_CART })

        if (localStorage.getItem('userx')) {
            setAuth({ user: JSON.parse(localStorage.getItem('userx')), tokenx: localStorage.getItem('tokenx') })
        }

    }, [])
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
