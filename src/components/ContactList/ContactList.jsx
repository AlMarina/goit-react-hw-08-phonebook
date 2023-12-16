import { useDispatch, useSelector } from 'react-redux';
import { BtnDelete, ListItem } from './ContactList.syled';
import { deleteContact } from '../../redux/contactsSlice';
import { selectVisibleContacts } from '../../redux/selectors';

export const ContactList = () => {
  const filterContact = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  return (
    <ul>
      {filterContact.map(contact => (
        <ListItem key={contact.id}>
          {contact.name}: {contact.phone}
          <BtnDelete
            type="button"
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            Delete
          </BtnDelete>
        </ListItem>
      ))}
    </ul>
  );
};
