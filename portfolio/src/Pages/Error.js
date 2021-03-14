import React from 'react';
import {Link} from 'react-router-dom';

const Error = () =>{
    return(
        <div className='error-container'>
            <h2>ERROR 404: PAGE NOT FOUND</h2>
            <Link to='/' className='error-container-btn'>Back Home</Link>
        </div>
    );
}

export default Error;