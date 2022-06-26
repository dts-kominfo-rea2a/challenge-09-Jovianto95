// Kalian bisa menambahkan CSS di src/components/Header.css
import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div style={{textAlign: 'center'}}>
            <h2>Call a Friend</h2>
            <p>Your Friendly Contact App</p>
            <div style = {{textAlign: 'center'}}><hr /></div>
        </div>
    )
}

export default Header;