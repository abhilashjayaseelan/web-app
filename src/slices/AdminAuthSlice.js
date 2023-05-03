import { createSlice } from "@reduxjs/toolkit";

const AdminAuthSlice = createSlice({
    name: 'adminAuth',
    initialState: {isLoggedIn : false},
    reducers: {
        adminLogin(state) {
            state.isLoggedIn = true;
        },
        adminLogout(state) {
            state.isLoggedIn = false;
        }
    }
})

export const adminAuthAction = AdminAuthSlice.actions;

export default AdminAuthSlice.reducer;