import { ActionTypes } from "../constants/action-types";


export const loginUser = (userDetails) => {
    return {
        type: ActionTypes.LOGIN,
        payload: userDetails
    }
}

export const logoutUser = () => {
    return {
        type: ActionTypes.LOGOUT,
    }
}

export const saveUrl = (str) => {
    return {
        type: ActionTypes.SAVE_URL,
        payload: str
    }
}