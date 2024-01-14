import { Outlet } from "react-router-dom";
import NaBar from "../compoments/narbar/Nabar";

const RootListen = () => {
  return (
    <NaBar>
      <div style={{ maxWidth: 1100 }} className="container ">
        <Outlet />
      </div>
    </NaBar>
  );
};

export default RootListen;
