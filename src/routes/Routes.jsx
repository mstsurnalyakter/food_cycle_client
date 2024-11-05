import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import StartPage from "../page/StartPage/StartPage";
import AccessPage from "../page/AccessPage/AccessPage";
import LoginPage from "../page/LoginPage/LoginPage";
import HomePage from "../page/HomePage/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <StartPage />,
      },
      {
        path: "/access_page",
        element:<AccessPage/>
      },
      {
        path: "/login",
        element:<LoginPage/>
      },
      {
        path: "/home_page",
        element:<HomePage/>
      },
    ],
  },
]);

export default router;