import React from 'react';
import Menu from './Menu';
import {Link} from 'react-router-dom';
import {AiOutlineInstagram, AiOutlineLinkedin} from 'react-icons/ai';
import {FiTwitter, FiGithub} from 'react-icons/fi';

const Contact = () =>{
    return(
        <section className='contact-page'>
            <div className='links-2-social'>
                <Link to={{pathname:'https://github.com/peretarrida13'}} target='_blank'><FiGithub className='icon'/></Link>
                <Link to={{pathname:'https://www.instagram.com/peretarrida__/'}} target='_blank'><AiOutlineInstagram className='icon'/></Link>
                <Link to={{pathname:'https://twitter.com/peretarrida__'}} target='_blank'><FiTwitter className='icon'/></Link>
                <Link to={{pathname:'https://www.linkedin.com/in/pere-tarrida-domingo-4b88981b3/'}} target='_blank'><AiOutlineLinkedin className='icon'/></Link>
            </div>
            <div className='mail-div'>
                <h1>Contact Me: </h1>
                <p>pere.tarrida13@gmail.com</p>
            </div>
        </section>
    );
}

export default Contact;