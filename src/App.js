import React from 'react'
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import MainPage from '../src/components/pages/MainPage/MainPage';
import Skills from './components/pages/Skills/Skills';
import Cards from './components/pages/Cards/Cards';
import Contact from '../src/components/pages/Contact/Contact';
import Footer from '../src/components/pages/Footer/Footer';
function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact component={MainPage} />
          <Route path='/skills/' exact component={Skills} />
          <Route path='/projects/' exact component={Cards} />
          <Route path='/contact/' exact component={Contact} />
        </Switch>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
