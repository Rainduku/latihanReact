import * as Counter from './Constants';

export const increment = (Value) => {
    return {
        type: Counter.INC,
        Value: Value
    }
}

export const decrement = (Value) => {
    return {
        type: Counter.DEC,
        Value: Value
    }
}

export const decrementWitchCheckingAction = (Value) => {
    return (dispatch, getstate) => {
        if(getstate().Counter.count > 0) {
            dispatch(decrement(Value));
        }
    }
}