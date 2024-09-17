import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Simulated API calls
const fakeApiCall = (data) => new Promise((resolve) => setTimeout(() => resolve(data), 1000));

export const login = createAsyncThunk('auth/login', async (credentials) => {
  const response = await fakeApiCall({ id: 1, name: 'User', email: credentials.email });
  return response;
});

export const register = createAsyncThunk('auth/register', async (userData) => {
  const response = await fakeApiCall({ id: 1, name: userData.name, email: userData.email });
  return response;
});

const initialState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;