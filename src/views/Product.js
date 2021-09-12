import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams} from 'react-router-dom';
import Loader from '../components/Loader'

export default function Product() {
  const { id } = useParams();
  const url = `https://613cd4e5270b96001798b299.mockapi.io/api/v1/test/${id}`;
  // const [product, setProduct] = useState(null);
  const [product, setProduct] = useState({
    data: null,
    loading: false,
    error: false
  });

  let content = null;

  // useEffect(() => {
  //   axios.get(url)
  //   .then(response => {
  //     setProduct(response.data);
  //   })
  // }, [url])

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
  }, [url])

  if (product.loading) {
    content = <Loader />
  }

  if (product.data) {
    // return (
    //   <div>
    //     <h1 className="font-bold text-2xl">{product.data.name}</h1>
    //     <p>
    //       Content for Product page...
    //     </p>
    //   </div>
    // )}
    content =
    <div>
      <h1 className="font-bold text-2xl mb-3">{product.data.name}</h1>
      <img src={product.data.images[0].imageUrl} alt="{product.data.name}" />
      <div className="font-bold text-xl mb-3 border text-center">
        ${product.data.price}
      </div>
      <p>
        {product.data.description}
      </p>
    </div>
  }

  return (
    <div>
      {content}
    </div>
  )
}
