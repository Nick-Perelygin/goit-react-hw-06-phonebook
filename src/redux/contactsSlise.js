import createSlice from '@reduxjs/toolkit'

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: [ {id: 'id-1', name: 'Rozie Simpson', number: '459-12-56'},
        {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
        {id: 'id-3', name: 'Eden Klements', number: '645-17-79'},
        {id: 'id-4', name: 'Annie Copelsnd', number: '227-91-26'},
      ],
        filter: ""
    },
    reducers: {
        addContact(state, action) {
            state.contacts.push(action)
        },
        deleteContact(state, action) {
            state.contacts.filter(contact => contact.id !== action.id)
        },
        filterContact(state, action) {
            
        },
    },
})

export const {addContact, deleteContact, filterContact} = contactsSlice.actions