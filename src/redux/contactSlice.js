
import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const initialState = {
  contacts: [],
  loading: false,
  error: null,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  // reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, store => {
        store.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.contacts = payload;
      })
      .addCase(fetchContacts.rejected, (store, { payload }) => {
        store.loading = true;
        store.error = payload;
      })
      .addCase(addContact.pending, store => {
        store.loading = true;
      })
      .addCase(addContact.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.contacts.push(payload);
      })
      .addCase(addContact.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })
      .addCase(deleteContact.pending, store => {
        store.loading = true;
      })
      .addCase(deleteContact.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.contacts = store.contacts.filter(contact => contact.id !== payload);
      })
      .addCase(deleteContact.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;