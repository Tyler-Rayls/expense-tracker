const LOGIN = "userLogin";
const LOGOUT = "userLogout";

export const userLogin = () => ({
    type: LOGIN
});

export const userLogout = () => ({
    type: LOGOUT
});

const initialState = {
    userID: null,
    firstName: "",
    lastName: "",
    email: ""
};

export default (state = initialState, action) => {
    switch (action.type, action.ID, action.first, action.last, action.userEmail) {
        case "LOGIN":
            return {userID: action.ID, firstName: action.first, lastName: action.last, email: action.userEmail };
        case "LOGOUT":
            return initialState;
        default:
            return state;
    }
}