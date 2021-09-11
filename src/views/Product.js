import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Product() {
  const url = 'https://613cd4e5270b96001798b299.mockapi.io/api/v1/test/3';
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(url)
    .then(response => {
      setProduct(response.data)
    })
  }, [url])


    if (product) {
      return (
        <div>
          <h1 className="font-bold text-2xl">{product.name}</h1>
          <p>
            Content for Product page...
          </p>
        </div>
      )
    }

    return (
      <div></div>
  )
}
