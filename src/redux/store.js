import { configureStore } from '@reduxjs/toolkit';
import { contactsReduser } from './contactsSlice';
import { filterReducer } from './filterSlice';

const rootReducer = {
  contactStore: contactsReduser,
  filterStore: filterReducer,
};

export const store = configureStore({
  reducer: rootReducer,
});
