export const ACTIONS = {
    ADD_BOOK: 'add_book',
}

export default function bookReducer(state, action) {
    switch(action.type) {
        case ACTIONS.ADD_BOOK: 
            return [...state, action.payload];
        default:
            return state;
    }
}