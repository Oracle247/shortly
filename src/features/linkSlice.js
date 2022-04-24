import { createSlice } from '@reduxjs/toolkit'; 

const initialState = {
    value: "",
}

export const linkSlice = createSlice({
    name: 'link',
    initialState,   
    reducers: {
        addLink: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { addLink } = linkSlice.actions;
export default linkSlice.reducer;