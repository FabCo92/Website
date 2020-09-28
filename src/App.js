import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Impressum from './components/pages/Impressum';
import Datenschutz from './components/pages/Datenschutz';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Impressum" component={Impressum} />
          <Route path="/Datenschutz" component={Datenschutz} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
