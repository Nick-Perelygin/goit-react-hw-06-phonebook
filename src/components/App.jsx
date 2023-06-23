import ContactList from './ContackList/ContactList'
import ContactForm from './ContactForm/ContactForm'
import Filter from './Filter/Filter'
import { addContact, deleteContact, filterContact, visibleContacts, getLocalContacts } from 'redux/contactsSlise';
import { useDispatch, useSelector } from 'react-redux';

export default function App() {
  const dispatch = useDispatch()
  const localContacts = useSelector(getLocalContacts)

  return (
    <div
      style={{
        height: '100vh',
        display: 'block',
        marginLeft: '40px',
        fontSize: 16,
        color: '#010101'
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm onSubmitForm={() => dispatch(addContact())}/>
      <h2>Contacts</h2>
      <Filter  onChange={() => dispatch(filterContact())}/>
      <ContactList contacts={localContacts ?? (() => dispatch(visibleContacts()))} 
      onDeleteContact={() => dispatch(deleteContact())}/>
    </div>
  )};