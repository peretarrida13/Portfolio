import React from 'react';
import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaInstagram, FaTwitterSquare } from 'react-icons/fa'

const SocialIcons =()=>{
    const styles = {
        icon: {
          textDecoration: "none",
          fontSize: "22px",
          padding: "10px",
          transition: "0.2s ease-in",
        },
      };
    
    return (
        <div className="socialIcons" style={styles.socialIcons}>
            <a className="icon" style={styles.icon} href="https://github.com/peretarrida13">
            <motion.i
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.8, duration: 0.5, type: "spring" }}
                className="fa-brands fa-github"
                aria-hidden="true"
                title="Pere Tarrida GitHub Profile"
            ><FaGithub size={30}/></motion.i>
            </a>
            <a className="icon" style={styles.icon} href="https://www.linkedin.com/in/pere-tarrida-domingo-4b88981b3/">
            <motion.i
                initial={{ y1: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.7, duration: 0.5, type: "spring" }}
                className="fa-brands fa-linkedin"
                aria-hidden="true"
                title="Pere Tarrida LinkedIn Profile"
            ><FaLinkedin size={30}/></motion.i>
            </a>
            <a className="icon" style={styles.icon} href="https://www.instagram.com/peretarrida__/">
            <motion.i
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.6, duration: 0.5, type: "spring" }}
                className="fa-brands fa-instagram"
                aria-hidden="true"
                title="Pere Tarrida Instagram Profile"
            ><FaInstagram size={30}/></motion.i>
            </a>
            <a className="icon" style={styles.icon} href="https://twitter.com/peretarrida__">
            <motion.i
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.5, type: "spring" }}
                className="fa-brands fa-twitter"
                aria-hidden="true"
                title="Pere Tarrida Twitter Profile"
            ><FaTwitterSquare size={30}/></motion.i>
            </a>
        </div>
    );
}

export default SocialIcons;