import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = '';

export const changeFilter = createAction('filter/changeFilter');

export const filterReducer = createReducer(initialState, builder => {
  builder.addCase(changeFilter, (state, action) => {
    return action.payload;
  });
});
