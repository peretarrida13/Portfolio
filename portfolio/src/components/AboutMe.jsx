import React from 'react';
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { NavLink } from "react-router-dom"
import Button from './Button';
import aboutMeImg from '../images/aboutme.jpeg';


const AboutMe = ({ name }) =>{
      // Using react-intersection-observer to determine if the component is in view
  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  // Variants for staggered animations
  const staggerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  // Variants for paragraph animations
  const paragraphVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section className="about">
      <div className="aboutContainer container">
        <div className="row">
          <motion.div
            className="personalImage col-12 col-lg-6"
            ref={ref}
            initial={{ x: "-10vw", opacity: 0, scale: 0.5 }}
            animate={inView ? { x: 0, opacity: 1, scale: 1 } : { x: "-10vw", opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Display the personal image */}
            <motion.img src={aboutMeImg} alt={name} />
          </motion.div>
          <div className="personalInfo col-12 col-lg-6">
            <motion.div className="contentContainer" variants={staggerVariants}>
              {/* Display greeting and job title with animation */}
              <motion.h4 variants={paragraphVariants}>Nice to meet you! 👋🏻</motion.h4>
              <motion.h5 variants={paragraphVariants}>I'm a Software Engineer Student</motion.h5>

              {/* Display content description with animation */}
              <motion.div
                className="contentDescription"
                variants={staggerVariants}
                initial="initial"
                animate={inView ? "animate" : "initial"}
              >
                {/* Paragraphs with animation */}
                <motion.p variants={paragraphVariants}>
                  I'm a Software Engineering student currently immersed in an exciting chapter of my journey as an intern at <span style={{ color: "var(--hl-color)" }}>UPCnet.</span>
                  Here, I don my  <span style={{ color: "var(--hl-color)" }}>problem-solving</span> hat and dive headfirst into real-world challenges, all while working towards my degree in <span style={{ color: "var(--hl-color)" }}>Computer Science</span>. 
                  It's a world where I get to merge my <span style={{ color: "var(--hl-color)" }}>passion for coding</span> with practical experience, and it's an exhilarating adventure.
                </motion.p>
                <br />
                <motion.p variants={paragraphVariants}>
                  Life, however, is much more than just lines of code and algorithms. When I'm not debugging or designing software solutions, I'm all about enjoying quality time with my friends. 
                  Whether it's engaging in a friendly game of basketball, kicking a football around, or passionately following the Barça matches, sports play a significant role in my life. 
                  There's something truly special about the camaraderie and excitement of team sports.
                </motion.p>
                <br />
                <motion.p variants={paragraphVariants}>
                  But that's not all. I'm also a fervent Formula One enthusiast. 
                  The thrill of the race, the engineering marvels behind the cars, and the sheer speed of it all captivate my imagination. 
                  Watching F1 races is more than just a hobby; it's a way to stay connected with the world of technology and innovation, which perfectly complements my chosen career path.
                </motion.p>
                <br/>
                <motion.p variants={paragraphVariants}>
                  So, there you have it – a glimpse into my life as a Software Engineering student and intern. It's a balancing act between code, camaraderie, and culture, and I wouldn't have it any other way. 
                  <span style={{ color: "var(--hl-color)" }}>Each day brings new challenges and opportunities for growth, and I'm excited to see where this journey takes me next.</span>
                   If you want to take a glimpse into my portfolio click the button below.
                </motion.p>
              </motion.div>

              {/* Button to view the portfolio */}
              <NavLink to="/portfolio">
                <Button name="View Portfolio" />
              </NavLink>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;