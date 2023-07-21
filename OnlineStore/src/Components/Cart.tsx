import { useEffect, useState } from "react";
import { Product } from './Products';


function Cart(): JSX.Element {
  const [cartData, setCartData] = useState<Product[]>([]);
  const [count,setCounts]=useState<number[]>([])

  const getCart = () => {
    const cart = localStorage.getItem('cart');
    setCounts(new Array(cart?.length).fill(0));

    if (cart) {
      const cartItems = JSON.parse(cart);
      setCartData(cartItems);
    }
  };

  const decreaseCount = (index:number) => {
    setCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      newCounts[index] = newCounts[index] === 0 ? 0 : newCounts[index] - 1;
      return newCounts;
    });
  };

  const increaseCount = (index:number) => {
    setCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      newCounts[index] = newCounts[index] + 1;
      return newCounts;
    });
  }
  useEffect(() => {

    getCart();

  }, []);

  return (
    <div>
      {cartData.length === 0 ? (
        <p className="grid place-items-center text-3xl mt-10">Your cart is empty.</p>
      ) : (
        <div>
        <div className="m-4 rounded h-[calc(100vh-17vh)] overflow-x-auto sm:m-2 md:ml-8 lg:m-6">
        <h1 className="text-center text-3xl font-bold my-1 sm:text-base md:text-2xl lg:text-5xl">Your Cart</h1>

        <div className="flex flex-wrap justify-center">
          {
            cartData?.map((item,index) => (
              <div
                className="p-1 lg:p-3 m-1 border hover:border-blue-600 sm:w-full md:w-40 lg:w-60 flex flex-col h-auto items-center bg-white rounded-xl cursor-pointer h-auto sm:text-xs md:text-sm md:m-1.5 lg:m-3 lg:text-2xl"
                key={item.id}
                onClick={()=>console.log("h")}
              >
                <img className="w-20 lg:w-30 object-contain h-[calc(100vh-85vh)]" src={item.image} alt={item.title} />
                <h2 className="font-bold overflow-wrap-break-word">
                  {item.title.length > 30 ? `${item.title.slice(0, 30)}...` : item.title}
                </h2>
                <h3 className="text-red-600 mt-auto sm:text-xs lg:text-2xl">{item.price}$</h3>

                <div className="p-1 flex w-full justify-evenly ">
                  <button className=" bg-orange-400 px-2" onClick={()=>decreaseCount(index)}>-</button>
                  {count[index]}
                  <button className=" bg-orange-400 px-2" onClick={()=>increaseCount(index)}>+</button>
                </div>
                <button
                  className="bg-orange-400 m-1 text-white font-bold rounded hover:bg-orange-300 sm:text-xs lg:p-3 md:text-sm p-1 lg:text-xl"
                >
                 Buy
                </button>
              </div>
            ))}
        </div>
      </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
