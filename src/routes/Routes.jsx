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
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch(
            "https://brand-shop-server-fk7rbslch-naimulabeer.vercel.app/category"
          ),
      },
      {
        path: "/productPage/:brandName",
        element: <ProductPage />,
        loader: ({ params }) =>
          fetch(
            `https://brand-shop-server-fk7rbslch-naimulabeer.vercel.app/product/${params.brandName}`
          ),
      },
      {
        path: "/productPage/:brandName/:id",
        element: (
          <PrivateRoute>
            <UpdateProduct />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://brand-shop-server-fk7rbslch-naimulabeer.vercel.app/product/${params.brandName}/${params.id}`
          ),
      },
      {
        path: "/productPage/:brandName/:id/details",
        element: (
          <PrivateRoute>
            <ProductDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://brand-shop-server-fk7rbslch-naimulabeer.vercel.app/product/${params.brandName}/${params.id}`
          ),
      },
      {
        path: "/addproduct",
        element: (
          <PrivateRoute>
            <AddProduct />
          </PrivateRoute>
        ),
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        ),
        loader: () =>
          fetch(
            "https://brand-shop-server-fk7rbslch-naimulabeer.vercel.app/cart"
          ),
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
