import { createBrowserRouter } from "react-router-dom";
import Main from "../Component/Main/Main";
import Home from "../Component/Pages/Home/Home";


import SignUp from './../Component/Pages/SignUp/SignUp';




export const router = createBrowserRouter([
  {
    path: "/", 
    element: <Main></Main>, 
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
            {
        path: "/register",
        element: <SignUp></SignUp>,
      },
      

    ],
  },
]);
