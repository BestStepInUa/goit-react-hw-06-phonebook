import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeFilter(state, action) {
      return action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;

export const { changeFilter } = filterSlice.actions;

// import { createAction, createReducer } from '@reduxjs/toolkit';

// const initialState = '';

// export const changeFilter = createAction('filter/changeFilter');

// export const filterReducer = createReducer(initialState, builder => {
//   builder.addCase(changeFilter, (state, action) => {
//     return action.payload;
//   });
// });
