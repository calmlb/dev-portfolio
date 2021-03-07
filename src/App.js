import React from 'react'
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import MainPage from '../src/components/pages/MainPage/MainPage';

function App() {
  return (
    <div className='App'>
    <Router>
      <NavBar />
      <Switch>
        <Route path='/' exact component={MainPage} />
      </Switch>
    </Router>
    </div>
  )
}

export default App
