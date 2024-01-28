import { createSlice } from "@reduxjs/toolkit";

const initialUserState = {
  user: null, // Data pengguna awal, misalnya null atau data pengguna default
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload; // Mengatur data pengguna berdasarkan payload aksi
    },
    clearUser: (state) => {
      state.user = null; // Menghapus data pengguna
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

const userReducer = userSlice.reducer;

export default userReducer; 
