import HelloWorld from './components/helloWorld';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <HelloWorld name="Mauricio"/>
      <Footer />
    </div>
  );
}

export default App;
