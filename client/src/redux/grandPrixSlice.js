import { createSlice , createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchGrandPrixData = createAsyncThunk('grandprix/fetchData', async () => {
    const response = await axios.get('https://api.openf1.org/v1/meetings?year=2025');
    const data = await response.data;
    const grandPrix = data[data.length - 1];
   return grandPrix; 
  }
);

const grandPrixSlice = createSlice({
    name: 'grandPrix',
    initialState:{
        grandPrix: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
       builder
       .addCase(fetchGrandPrixData.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
       .addCase(fetchGrandPrixData.fulfilled, (state, action) => {
            state.loading = false;
            state.grandPrix = action.payload;
        })
       .addCase(fetchGrandPrixData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
});

export default grandPrixSlice.reducer;