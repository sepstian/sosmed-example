import { ADD_POST, REMOVE_POST } from "../helper";

const INITIAL_STATE = {
    // post: [
    //     {
    //         capt: "",
    //         img: "",
    //         userid: "",
    //         date: "",
    //         id: 1
    //     }
    // ]
    post: [
        {
            capt: "",
            id: 0
        }
    ]
};

export const postReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_POST:
            console.log('ADD_POST reducer called', action.payload);
            return {
                ...state,
                post: [...state.post, action.payload]

            };
        case REMOVE_POST:
            return {
                post: state.post.filter(post => post.id!== action.payload)
            };
        case 'TEST_POST':
            console.log('TEST_POST reducer called', action.payload);
            return {...state, post: action.payload};
        default:
            return state;
    }
};