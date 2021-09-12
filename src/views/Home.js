// import HelloWorld from '../components/helloWorld'
import { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const url = `https://613cd4e5270b96001798b299.mockapi.io/api/v1/test?page=1&limit=10`;
  const [product, setProduct] = useState({
    data: null,
    loading: false,
    error: false
  });

  useEffect(() => {
    setProduct({
      loading: true,
      data: null,
      error: false
    })
    axios.get(url)
    .then(response => {
      setProduct({
        loading: false,
        data: response.data,
        error: false
      })
    })
    .catch(() => {
      setProduct({
        loading: false,
        data: null,
        error: true
      })
    })
  }, [url]);

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