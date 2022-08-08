import { ActionTypes } from "../constants/action-types";

const initialObj = {
    authUser: {userName: '', loginStatus: false},
    lastUrl: ''
}

export const loginReducer = (state = initialObj, action) => {
    const {type, payload} = action;
    switch(type) {
        case ActionTypes.LOGIN : 
            return {
                ...state, authUser: {userName: payload, loginStatus: true}
            }
        case ActionTypes.LOGOUT : 
            return {
                ...state, authUser: {userName: '', loginStatus: false}
            }
        case ActionTypes.SAVE_URL : 
            console.log('save url reducer', action);
            return {
                ...state, lastUrl: payload
            }
        default:
            return state
    }
}