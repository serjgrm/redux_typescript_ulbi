import { UserState, UserAction, UserActionTypes } from "../../types/todo"




const initialState:UserState = {
    users: [],
    loading: false,
    error: null
}


export const useReducer = (state = initialState, action: UserAction) : UserState =>{
    switch(action.type) {
        case UserActionTypes.FETCH_USERS:
            return { loading: true, error: null,users:[]}
        case UserActionTypes.FETCH_USERS_SUCCESS:
            return { loading: false, error: null, users: action.payload}
        case UserActionTypes.FETCH_USERS_ERROR:
            return { loading: false, error: action.payload,users:[]}
        default:
            return state
    }
}


