import React from 'react';
import {Link} from 'react-router-dom';

const Menu = () => {

    return(
        <nav className='navbar'>
            <Link to='/' className='link'>Home</Link>
            <Link to='/about' className='link'>About</Link>
            <Link to='/projects' className='link'>Projects</Link>
            <Link to='/contact' className='link'>Contact</Link>
        </nav>
    )
}

export default Menu;