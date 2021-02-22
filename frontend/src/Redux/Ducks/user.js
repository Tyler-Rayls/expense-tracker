const LOGIN = "login";
const LOGOUT = "logout";

export const login = (data) => ({
    type: LOGIN,
    userID: data.userID,
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email
});

export const logout = () => ({
    type: LOGOUT
});

const initialState = {
    userID: null,
    firstName: "",
    lastName: "",
    email: ""
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {...state, userID: action.userID, firstName: action.firstName, lastName: action.lastName, email: action.email};
        case LOGOUT:
            return initialState;
        default:
            return state;
    }
}