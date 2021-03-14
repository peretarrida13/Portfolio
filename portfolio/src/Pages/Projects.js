import React from 'react';
import Menu from './Menu';
import SingleProject from './SingleProject';

const url = 'https://api.github.com/users/peretarrida13/repos';

const Projects = () =>{
    const [uni, setUni] = React.useState([]);
    const [personal, setPersonal] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    const fetchProjects = async () => {
        try{
            const response = await fetch(url);
            const projects = await response.json();
            
            const university = projects.filter((project) => project.description === 'Projecte Uni');
            setUni(university);
            const personal = projects.filter((project) => project.description === 'Personal');
            setPersonal(personal);
            setLoading(false);
        } catch(error) {
            setLoading(false);
            console.log(error);
        }
        

    }

    React.useEffect(() =>{
        setLoading(true);
        fetchProjects();
    },[])

    if(loading){
        return(
            <div className='loading-position'>
                <div class='loading-screen'>
                    <div/>
                    <div/>
                    <div/>
                    <div/>
                    <div/>
                    <div/>
                    <div/>
                    <div/>
                    <div/>
                    <div/>
                    <div/>
                    <div/>
                </div>
            </div>
            
        );
    }

    return(
        <div>
            
            <div className='projects-header'>
                <h1>Projects</h1>
            </div>
            <div className='projects'>
                {personal.map((project) => {
                    return <SingleProject key={project.id} {...project} type='PERSONAL'/>
                })}
                {uni.map((project) => {
                    return <SingleProject key={project.id} {...project} type='UNIVERSITY'/>
                })}
            </div>
        </div>
    );
}

export default Projects;