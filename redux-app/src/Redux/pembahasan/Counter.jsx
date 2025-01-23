import { useDispatch, useSelector } from "react-redux";
import { decrementWitchCheckingAction, increment } from "../../app/Features/Counter/Actions";

const Counter = () => {
    let {count} = useSelector(state => state.Counter);
    const dispatch = useDispatch();

    return (
        <div>
        <button onClick={() => dispatch(decrementWitchCheckingAction(1))}>-</button>
        {' '} <span>{count}</span> {' '}
        <button onClick={() => dispatch(increment(1))}>+</button>
        </div>
    )
}

export default Counter;