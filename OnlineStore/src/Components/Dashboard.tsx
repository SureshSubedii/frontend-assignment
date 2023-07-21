import { useNavigate } from "react-router-dom";

function Dashboard(): JSX.Element {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-between min-h-[calc(100vh-6.7rem)]">
      <div className="m-5 rounded-lg bg-gray-300 p-4">
        <h1 className="lg:text-5xl sm:text-3xl">
          Discover the Ultimate Online Shopping Experience at Our Online Store!
        </h1>

        <p className="my-5 lg:text-2xl md:text-xl sm:text-sm ">
          At Our Online Store, we bring you a world of possibilities right at your fingertips.
          From trendy fashion pieces and cutting-edge gadgets to must-have home essentials and
          more, we have curated an exclusive collection that caters to all your needs and desires.
        </p>
        <h2 className="lg:text-2xl md:text-xl sm:text-sm my-5 italic">
          Click on the <span className="font-bold cursor-pointer" onClick={() => navigate("/")}>
            products
          </span>{" "}
          to see the available Products
        </h2>
      </div>
      <footer className="bg-gray-700 flex justify-center items-center w-full  md:h-20 sm:h-10 ">
        <p className="text-white md:text-xl sm:text-xs">&copy; Suresh Subedi 2023</p>
      </footer>
    </div>
  );
}

export default Dashboard;
