import useUrl from "../../component/hooks/useUrl"
import Navbar_Action from "../action/navbarAction"
import Product_Action from "../action/productAction"
let { url } = useUrl()

let productReducer = (state, action) => {
    if (action.type == Product_Action.SAVE_PRODUCT) {
        return {
            ...state,
            products: action.payload.allProducts
        }
    } else if (action.type == Product_Action.ADD_CART) {
        let forCart = state.products.find(sig => sig._id == action.payload.id)
        let alreadyIncarted = state.carted.filter(sig => sig._id == action.payload.id)
        if (alreadyIncarted.length > 0) {
            return {
                ...state,
                carted: [...state.carted],
                controller: { ...state.controller, cartShow: action.payload.showCart },
                error: { msg: 'You have already carted this item', color: 'warning' }

            }
        }
        console.log('alreadyIncarted', alreadyIncarted);
        localStorage.setItem('cartedx', JSON.stringify([...state.carted, { ...forCart, qty: parseInt(action.payload.qty) }]))

        return {
            ...state,
            carted: [...state.carted, { ...forCart, qty: parseInt(action.payload.qty) }],
            controller: { ...state.controller, cartShow: action.payload.showCart }

        }
    } else if (action.type == Product_Action.INCREASE_CART) {
        let preCartedArray = state.carted
        let index = preCartedArray.findIndex(sig => sig._id == action.payload.id)

        preCartedArray[index].qty += 1
        localStorage.setItem('cartedx', JSON.stringify(preCartedArray))
        return {
            ...state,
            carted: preCartedArray
        }
    } else if (action.type == Product_Action.DECREASE_CART) {
        let preCartedArray = state.carted
        let index = preCartedArray.findIndex(sig => sig._id == action.payload.id)

        preCartedArray[index].qty > 0 ? preCartedArray[index].qty -= 1 : preCartedArray
        localStorage.setItem('cartedx', JSON.stringify(preCartedArray))
        return {
            ...state,
            carted: preCartedArray
        }
    } else if (action.type == Product_Action.REMOVE_CART) {

        let filtered = state.carted.filter(sig => sig._id !== action.payload.id)

        localStorage.setItem('cartedx', JSON.stringify(filtered))

        return {
            ...state,
            carted: filtered
        }
    } else if (action.type == Product_Action.LOAD_CART) {
        return {
            ...state,
            carted: localStorage.getItem('cartedx') ? JSON.parse(localStorage.getItem('cartedx')) : []
        }
    } else if (action.type == Navbar_Action.TOGGLE_CART) {
        return {
            ...state,
            controller: { ...state.controller, cartShow: !state.controller.cartShow }
        }
    } else if (action.type == Navbar_Action.REMOVE_ERROR) {
        return {
            ...state,
            error: { msg: '', color: '' }

        }
    } else if (action.type == Navbar_Action.TOOGLE_CATEGORY) {
        return {
            ...state,
            carosule: { ...state.carosule, category: !state.carosule.category }
        }
    }

    return state;
}

export default productReducer;

