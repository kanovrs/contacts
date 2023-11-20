import React, { useState } from 'react';


export default function ContactForm({ onSaveContact, onCancel }) {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');

  const handleSave = () => {
    const newContact = {
      name,
      username,
      phone,
    };
    onSaveContact(newContact);
    setName('');
    setUsername('');
    setPhone('');
  };

  return (
    <div>
      <h2>Форма додавання контакту</h2>
      <label>Ім'я:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <label>Прізвище:</label>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <label>Телефон:</label>
      <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
      <button onClick={handleSave}>Зберегти</button>
      <button onClick={onCancel}>Скасувати</button>
    </div>
  );
}
