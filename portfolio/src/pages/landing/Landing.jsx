import React from 'react';
import Hero from '../../components/Hero';
import AboutMe from '../../components/AboutMe';

export default function Landing({ name }){
    const styles = {
        landing: {
          height: "calc(100% - 93px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
    };
    
      return (
        <>
          {/* Main Landing Page */}
          <main className="landing container" style={styles.landing}>
            {/* Display the hero component */}
            <Hero name={name} />
          </main>
          {/* Display the about section */}
          <AboutMe />
        </>
      );
}