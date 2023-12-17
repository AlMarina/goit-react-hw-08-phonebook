import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectContactsError,
  selectContactsIsLoading,
} from '../../redux/selectors';
import { fetchContactsThunk } from '../../redux/contactsSlice';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import Loader from 'components/Loader/Loader';
import { Title, PostTitle } from './ContactPage.styled';

const ContactPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectContactsIsLoading);
  const isError = useSelector(selectContactsError);

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  const showContacts = Array.isArray(contacts) && contacts.length > 0;
  return (
    <>
      <div>
        <Title>Phonebook</Title>
        <ContactForm />
        <PostTitle>Contacts</PostTitle>
        <Filter />
        {isLoading && <Loader />}
        {isError && <p>{isError}</p>}
        {showContacts && <ContactList />}
      </div>
    </>
  );
};

export default ContactPage;
