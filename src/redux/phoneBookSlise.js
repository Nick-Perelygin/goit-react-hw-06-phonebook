import {createSlice} from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { nanoid } from 'nanoid';

const contactsBase = [ 
    {id: 'id-1', name: 'Rozie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Klements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copelsnd', number: '227-91-26'},
]

const phoneBookSlice = createSlice({
    name: 'phoneBook',
    initialState: {
        contacts: contactsBase,
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
            else state.contacts = [contact, ...state.contacts]
        },
        deleteContact(state, action) {
            state.contacts = state.contacts.filter(contact => contact.id !== action.payload)
        },
        filterContact(state, action) {
            state.filter = action.payload.currentTarget.value
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