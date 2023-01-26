import {
  createBrowserRouter,
  RouterProvider,
 Outlet
} from "react-router-dom";
import './App.css';
import Navbar from "./components/NavBar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";


const Layout = () =>{
     return (
      <div className="app">
        <Navbar/>
        <Outlet/>
        <Footer/>
      </div>
     )
}
const router = createBrowserRouter([
  {
   path: "/",
   element:<Layout/>,
   children: [
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/product",
      element:<Product/>
    },
    {
      path:"/products/:id",
      element:<Products/>
    },
   ]
  }
])
function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
