import HelloWorld from './components/helloWorld';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HelloWorld name="Mauricio"/>
    </div>
  );
}

export default App;
