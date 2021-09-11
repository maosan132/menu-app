import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './views/About';
import Home from './views/Home';
import Product from './views/Product'

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
            <Route path="/products/:id">
              <Product />
            </Route>
          </Switch>
        </div>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
