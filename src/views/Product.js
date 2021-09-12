import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams} from 'react-router-dom';

export default function Product() {
  const { id } = useParams();
  const url = `https://613cd4e5270b96001798b299.mockapi.io/api/v1/test/${id}`;
  const [product, setProduct] = useState({
    data: null,
    loading: false,
  });

  let content = null

  useEffect(() => {
    axios.get(url)
    .then(response => {
      setProduct({
        loading: true,
        data: response.data
      };
    })
  }, [url])


    if (product) {
      // return (
      //   <div>
      //     <h1 className="font-bold text-2xl">{product.name}</h1>
      //     <p>
      //       Content for Product page...
      //     </p>
      //   </div>
      // )}
      content =
      <div>
        <h1 className="font-bold text-2xl mb-3">{product.name}</h1>
        <img src={product.images[0].imageUrl} alt="{product.name}" />
        <div className="font-bold text-xl mb-3 border text-center">
          ${product.price}
        </div>
        <p>
          {product.description}
        </p>
      </div>
    }

    return (
      <div>
        {content}
      </div>
  )
}
