export const ACTIONS = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement',
    RESET: 'reset',
}

export default function reducer(state, action) {
    switch(action.type) {
        case ACTIONS.INCREMENT: 
            return state + action.payload;
        case ACTIONS.DECREMENT:
            return state - action.payload;
        case ACTIONS.RESET:
            return 0;
        default:
            return state;
    }
}