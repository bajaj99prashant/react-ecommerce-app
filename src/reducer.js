export const intialState = {
    cart: [],
};

// reducer are how we are able to dispatch this data into datalayer
// action is something what we want to do with the cart
const reducer = (state, action) => {
    switch(action.type){
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.item],

            };
        
        default:
            return state;
    }
}

export default reducer;