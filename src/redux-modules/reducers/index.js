import { actions } from './actions';

const appReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case actions.SET_PRODUCTS_DATA:
            return {
                ...state,
                products: action.productsData.products
            };
        case actions.ADD_NEW_PRODUCT:
            return {
                ...state,
                products: [
                    {
                        id: Math.max.apply(Math, state.products.map(p => p.id)) + 1,
                        title: action.productsData.title,
                        author: action.productsData.author,
                        year: action.productsData.year,
                        rating: action.productsData.rating,
                        description: '',
                        price: '',
                        stock: '',
                        category: ''
                    },
                    ...state.products,
                ],
            };
        case actions.REMOVE_PRODUCT:
            const idsToRemove = action.productsData.map(p => p.id);
            return {
                ...state,
                products: state.products.filter(p => !idsToRemove.includes(p.id))
            };
        default:
            return state;
    }
}
export default appReducer