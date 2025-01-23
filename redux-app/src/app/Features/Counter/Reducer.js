import * as Counter from './Constants';

const initialState = {
    count: 0
};

const counterReducer = (state = initialState, action) => {
switch(action.type) {
    case Counter.INC:
        return {
            ...state,
            count: state.count + action.Value
        };
    case Counter.DEC:
        return {
            ...state,
            count: state.count - action.Value
        };
    default:
        return state;
}
};

export default counterReducer;