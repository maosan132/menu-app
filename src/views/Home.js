// import HelloWorld from '../components/helloWorld'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../components/Loader';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const url = `https://613cd4e5270b96001798b299.mockapi.io/api/v1/test?page=1&limit=10`;
  const [products, setProducts] = useState({
    data: null,
    loading: false,
    error: false
  });

  useEffect(() => {
    setProducts({
      loading: true,
      data: null,
      error: false
    })
    axios.get(url)
    .then(response => {
      setProducts({
        loading: false,
        data: response.data,
        error: false
      })
    })
    .catch(() => {
      setProducts({
        loading: false,
        data: null,
        error: true
      })
    })
  }, [url]);

  let content = null;

  if (products.error) {
    content = <p>There was an error. Please refresh or try again later.</p>
  }

  if (products.loading) {
    content = <Loader />
  }

  if (products.data) {
    content =
    products.data.map((p) =>
      <ProductCard
        product={p}
        key={p.id}
      />
     // <div>{p.name}</div>
    )
  }

  return (
    <div>
      <h1 className="font-bold text-2xl pb-3">Best Sellers</h1>
      {/* <HelloWorld name="Mauricio"/> */}
      {content}
    </div>
  )

}

export default Home