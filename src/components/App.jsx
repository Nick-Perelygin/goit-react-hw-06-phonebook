import ContactList from './ContackList/ContactList'
import ContactForm from './ContactForm/ContactForm'
import Filter from './Filter/Filter'
import { addContact, deleteContact, filterContact} from 'redux/phoneBookSlise';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  const dispatch = useDispatch()
  const filter = useSelector(state => state.contacts.filter)
  const contacts = useSelector(state => state.contacts.contacts)

  const visibleContacts = () => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  }

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
      <ContactForm onSubmitForm={(data) => dispatch(addContact(data))}/>
      <h2>Contacts</h2>
      <Filter  value={filter} onChange={(e) => dispatch(filterContact(e))}/>
      <ContactList contacts={visibleContacts()} 
      onDeleteContact={(contactId) => dispatch(deleteContact(contactId))}/>
    </div>
  )};

  export default App