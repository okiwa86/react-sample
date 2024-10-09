import {createSlice} from "@reduxjs/toolkit";


export const postSlice = createSlice({
    name: 'post',
    initialState: {
        list: []
    },
    reducers: {
        remove: (state) => {

        },
        list: (state, posts) => {
            state.list = posts;
        }
    }
});

export const {remove, list } = postSlice.actions;
export default postSlice.reducer;