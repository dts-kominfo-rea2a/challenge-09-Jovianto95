// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import './Contact.css';

const Contact = (propsData) => {
    const item = propsData.data;
    return (
        <div className='container'>
            <div className='image'>
                <img src={item.photo} className='img' alt={item.photo}></img>
            </div>
            <div className='content'>
                <b><p key={item.name}>{item.name}</p></b>
                <p key={item.phone}>{item.phone}</p>
                <p key={item.email}>{item.email}</p>
            </div>
        </div>
    )
}

export default Contact;