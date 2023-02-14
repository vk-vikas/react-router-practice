import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import About from "./pages/About";
import Featured from "./pages/Featured";
import Home from "./pages/Home";
import New from "./pages/New";
import NoMatch from "./pages/NoMatch";
import OrderSummary from "./pages/OrderSummary";
import Products from "./pages/Products";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="order-summay" element={<OrderSummary />} />

        {/* nested routing example */}
        <Route path="products" element={<Products />}>
          <Route path="featured" element={<Featured />} />
          <Route path="new" element={<New />} />
        </Route>

        {/* this is shown when path does matches any defined path */}
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
