import HelloWorld from './components/helloWorld';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <HelloWorld name="Mauricio"/>
        <Switch>
          <Route path="/" exact>
            <h1 className="font-bold text-2xl">This is the home page</h1>
          </Route>
          <Route path="/about">
            <h1 className="font-bold text-2xl">About us</h1>
          </Route>
        </Switch>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
