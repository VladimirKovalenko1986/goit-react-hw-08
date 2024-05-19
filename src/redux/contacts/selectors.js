import { createSelector } from "@reduxjs/toolkit";
import { selectFilterName, selectFilterNumber } from "../filters/selectors";

export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilterName, selectFilterNumber],
  (contacts, filterName, filterNumber) => {
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(filterName.toLowerCase()) &&
        contact.number.toLowerCase().includes(filterNumber.toLowerCase())
    );
  }
);
