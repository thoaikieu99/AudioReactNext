import logo from "./logo.svg";
import "./App.css";
import Login from "./compoments/Login";

import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div class="d-flex vh-100 justify-content-center align-items-center bg-primary p-2 bg-opacity-25">
      <Login />;
    </div>
  );
}

export default App;
