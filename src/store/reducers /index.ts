import { useReducer } from './useReducer' ;
import { combineReducers } from "redux";





export const rootReducer = combineReducers({
    user: useReducer
}) 


export type RootState = ReturnType<typeof rootReducer>