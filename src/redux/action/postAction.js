import { ADD_POST, REMOVE_POST } from "../helper";

export const addPost = (post) => {
    console.log('addPost action called');
    return {
        type: ADD_POST,
        payload: post
    };
};

export const testPost = (data) => {
    console.log('testPost action called', data);
    return {
        type: 'TEST_POST',
        payload: data
    };
};

export const removePost = (id) => {
    return {
        type: REMOVE_POST,
        payload: id
    };
};