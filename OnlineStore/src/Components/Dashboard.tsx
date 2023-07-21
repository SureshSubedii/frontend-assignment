import { useNavigate } from "react-router-dom"

function Dashboard(): JSX.Element {
  const navigate=useNavigate()
  return (
    <>
    <div className=" m-5 rounded-lg bg-gray-300 p-4 " >
      <h1 className="text-5xl  ">Discover the Ultimate Online Shopping Experience at Our Online Store!</h1>

      <p className=" my-5  text-2xl  ">At Our Onlene Store, we bring you a world of possibilities right at your fingertips. From trendy fashion pieces and cutting-edge gadgets to must-have home essentials and more, we have curated an exclusive collection that caters to all your needs and desires.</p>
      <h2 className=" text-2xl my-5 italic"> Click on the <span className="font-bold cursor-pointer" onClick={()=>navigate("/products")}>products</span> to see the available Products</h2>
      
      </div>
      <footer className="bg-gray-700 flex justify-center items-center w-full mt-auto h-20 absolute bottom-0">
        <p className="text-white text-xl">&copy; Suresh Subedi 2023</p>
      </footer>

    </>

  )
}

export default Dashboard