import HelloWorld from '../components/helloWorld'

const Home = () => (
  <div>
    <h1 className="font-bold text-2xl">This is the home page</h1>
    <HelloWorld name="Mauricio"/>
    <p>
      Content for Home page...
    </p>
  </div>
)

export default Home