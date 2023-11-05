import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Preview from "./Components/Preview";
import Product from "./Components/Product";
import ShoppingCart from "./Components/ShoppingCart";

export default function App() {
  return(
    <>
      <Navbar />
      <About />
      <Preview />
      <ShoppingCart />
      <Product />
    </>
  )
}
