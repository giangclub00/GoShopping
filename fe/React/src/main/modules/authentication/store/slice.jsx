import { createSlice } from '@reduxjs/toolkit'
import './actions'
import { login } from './thunks';

const user = JSON.parse(localStorage.getItem("user"));
const auth = user ? { isLogged: true, user } : {isLogged: false, user: null }
const initialState = {
  ...auth,
  status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
  count: 0
}
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        // action is inferred correctly here if using TS
        state.isLogged = true;
        state.user = action.user;
        state.state = 'succeeded';
      })
      .addCase(login.pending, (state, action) => {
        // action is inferred correctly here if using TS
        state.state = 'pending';
      })
      .addCase(login.rejected, (state, action) => {
        // action is inferred correctly here if using TS
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})


export default authSlice.reducer
