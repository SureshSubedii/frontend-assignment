import FlutterDashIcon from '@mui/icons-material/FlutterDash';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import StoreIcon from '@mui/icons-material/Store';
import { useNavigate } from 'react-router-dom';
function Navigation(): JSX.Element {
  const navigate=useNavigate();
  return (
    <div className="bg-gradient-to-b from-gray-700 to-gray-500 text-white flex justify-evenly font-bold  sticky top-0 py-2">
     
      <p className="sidebar-items " onClick={()=>navigate("/")}><FlutterDashIcon/> 
      <span>Dashboard</span>
      </p>

      <p className="sidebar-items" onClick={()=>navigate("/products")}>
        <StoreIcon/>
        <span>Products</span>
      </p>

      <p className="sidebar-items" onClick={()=>navigate("/cart")}>
        <ShoppingCartOutlinedIcon/>
        <span>Cart</span>
      </p>
    </div>
  );
}

export default Navigation;
