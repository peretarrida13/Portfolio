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
              <motion.h5 variants={paragraphVariants}>I'm a Software Engineer</motion.h5>

              {/* Display content description with animation */}
              <motion.div
                className="contentDescription"
                variants={staggerVariants}
                initial="initial"
                animate={inView ? "animate" : "initial"}
              >
                {/* Paragraphs with animation */}
                <motion.p variants={paragraphVariants}>
                  I'm a Software Engineer based in <span style={{ color: "var(--hl-color)" }}>Rotterdam</span>, currently working at <span style={{ color: "var(--hl-color)" }}>Lunatech</span> where I'm contributing to projects for major clients like <span style={{ color: "var(--hl-color)" }}>Volkswagen Group</span> and <span style={{ color: "var(--hl-color)" }}>Porsche</span>. It's a world where I get to merge my passion for coding with real-world impact — from optimizing <span style={{ color: "var(--hl-color)" }}>distributed vehicle data services</span> in Scala/Akka to scaling full-stack web platforms — and it's an exciting place to grow.
                </motion.p>
                <br />
                <motion.p variants={paragraphVariants}>
                  Life, however, is much more than just lines of code and algorithms. When I'm not deep in a code review or designing software solutions, I'm all about enjoying quality time with my friends.
                  Whether it's a friendly game of basketball, kicking a football around, or passionately following the Barça matches, sports play a significant role in my life.
                  There's something truly special about the camaraderie and excitement of team sports.
                </motion.p>
                <br />
                <motion.p variants={paragraphVariants}>
                  I'm also a fervent <span style={{ color: "var(--hl-color)" }}>Formula One</span> enthusiast.
                  The thrill of the race, the engineering marvels behind the cars, and the sheer speed of it all captivate my imagination.
                  It's more than just a hobby — it's a natural extension of my love for technology and innovation.
                </motion.p>
                <br/>
                <motion.p variants={paragraphVariants}>
                  So, there you have it — a glimpse into my life as a Software Engineer navigating client projects, distributed systems, and the occasional weekend match.{' '}
                  <span style={{ color: "var(--hl-color)" }}>Each day brings new challenges and opportunities for growth, and I'm excited to see where this journey takes me next.</span>
                  {' '}If you want to take a glimpse into my portfolio, click the button below.
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