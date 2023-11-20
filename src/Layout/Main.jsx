import React, { useState, useEffect } from 'react';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactsList from '../components/ContactsList/ContactsList';

export default function Main () {
    const [contacts, setContacts] = useState([]);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        // Отримати дані з API при завантаженні компонента
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => setContacts(data));
    }, []);

    const handleDeleteContact = (contactId) => {
        // Видалити контакт зі списку
        setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== contactId));
    };

    const handleSaveContact = (newContact) => {
        // Додати новий контакт до списку
        setContacts((prevContacts) => [...prevContacts, { id: Date.now(), ...newContact }]);
        setShowForm(false);
    };

    return (
        <div>
            <ContactsList contacts={contacts} onDeleteContact={handleDeleteContact} />
            <button onClick={() => setShowForm(true)}>Додати новий контакт</button>
            {showForm && (
                <ContactForm onSaveContact={handleSaveContact} onCancel={() => setShowForm(false)} />
            )}
        </div>
    );
}
