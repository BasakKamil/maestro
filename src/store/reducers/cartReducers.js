

const cartReducers = (state,action) => {
    if(state === undefined){
        return {
            cart: []
        }
    }
    // eslint-disable-next-line default-case
    switch(action.type){
        case 'ADD_TO_CART' : {
           const cart = [...state.cart,action.product]
            return {
                ...state,
                cart

            }
        }
        // eslint-disable-next-line no-fallthrough
        case 'REMOVE_FROM_CART' : {
           const cart = [...state.cart]
           cart.splice(action.index, 1)
           return {
               ...state,
               cart
           }
        }
        // eslint-disable-next-line no-fallthrough
        default : {
            return state
        }

    }
}
export default cartReducers