import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Product from "./Components/Product";
import ShoppingCart from "./Components/ShoppingCart";


export default function App() {
  return(
    <>
      <Navbar />
      <Home />
      <ShoppingCart />
      <Product />
    </>
  )
}
