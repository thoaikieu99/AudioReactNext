import "./App.css";

import Nabar from "./compoments/Nabar";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Home from "./pages/Home";
import { useSelector } from "react-redux";

import Login from "./pages/Login";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      id: "root",
      // loader: tokenLoader,
      children: [
        // { index: true, element: <HomePage /> },
        // {
        //   path: "events",
        //   element: <EventsRootLayout />,
        //   children: [
        //     {
        //       index: true,
        //       element: <EventsPage />,
        //       loader: eventsLoader,
        //     },
        //   ],
        // },
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
      <div>{pay}</div>
    </>
  );
}

export default App;
