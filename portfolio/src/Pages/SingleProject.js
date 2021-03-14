import React from 'react';
import {Link} from 'react-router-dom';


const SingleProject = ({name, html_url, type}) =>{
    return(
        <div className='project'>
            <div className='project-title'>
                <h3>{name}</h3>
            </div>
            <p className='type'>{type}</p>
            <div className='button-div'>
                <Link className= 'project-link' to={{pathname:html_url}} target='_blank'>See Code</Link>
            </div>
        </div>
    );
}

export default SingleProject;