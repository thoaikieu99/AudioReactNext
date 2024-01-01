import "./App.css";
import Login from "./compoments/Login";
import Nabar from "./compoments/Nabar";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
function App() {
  return (
    <>
      <div class="d-flex vh-100 justify-content-center align-items-center bg-primary p-2 bg-opacity-25">
        <Nabar />
        <Login />;
      </div>
    </>
  );
}

export default App;
