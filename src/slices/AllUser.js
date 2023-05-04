import { createSlice } from "@reduxjs/toolkit";

const allUsersSlice = createSlice({
    name: 'allUsers',
    initialState: {allUsers: null},
    reducers: {
        setAllUsers(state,action) {
            state.allUsers = action.payload;
        }
    }
});

export const actions = allUsersSlice.actions;

export default allUsersSlice.reducer;