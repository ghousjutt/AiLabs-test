import { createSlice } from '@reduxjs/toolkit'

// Define the initial state
const initialState = {
    data: null
}

// Delivery Changes slice
export const slice = createSlice({
    name: 'file',
    initialState,
    reducers: {
        setData: (state, action) => {
            state.data = action.payload;
            return state;
        },
        getData: () => initialState.data
    }
})


// Other code such as selectors can use the imported `RootState` type
export default slice.reducer