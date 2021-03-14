import React from 'react';
import {Link} from 'react-router-dom';
import CV from './Pere_Tarrida_Domingo.pdf';

const Menu = () => {

    return(
        <nav className='navbar'>
            <Link to='/' className='link'>Home</Link>
            <Link to='/about' className='link'>About</Link>
            <Link to='/projects' className='link'>Projects</Link>
            <Link to='/contact' className='link'>Contact</Link>
            <Link to={CV} className='link' download target='_blank'>My CV</Link>
        </nav>
    )
}

export default Menu;