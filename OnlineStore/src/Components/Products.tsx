import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Spinner from './Spinner';

// Definfing the type for product object
type Product = {
  id: number;
  title: string;
  price:number;
  description:string;
  image:string;
  rating:{
    rate:number,
    count:number
  }

};

const fetchData = async () => {
  const response = await axios.get<Product[]>('https://fakestoreapi.com/products');
  return response.data;
};

const Products = (): JSX.Element => {
  const { data, error, isLoading } = useQuery<Product[], Error>(['products'], fetchData);

  if (isLoading) {
    return <Spinner/>
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <style>
        {`.h-90vh {
          height: 84vh;
        }
        `}
      </style>
      <div className="m-4 rounded h-90vh overflow-x-auto bg-gray-300 ">
        <h1 className="text-center text-3xl font-bold mx-1 sm:text-base">Products</h1>
        <div className="flex justify-center bg-blue-500">
          <input className="outline-none flex " placeholder="Search" />
        </div>
        {data && data.map((item) => <div key={item.id}>{item.title}</div>)}
      </div>
    </>
  );
};

export default Products;
