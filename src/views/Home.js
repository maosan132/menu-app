import HelloWorld from '../components/helloWorld'

const Home = () => {
  let content = null;

  return (
    <div>
      <h1 className="font-bold text-2xl pb-3">Best Sellers</h1>
      {/* <HelloWorld name="Mauricio"/> */}
      {content}
    </div>
  )

}

export default Home