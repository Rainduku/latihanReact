import { applyMiddleware, combineReducers, compose, createStore} from "redux";
import counterReducer from "./Features/Counter/Reducer";
import { thunk } from "redux-thunk";



let rootReducers = combineReducers({
    Counter: counterReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunk)));
export default store;