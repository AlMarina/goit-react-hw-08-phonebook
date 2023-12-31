import { createSlice } from '@reduxjs/toolkit';

const intitialStateFilter = {
  filter: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState: intitialStateFilter,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
