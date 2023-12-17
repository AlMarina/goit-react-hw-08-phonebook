import { useDispatch, useSelector } from 'react-redux';
import { BtnDelete, ListItem } from './ContactList.syled';
import { deleteContactThunk } from '../../redux/contactsSlice';
import { selectVisibleContacts } from '../../redux/selectors';
import { List } from './ContactList.syled';

export const ContactList = () => {
  const filterContact = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  return (
    <List>
      {filterContact.map(contact => (
        <ListItem key={contact.id}>
          {contact.name}: {contact.number}
          <BtnDelete
            type="button"
            onClick={() => dispatch(deleteContactThunk(contact.id))}
          >
            Delete
          </BtnDelete>
        </ListItem>
      ))}
    </List>
  );
};
