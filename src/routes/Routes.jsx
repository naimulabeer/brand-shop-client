import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root/Root";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import AddProduct from "../pages/AddProduct/AddProduct";
import Cart from "../pages/Cart/Cart";
import About from "../pages/About/About";
import ProductPage from "../pages/ProductPage/ProductPage";
import UpdateProduct from "../pages/UpdateProduct/UpdateProduct";
import ProductDetails from "../pages/ProductDetails/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/category"),
      },
      {
        path: "/productPage/:brandName",
        element: <ProductPage />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/${params.brandName}`),
      },
      {
        path: "/productPage/:brandName/:id",
        element: <UpdateProduct />,
        loader: ({ params }) =>
          fetch(
            `http://localhost:5000/product/${params.brandName}/${params.id}`
          ),
      },
      {
        path: "/productPage/:brandName/:id/details",
        element: <ProductDetails />,
        loader: ({ params }) =>
          fetch(
            `http://localhost:5000/product/${params.brandName}/${params.id}`
          ),
      },
      {
        path: "/addproduct",
        element: <AddProduct />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);

export default router;
