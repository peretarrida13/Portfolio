import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import Error from './Pages/Error';
import Menu from './Pages/Menu';

/*
  I use react router to switch between the main pages of my portfolio
  Lately I will put a specific page with a mini description for each project;
*/

function App() {
  return (
    <>
      <Router>
        <Menu/>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/about'>
            <About/>
          </Route>
          <Route path='/projects'>
            <Projects/>
          </Route>
          <Route path='/contact'>
            <Contact/>
          </Route>
          <Route path='/*'>
            <Error/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
