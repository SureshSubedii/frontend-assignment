import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Cart from './Components/Cart'
import Dashboard from './Components/Dashboard'
import Headers from './Components/Headers'
import Home from './Components/Home'
import ProductDetails from './Components/ProductDetails'
import Products from './Components/Products'

function App():JSX.Element {
  document.body.style.backgroundColor = 'rgb(238, 230, 230)';


  return (

  <BrowserRouter>
  <div className="app">
  <Headers/>
  <Home/>
  <Routes>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/' element={<Products/>}/>
    <Route path='cart' element={<Cart/>}/>
    <Route path='productDetails' element={<ProductDetails/>}/>

  </Routes>
  
</div>
</BrowserRouter>
  )
}

export default App
