import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contactStore.contacts;
export const selectContactsIsLoading = state => state.contactStore.isLoading;
export const selectContactsError = state => state.contactStore.error;

export const selectFilter = state => state.filterStore.filter;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(filter) ||
        contact.phone.includes(filter)
    );
  }
);
