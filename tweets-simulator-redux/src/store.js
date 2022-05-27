import { createStore } from "redux";
import reducer from './reducers'
import {getStateLocalStorage,setStateLocalSorage} from "./utils/localStorage"

const localStorageState = getStateLocalStorage();

const store = createStore(
    reducer,
    localStorageState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
    setStateLocalSorage({
        tweets: store.getState().tweets
    });
});

export default store;