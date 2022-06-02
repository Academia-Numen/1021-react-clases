export const ACTIONS = {
    ADD_BOOK: 'add_book',
    REMOVE_BOOK: 'remove_book',
}

export default function bookReducer(state, action) {
    switch(action.type) {
        case ACTIONS.ADD_BOOK: 
            return [...state, action.payload];
        case ACTIONS.REMOVE_BOOK:
            return state.filter(book => book.id !== action.payload)
        default:
            return state;
    }
}