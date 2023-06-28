import { useDispatch, useSelector } from 'react-redux';
import { deleteContact} from 'redux/phoneBookSlise';
import PropTypes from 'prop-types';
import { ContactListItem } from './ContactList.styled';

const ContactList = () => {
  const dispatch = useDispatch()
  const filter = useSelector(state => state.contacts.filter)
  const contacts = useSelector(state => state.contacts.contacts)

  const visibleContacts = () => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  }

  return (                                                             
  <ul>
    {visibleContacts().map(({id, name, number}) => (
        <ContactListItem key={id}>
            <p>{name} {number}</p>
            <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
        </ContactListItem>
    ))}
  </ul>
)};

ContactList.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
};

export default ContactList