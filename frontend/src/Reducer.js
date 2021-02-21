const initialState = {
    user: ""
};

const Reducer = (state = initialState, action) => {
    switch(action.type) {
        case "LOGIN":
            return Object.assign({}, state, {
                user: "USER"
            });
        case "LOGOUT":
            return Object.assign({}, state, {
                user: ""
            });
    }
};

export default Reducer;