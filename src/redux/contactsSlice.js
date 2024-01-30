import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
});

// import { createAction, createReducer, nanoid } from '@reduxjs/toolkit';

// const initialState = [];

// export const addContact = createAction('contacts/add', ({ name, number }) => {
//   return {
//     payload: {
//       id: nanoid(),
//       name,
//       number,
//     },
//   };
// });

// export const delContact = createAction('contacts/del');

// export const contactsReducer = createReducer(initialState, builder => {
//   builder
//     .addCase(addContact, (state, action) => {
//       state.push(action.payload);
//     })
//     .addCase(delContact, (state, action) => {
//       const index = state.findIndex(contact => contact.id === action.payload);
//       state.splice(index, 1);
//     });
// });
