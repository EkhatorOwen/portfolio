import React, { Component,Fragment } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom'
import Resume from './Resume';
import Portfolio from './Portfolio'
import Contact from './Contact'
import Home from './Home'
import './App.css';
import './main.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Fragment>
        <div className="sidebar-menu">
          <ul className="inline-menu">
            <NavLink to="/"><li className="">Home</li></NavLink> 
            <NavLink to="/resume"><li className="">Resume</li></NavLink>
            <NavLink to="/portfolio"><li className="">Portfolio</li></NavLink> 
            <NavLink to="/contact"><li className="">Contact</li></NavLink>
          </ul>
        </div>
        <div className="home-container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/resume" component={Resume} />
          <Route  path="/portfolio" component={Portfolio}/>
          <Route  path="/contact" component={Contact}/>
        </Switch>
        </div>
        
      </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
