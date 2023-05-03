import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {user: null},
    reducers: {
        userLoggedIn(state, action) {
            state.user = action.payload;
        },
        userLoggedOut(state, action) {
            state.user = action.payload;
        }
    }
})

export const actions = userSlice.actions;

export default userSlice.reducer;