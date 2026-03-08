import { Routes, Route, Navigate } from 'react-router-dom';
import Header from "./components/Header";
import Landing from './pages/landing/Landing';
import Footer from './components/Footer';
import Portfolio from './pages/portfolio/Portfolio';
import Resume from './pages/resume/Resume';
import Contact from './pages/contact/Contact';
import PageNotFound from './pages/404/PageNotFound';
import ProjectDetails from "./pages/portfolio/[project]/ProjectDetails";


function App() {
  const personalDetails = {
    name: 'Pere Tarrida Domingo',
    location: "Rotterdam, Netherlands",
    email: "pere.tarrida@gmail.com",
    brand: "Software Engineer based in Rotterdam, working at Lunatech on distributed systems for Volkswagen Group and Porsche. Experienced in Scala, Akka, and full-stack web development. Passionate about technology, team sports, and Formula One."
  }

  return(
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Landing name={personalDetails.name} tagline={personalDetails.tagline} />}/>
        <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume brand={personalDetails.brand} />} />

            <Route
              path="/contact"
              element={
                <Contact
                  name={personalDetails.name}
                  location={personalDetails.location}
                  email={personalDetails.email}
                />
              }
            />
                        <Route path="/portfolio/:projectTitle" element={<ProjectDetails />} />
            <Route path="/page-not-found" element={<PageNotFound />} />
            <Route path="*" element={<Navigate to="/page-not-found" />} />
      </Routes>
      <Footer/>
    </>
  )

}

export default App;
