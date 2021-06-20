import React from 'react';
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom'
import About from './components/About';
import Contact from './components/Contac';
import Home from './components/Home'
import Nav from './components/Nav'
import Footer from './components/Footer';
import Projects from './components/Projects'
import './App.css'

const Routing = () => {
    return (
       
            <Switch>
                <Route exact path="/" component={Home}>
                    <Home />
                </Route>
                <Route exact path="/contact" component={Contact}>
                    <Contact />
                </Route>
                <Route exact path="/porfolio" component={Projects}>
                    <Projects />
                </Route>
                <Route exact path="/about" component={About}>
                    <About />
                </Route>
            </Switch>
      
    );
};
function App() {
    const history = useHistory()
    return (
            <Router history={history}>
                <Nav />
                <Routing />
                <Footer />
            </Router>
    )
}

export default App;
