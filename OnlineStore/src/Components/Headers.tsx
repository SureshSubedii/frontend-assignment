import { useEffect, useState } from "react";

function Headers() {
  const [timeReal, settimeReal] = useState<number>(0); 
  const [timeRealMinutes, settimeRealMinutes] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const time = new Date();
      settimeReal(time.getHours());
      settimeRealMinutes(time.getMinutes());
    }, 1000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="bg-gradient-to-r from-red-700 to-blue-900 text-white flex sticky top-0 h-full px-3 py-4 items-center font-sans">
      <h1 className="text-3xl font-bold sm:text-lg md:text-3xl lg:text-5xl">Online Store</h1>
      <h2 className="text-3xl font-bold sm:text-lg md:text-3xl lg:text-5xl mx-auto" >
        {timeReal >= 12 ? timeReal - 12 : timeReal}:
        {timeRealMinutes < 10 ? "0" : ""}
        {timeRealMinutes} {timeReal >= 0 && timeReal < 12 ? "AM" : "PM"}
      </h2>
    </div>
//     <div className="bg-gradient-to-r from-red-700 to-trueGray-800 text-white flex sticky top-0 h-full px-3 items-center">
//   <h1 className="text-3xl font-bold ">EMS</h1>
//   <h2 className="text-3xl font-bold  mx-auto">Your Centered Text</h2>
// </div>

  );
}

export default Headers;
