export const changeTheme = (data) => {
    return {
        type: "CHANGE_THEME",
        payload: data,
    }
}
export const getTattoIdeas = (data) =>{
    return {
        type: "GET_TATTO_IDEAS",
        payload: data,
    }
}