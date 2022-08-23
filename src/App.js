import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./component/Cart";
import Home from "./component/Home";
import Navbar from "./component/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}>Home</Route>
          <Route path="/cart" element={<Cart />}>Cart</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
