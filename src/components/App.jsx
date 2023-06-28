import ContactList from './ContackList/ContactList'
import ContactForm from './ContactForm/ContactForm'
import Filter from './Filter/Filter'

const App = () => {
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
      <ContactForm/>
      <h2>Contacts</h2>
      <Filter/>
      <ContactList/>
    </div>
  )};

  export default App