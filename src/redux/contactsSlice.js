import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: {
      prepare({ name, number }) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
      reducer(state, action) {
        state.push(action.payload);
      },
    },
    delContact(state, action) {
      const idx = state.findIndex(contact => contact.id === action.payload);
      state.splice(idx, 1);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;

export const { addContact, delContact } = contactsSlice.actions;

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
//       const idx = state.findIndex(contact => contact.id === action.payload);
//       state.splice(idx, 1);
//     });
// });
