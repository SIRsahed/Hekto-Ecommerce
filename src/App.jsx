import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import RootLayOut from "./components/RootLayOut"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import ProductDetails from "./pages/ProductDetails"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"


function App() {

  let router = createBrowserRouter(createRoutesFromElements(
    <Route element={<RootLayOut/>}>
      <Route path="/" element={<Home/>}/>
      <Route path="/shop" element={<Shop/>}/>
      <Route path="/shop/:id" element={<ProductDetails/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
    </Route>
  ))

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
