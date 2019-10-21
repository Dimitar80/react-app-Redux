export function updateUser (username, password, address, telnum) {
    return {
        type: 'UPDATE_USER_AND_PASS',
        payload: {
            username, password, address, telnum
        }
    }
}

export function deleteUser () {
    return { type: 'DELETE_USER' }
}