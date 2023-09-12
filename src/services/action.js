export const changeTheme = (data) => {
    return {
        type: "CHANGE_THEME",
        payload: data,
    }
}
export const setTattoIdeastoState = (data) => {
    return {
        type: "GET_TATTO_IDEAS",
        payload: data,
    }
}

export const setUsertoState = (data) => {
    return {
        type: "GET_USER",
        payload: data,
    }
}

