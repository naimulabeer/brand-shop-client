import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root/Root";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
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
