import "./App.css";

// import Nabar from "./compoments/narbar/Nabar";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Home from "./pages/Home";
import { useDispatch, useSelector } from "react-redux";

// import Login from "./pages/Login";
import NgheNhieu from "./pages/NgheNhieu";
import TuTruyen from "./pages/TuTruyen";
import Root from "./pages/Root";
import MediaAudio from "./pages/MediaAudio";
import TheLoai from "./pages/TheLoai";
import LoadingBar from "react-top-loading-bar";

import { counterActions } from "./store/counter";
import RootListen from "./pages/RootListen";

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
        {
          path: "the-loai",
          children: [
            {
              path: ":slug",
              element: <TheLoai />,
            },
          ],
        },
      ],
    },
    {
      path: "nghe-truyen/:slug",
      element: <RootListen />,
      children: [{ index: true, element: <MediaAudio /> }],
    },
  ]);

  // const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const count = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();

  // let pay = (
  //   <Nabar>
  //     <div style={{ maxWidth: 1100 }} className="container">
  //       <RouterProvider router={router} />
  //     </div>
  //   </Nabar>
  // );

  // if (!isAuth) {
  //   pay = <Login />;
  // }
  return (
    <>
      <LoadingBar
        color="#f11946"
        progress={count}
        onLoaderFinished={() => dispatch(counterActions.zero())}
      />
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
