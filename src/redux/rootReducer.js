import { combineReducers } from "redux";
import usersSlice from "./reducers/usersSlice";


const rootReducer = combineReducers({
    users : usersSlice.reducer
})

export default rootReducer;