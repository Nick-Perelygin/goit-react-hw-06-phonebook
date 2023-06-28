import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {addContact} from 'redux/phoneBookSlise';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Form } from './ContactForm.styled';

export default function ContactForm() {
  const dispatch = useDispatch()
  const contacts = useSelector(state => state.contacts.contacts)
  const[name,setName] = useState('');
  const[number,setNumber] = useState('');
    
  const handleOnChange = e => {
    const {value} = e.currentTarget
    if(e.currentTarget.name === 'name') {
      setName(value)
    }
    if(e.currentTarget.name === 'number') {
      setNumber(value)
    }        
  };

  const onSubmit = e => {
    e.preventDefault();
    const contact = {id: nanoid(), name: `${name}`, number: `${number}`}
    
    const filterResult = contacts.find(prevContact =>
      prevContact.name.toLowerCase().trim() ===
      contact.name.toLowerCase().trim() ||
      prevContact.number.trim() === contact.number.trim()
    )
    if(filterResult)
      alert(`${contact.name}: is already in contacts`)
    else dispatch(addContact(contact))
    reset()
  };

  const reset = () => {
    setName('');
    setNumber('')
  }

  return (
    <Form onSubmit={onSubmit}>
      <label htmlFor={name}>Name
        <input 
          type="text"
          name="name" 
          value={name}
          pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$" 
          title="Name may contain onle letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Bats de Castelmore d`Artagnan" 
          required
          onChange={handleOnChange}
          id={name}
        />
        </label>
      <label htmlFor={number}>Number
        <input 
          type="tel"
          name="number" 
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}" 
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +" 
          required
          onChange={handleOnChange}
          id={number}
        />
      </label>
      <button type="submit">Add contact</button>
    </Form>
  )   
}

ContactForm.propTypes = {
  onSubmitForm: PropTypes.func,
};