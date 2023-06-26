import PropTypes from 'prop-types';
import { ContactListItem } from './ContactList.styled';

const ContactList = ({contacts, onDeleteContact}) => {
  return (                                                             
  <ul>
    {contacts.map(({id, name, number}) => (
        <ContactListItem key={id}>
            <p>{name} {number}</p>
            <button onClick={() => onDeleteContact(id)}>Delete</button>
        </ContactListItem>
    ))}
  </ul>
)};

ContactList.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
};

export default ContactList