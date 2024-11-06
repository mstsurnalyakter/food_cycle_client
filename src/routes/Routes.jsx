import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import StartPage from "../page/StartPage/StartPage";
import AccessPage from "../page/AccessPage/AccessPage";
import LoginPage from "../page/LoginPage/LoginPage";
import HomePage from "../page/HomePage/HomePage";
import FoodWise from "../page/FoodWise/FoodWise";
import FoodWiseDetailPage from "../page/FoodWiseDetailsPage.jsx/FoodWiseDetailPage";

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
        element: <AccessPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/home_page",
        element: <HomePage />,
      },
      {
        path: "/home_page/food_wise",
        element: <FoodWise />,
      },
      {
        path: "/food_wise/:id",
        element: <FoodWiseDetailPage />,
      },
    ],
  },
]);

export default router;