import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ErrorPage from "../pages/Errorpage";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import BooksDetails from "../Components/BooksDetails/BooksDetails";
import Books from "../Components/Books/Books";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/books",
        element: <Books />,
      },
      {
        path: "/books/:bookId",
        element: <BooksDetails />,
        loader: async () => {
          return fetch("/booksData.json");
        },
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
    ],
  },
]);

export default routes;


