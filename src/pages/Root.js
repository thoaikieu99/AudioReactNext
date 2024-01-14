import { Outlet } from "react-router-dom";
import NaBar from "../compoments/narbar/Nabar";
import NarTopList from "../compoments/topAudio/NarTopList";

const Root = () => {
  return (
    <NaBar>
      <NarTopList>
        <div style={{ maxWidth: 1100 }} className="container ">
          <Outlet />
        </div>
      </NarTopList>
    </NaBar>
  );
};

export default Root;
