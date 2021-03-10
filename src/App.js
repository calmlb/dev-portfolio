import React from 'react'
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import MainPage from '../src/components/pages/MainPage/MainPage';
import Skills from './components/pages/Skills/Skills';
import Cards from './components/pages/Cards/Cards';
import Contact from '../src/components/pages/Contact/Contact';

function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact component={MainPage} />
          <Route path='./components/pages/Skills/Skills.js' exact component={Skills} />
          <Route path='./components/pages/Cards/Cards.js' exact component={Cards} />
          <Route path='./components/pages/Contact/Contact.js' exact component={Contact} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
