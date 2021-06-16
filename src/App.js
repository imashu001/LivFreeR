import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar/Nav';
import About from './components/about/about';
import Home from './components/Home/home';
import Contact from "./components/Contact/contact"
import Sustaiability from './components/Sustainability/sustainibility';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/sustainibility'>
            <Sustaiability />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
        </Switch>
        <div className='app'>
        <Contact />
        </div>
      </div>
    </Router>
  );
}

export default App;
