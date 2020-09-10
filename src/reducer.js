export const intialState = {
    cart: [],
    user: null
};
// selector
export const getCartTotal = (cart) => cart?.reduce((amount, item) => item.price + amount, 0);

// reducer are how we are able to dispatch this data into datalayer
// action is something what we want to do with the cart
const reducer = (state, action) => {
    switch(action.type){
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.item],

            };
        
        case 'REMOVE_FROM_CART':
            const index = state.cart.findIndex((item)=>item.id === action.id);
            let newCart = [...state.cart];

            if (index >= 0){
                newCart.splice(index, 1);
            }else {
                console.warn(`can't remove product with id: ${action.id}`)
            }

            return {
                ...state,
                cart: newCart
            }

        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        
        default:
            return state;
    }
}

export default reducer;