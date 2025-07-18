import React from 'react';

const Header: React.FC = () => {
    return (
        <nav style={{ padding: '1rem', background: 'black', color: '#fff', display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>My Portfolio</div>
            <ul style={{ listStyle: 'none', display: 'flex', gap: '1.5rem', margin: 0, padding: 0 }}>
                <li><a href="#home" style={{ color: '#fff', textDecoration: 'none' }}>Home</a></li>
                <li><a href="#about" style={{ color: '#fff', textDecoration: 'none' }}>About</a></li>
                <li><a href="#projects" style={{ color: '#fff', textDecoration: 'none' }}>Projects</a></li>
                <li><a href="#contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</a></li>
            </ul>
        </nav>
    );
};

export default Header;