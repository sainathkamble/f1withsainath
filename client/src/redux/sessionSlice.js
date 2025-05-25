import { createSlice , createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchSessionData = createAsyncThunk('session/fetchData', async () => {
    const response = await axios.get(`https://api.openf1.org/v1/sessions?year=2025`);
    const data = await response.data;
    const session = data[data.length - 1];
   return session; 
  }
);

const sessionSlice = createSlice({
    name: 'session',
    initialState:{
        session: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
       builder
       .addCase(fetchSessionData.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
       .addCase(fetchSessionData.fulfilled, (state, action) => {
            state.loading = false;
            state.session = action.payload;
        })
       .addCase(fetchSessionData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
});

export default sessionSlice.reducer;