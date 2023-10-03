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
    location: "Catalonia, Spain",
    email: "pere.tarrida@estudiantat.upc.edu",
    brand: "insightful computer science student who excels at JavaScript and C++. I Will finish my Senior year in June. I am also self-taught in Javascript and I helped with some open-source projects and made some projects for different hackathons. I'm quietly confident, naturally curious, and perpetually working on improving my abilities, and always open to learning new things."
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
