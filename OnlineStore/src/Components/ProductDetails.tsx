import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory, setCount, setDescription, setImage, setPrice, setRate, setTitle } from '../StateManagement/ProductSlice';

import { selectCategory, selectCount, selectDescription, selectImage, selectPrice, selectRate, selectTitle } from '../StateManagement/ProductSlice';
function ProductDetails(): JSX.Element {
  const title = useSelector(selectTitle)
  const image = useSelector(selectImage);
  const description = useSelector(selectDescription)
  const category = useSelector(selectCategory);
  const price = useSelector(selectPrice)
  const rate = useSelector(selectRate);
  const count = useSelector(selectCount);

  const dispatch=useDispatch()

  useEffect(() => {
    dispatch(setTitle(sessionStorage.getItem('title')??''))
    dispatch(setDescription(sessionStorage.getItem('description')??''));
    dispatch(setPrice(parseFloat(sessionStorage.getItem('price') ?? '0')));

    dispatch(setImage(sessionStorage.getItem('image')??''));
    dispatch(setRate(parseFloat(sessionStorage.getItem('rate') ?? '0')));
    dispatch(setCount(parseFloat(sessionStorage.getItem('count') ?? '0')))
    dispatch(setCategory(sessionStorage.getItem('category')??''))
  
  
 
  }, [])
  
  return (
    <div className=" lg:mt-10 md:mt-5 sm:mt-1 h-[calc(100vh-15vh)]  ">
      <p className="grid place-items-center  sm:text-sm md:text-2xl lg:text-3xl">ProductDetails</p>
      <div className="flex-column mx-auto rounded-2xl w-[calc(100vw-40vw)]  sm:w-full lg:w-[calc(100vw-40vw)] h-[calc(100vh-23vh)] overflow-y-scroll p-3 m-3 bg-white ">
        <img src={image} className=' mx-auto h-[calc(100vh-80vh)]  object-contain' />
        <p className='lg:text-5xl  md:text-xl sm:text-sm font-bold mt-3 text-blue-400'>{title}</p>
        <p className='font-bold mt-3 text-2xl'>${price}</p>
        <p className='mt-5  sm:text-sm md:text-2xl lg:text-2xl'> {description}</p>
        <p className='sm:text-sm md:text-2xl  mt-4 '> <strong> Category:</strong> {category}</p>
        <Box component="fieldset" mb={3} borderColor="transparent" className='flex items-center '>
          <strong className='sm:text-sm md:text-2xl'>Ratings:</strong>
          <Rating name="read-only" value={rate} readOnly />
          <p > {rate} </p>
          <p>{'('}{count}{')'}</p>
        </Box>

      </div>

    </div>
  )
}

export default ProductDetails