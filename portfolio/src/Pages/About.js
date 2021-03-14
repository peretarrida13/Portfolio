import React from 'react';
import Menu from './Menu';
import { BsArrowRight } from 'react-icons/bs'; 

const About = () =>{
    return(
        <section className='about-wrap'>
            <div className='header'>
                <h1>About Me:</h1>
            </div>
            <div className='main-text'>
                <p>My name is Pere Tarrida Domingo and I'm currently studying Computer Science at UPC in Barcelona.</p>
            </div>
        </section>
    )
}

export default About;