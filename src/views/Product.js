import { useParams } from 'react-router-dom';
import Loader from '../components/Loader'
import useAxiosGet from '../hooks/HttpRequests';

export default function Product() {
  const { id } = useParams();
  const url = `https://613cd4e5270b96001798b299.mockapi.io/api/v1/test/${id}`;

  let product = useAxiosGet(url);

  let content = null;

  // useEffect(() => {
  //   axios.get(url)
  //   .then(response => {
  //     setProduct(response.data);
  //   })
  // }, [url])

  
  if (product.error) {
    content = <p>There was an error. Please refresh or try again later.</p>
  }

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
