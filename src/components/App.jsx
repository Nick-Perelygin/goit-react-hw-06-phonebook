import {useEffect, useState} from 'react';
import ContactList from './ContackList/ContactList'
import ContactForm from './ContactForm/ContactForm'
import Filter from './Filter/Filter'
import { nanoid } from 'nanoid';

const CONTACT_KEY = 'Contact key'
const localContacts = JSON.parse(localStorage.getItem(CONTACT_KEY))

export default function App() {
  const [contacts, setContacts] = useState(localContacts ?? 
    [ {id: 'id-1', name: 'Rozie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Klements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copelsnd', number: '227-91-26'},
    ]
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(CONTACT_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const deleteContact = (contactId) => {
    setContacts(prevState => prevState.filter(contact => contact.id !== contactId),
    );
  };

  const addContact = (data) => {
    const contact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };

    const filterResult = contacts.find(prevContact =>
      prevContact.name.toLowerCase().trim() ===
      contact.name.toLowerCase().trim() ||
      prevContact.number.trim() === contact.number.trim()
    )

    if(filterResult)
    alert(`${contact.name}: is already in contacts`)
    else setContacts(prevState => {
      return [contact, ...prevState];
    });
  }

  const onFilter = e => {
    const prevState = e.currentTarget.value
    setFilter(prevState)
  }

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
      <ContactForm onSubmitForm={addContact}/>
      <h2>Contacts</h2>
      <Filter value={filter} onChange={onFilter}/>
      <ContactList contacts={visibleContacts()} onDeleteContact={deleteContact}/>
    </div>
  )};