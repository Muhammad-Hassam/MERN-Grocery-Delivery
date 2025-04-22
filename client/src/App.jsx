import { useState } from "react";
import { Navbar, Footer } from "./components";
import { AllProducts, Home, ProductCategory, ProductDetails } from "./pages";
import { Route, Routes, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAppContext } from "./context/AppContext";
import { Login } from "./components";
function App() {
  const isSellerPath = useLocation().pathname.includes("seller");
  const [count, setCount] = useState(0);
  const { showUserLogin } = useAppContext();
  return (
    <>
      <div>
        {isSellerPath ? null : <Navbar />}
        {showUserLogin ? <Login /> : null}
        <Toaster />
        <div
          className={`${isSellerPath ? "" : "px-6 md:px-16 lg:px-24 xl:px-32"}`}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<AllProducts />} />
            <Route path="/products/:category" element={<ProductCategory />} />
            <Route
              path="/products/:category/:id"
              element={<ProductDetails />}
            />
          </Routes>
        </div>
        {!isSellerPath && <Footer />}
      </div>
    </>
  );
}

export default App;
