export function updateUser (username, password, address, telnum) {
    return {
        type: 'WEATHER',
        payload: {
            username, password, address, telnum
        }
    }
}