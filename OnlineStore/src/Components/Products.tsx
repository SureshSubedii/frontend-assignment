import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
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
  document.body.style.backgroundColor="rgb(238, 230, 230)"

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
          height: 85vh;
        }
        .h-15vh{
          height:15vh
        }
        .mm{
          margin:8px
        }

       
        `}
      </style>
      <div className="m-4 rounded h-90vh overflow-x-auto sm:m-2 md:ml-8 lg:m-6">
        <div className="flex justify-start items-center border border-solid border-blue-400 m-5  bg-white rounded  sm:m-1 md:m-2">
          <SearchOutlinedIcon/>
          <input className="outline-none w-full text-3xl flex  sm:text-sm md:text-2xl" placeholder="Search"  />
        </div>
        <h1 className="text-center text-3xl font-bold my-1 sm:text-base">Products</h1>

        <div className="flex flex-wrap justify-center ">

        {data && data.map((item) => (
          <div className='  p-1 lg:p-3 m-1  sm:w-full md:w-40 lg:w-60 flex flex-col h-auto  items-center  bg-white rounded cursor-pointer h-auto  sm:text-xs md:text-sm md:m-1.5 lg:m-3 lg:text-2xl' key={item.id} onDoubleClick={()=>console.log("CLicked")}>
            <img className="w-20 lg:w-30 object-contain  h-15vh " src={item.image}></img>
           <h2 className='font-bold  overflow-wrap-break-word' >
           {item.title.length > 30 ? `${item.title.slice(0, 30)}..`: item.title}
           
          </h2>
          <h3 className="text-red-600 mt-auto  sm:text-xs lg:text-2xl">{item.price}$</h3>
          <button className='bg-orange-400 m-1 text-white font-bold rounded  sm:text-xs md:text-sm p-1 lg:text-xl' onClick={()=>console.log("Art")}>Add to Cart</button>
          </div>
          ))}

        </div>


      </div>

    </>
  );
};

export default Products;
