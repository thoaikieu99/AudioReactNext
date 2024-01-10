import "./App.css";

import Nabar from "./compoments/narbar/Nabar";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Home from "./pages/Home";
import { useSelector } from "react-redux";

import Login from "./pages/Login";
import NgheNhieu from "./pages/NgheNhieu";
import TuTruyen from "./pages/TuTruyen";
import Root from "./pages/Root";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      id: "root",
      // loader: tokenLoader,
      children: [
        { index: true, element: <Home /> },
        {
          path: "tu-truyen",
          element: <TuTruyen />,
        },
        {
          path: "nghe-nhieu",
          element: <NgheNhieu />,
        },
      ],
    },
  ]);

  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  let pay = (
    <Nabar>
      <div style={{ maxWidth: 1100 }} className="container">
        <RouterProvider router={router} />
      </div>
    </Nabar>
  );

  if (!isAuth) {
    pay = <Login />;
  }
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
