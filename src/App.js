import React from 'react';
import Nav from './nav';
import About from './about';
import Contact from './contact';
import Events from './events';
import Merch from './merch';
import Music from './music';
import Footer from './footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import './mobile.css';


function App() {
  return (
    <Router>
      <div className="App">
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/events" exact component={Events} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/merch" exact component={Merch} />
        <Route path="/music" exact component={Music} />
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}

const Home = () => {
  return (
    <div>
      <section className="home">
        <div className="home-info">
          <h1 className="main-home-h1">The B.F.G. Band</h1>
        </div>
      </section>
      <section className="home-two">
        <h1>The Southeast.<br /><br />Amplified.</h1>
      </section>
      <section className="home-three">
        <Events />
      </section>
    </div>
  );
}

export default App;