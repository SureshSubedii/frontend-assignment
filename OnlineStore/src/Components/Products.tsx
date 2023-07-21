import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Spinner from './Spinner';

// Defining the type for product object
type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};



const Products = (): JSX.Element => {
  const [searchData,setSearchData]=useState('');


  const navigate=useNavigate();
  const fetchData = async () => {
    console.log("eds")
    try {

      const response = await axios.get<Product[]>('https://fakestoreapi.com/products');
      return response.data;
    }
    catch (error) {

      console.log(error)

      throw new Error('Failed to fetch data from the server. Please check your internet connection.');


    }
  };
  const { data, isError, error, isLoading } = useQuery<Product[], Error>(['products'], fetchData);
let filteredData=data;
if(searchData){
   filteredData =data?.filter((product)=>product.title.toLowerCase().includes(searchData.toLowerCase()) )
}



  return (
    <>
      <style>
        {`.h-90vh {
          height: 85vh;
        }
        .h-15vh {
          height: 15vh;
        }
        .mm {
          margin: 8px;
        }
      `}
      </style>
      <div className="m-4 rounded h-90vh overflow-x-auto sm:m-2 md:ml-8 lg:m-6">
        <div className="flex justify-start items-center border border-solid border-blue-400 m-5 bg-white rounded sm:m-1 md:m-2">
          <SearchOutlinedIcon />
          <input value={searchData} onChange={(e)=>setSearchData(e.target.value)} className="outline-none w-full text-3xl flex sm:text-sm md:text-2xl" placeholder="Search" />
        </div>
        <h1 className="text-center text-3xl font-bold my-1 sm:text-base md:text-2xl lg:text-5xl">Products</h1>
        {searchData && <p className=' text-center md:text-2xl sm:text-sm lg:text-5xl'> {filteredData?.length} Results found!</p>}
        {isLoading && <Spinner />}
        {isError && <p className='grid place-items-center mt-5 text-xl'> {error.message}
        </p>}


        <div className="flex flex-wrap justify-center">
          {filteredData &&
            filteredData.map((item) => (
              <div
                className="p-1 lg:p-3 m-1 sm:w-full md:w-40 lg:w-60 flex flex-col h-auto items-center bg-white rounded cursor-pointer h-auto sm:text-xs md:text-sm md:m-1.5 lg:m-3 lg:text-2xl"
                key={item.id}
                onClick={() => navigate('/productDetails')}
              >
                <img className="w-20 lg:w-30 object-contain h-15vh" src={item.image} alt={item.title} />
                <h2 className="font-bold overflow-wrap-break-word">
                  {item.title.length > 30 ? `${item.title.slice(0, 30)}..` : item.title}
                </h2>
                <h3 className="text-red-600 mt-auto sm:text-xs lg:text-2xl">{item.price}$</h3>
                <button
                  className="bg-orange-400 m-1 text-white font-bold rounded hover:bg-orange-300 sm:text-xs md:text-sm p-1 lg:text-xl"
                  onClick={(e) => {
                    e.stopPropagation()
                    console.log("CArt")
                  }}

                >
                  Add to Cart
                </button>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Products;
