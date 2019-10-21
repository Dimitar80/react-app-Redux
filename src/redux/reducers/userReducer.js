export function userReducer (
    state = {username: null, password: null, address: null, telnum: null}, action) {
    switch (action.type) {
        case 'UPDATE_USER_AND_PASS': {
            return {
                ...state,
                username: action.payload.username,
                password: action.payload.password,
                address: action.payload.address,
                telnum: action.payload.telnum
            }
        }
        case 'DELETE_USER': {
            return {
                ...state,
                username: null,
                password: null,
                address: null,
                telnum: null
            }
        }
        default : {
            return {...state}
        }
    }
}