import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Cart from './Components/Cart'
import Dashboard from './Components/Dashboard'
import Headers from './Components/Headers'
import Home from './Components/Home'
import Products from './Components/Products'

function App():JSX.Element {

  return (

  <BrowserRouter>
  <div className="app">
  <Headers/>
  <Home/>
  <Routes>
    <Route path='/' element={<Dashboard/>}/>
    <Route path='/products' element={<Products/>}/>
    <Route path='cart' element={<Cart/>}/>

  </Routes>
  
</div>
</BrowserRouter>
  )
}

export default App
