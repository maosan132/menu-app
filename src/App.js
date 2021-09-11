import HelloWorld from './components/helloWorld';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from './views/About';
import Home from './views/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="p-3">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
