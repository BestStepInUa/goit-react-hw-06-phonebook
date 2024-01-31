import { useSelector } from 'react-redux';
import ContactItem from './ContactItem';
import ContactsListSteled from './ContactsList.styled';
import { getContacts } from '../../redux/contactsSlice';
import { getFilter } from '../../redux/filterSlice';

const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  // const visibleContacts = useMemo(() => {
  //   const normalizedFilter = filter.toLocaleLowerCase();
  //   return contacts.filter(({ name }) =>
  //     name.toLocaleLowerCase().includes(normalizedFilter)
  //   );
  // }, [contacts, filter]);

  const normalizedFilter = filter.toLocaleLowerCase();
  const visibleContacts = contacts.filter(({ name }) =>
    name.toLocaleLowerCase().includes(normalizedFilter)
  );

  return (
    <ContactsListSteled>
      <h2>Contacts</h2>
      <ul>
        {visibleContacts.map(contact => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </ul>
    </ContactsListSteled>
  );
};

export default ContactsList;
