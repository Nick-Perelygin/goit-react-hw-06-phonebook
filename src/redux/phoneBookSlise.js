import {createSlice} from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { nanoid } from 'nanoid';

const getLocalContacts = JSON.parse(localStorage.getItem('persist:root')).contacts;

const phoneBookSlice = createSlice({
    name: 'phoneBook',
    initialState: {
        contacts: getLocalContacts ?? [ {id: 'id-1', name: 'Rozie Simpson', number: '459-12-56'},
        {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
        {id: 'id-3', name: 'Eden Klements', number: '645-17-79'},
        {id: 'id-4', name: 'Annie Copelsnd', number: '227-91-26'},
        ],
        filter: "",
    },
    reducers: {
        addContact(state, action) {          
            const contact = {
                id: nanoid(),
                name: action.payload.name,
                number: action.payload.number,
            };
            const filterResult = state.contacts.find(prevContact =>
                prevContact.name.toLowerCase().trim() ===
                contact.name.toLowerCase().trim() ||
                prevContact.number.trim() === contact.number.trim()
            )
            if(filterResult)
                alert(`${contact.name}: is already in contacts`)
            else {return [contact, ...state.contacts]}
        },
        deleteContact(state, action) {

            console.log([state.contacts])
            const nextFilterState = state.filter
            const nextContactsState = state.contacts.filter(contact => contact.id !== action.payload)
            return {nextContactsState, nextFilterState}

        },
        filterContact(state, action) {
            state = action.payload.currentTarget.value
        }, 
    },
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['contacts']
}
  
export const contactsReducer = persistReducer(persistConfig, phoneBookSlice.reducer)
  
export const {addContact, deleteContact, filterContact} = phoneBookSlice.actions