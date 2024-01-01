import "./App.css";
import ListAudio from "./compoments/ListAudio";
import Login from "./compoments/Login";
import Nabar from "./compoments/Nabar";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
function App() {
  const list = [
    {
      id: 1,
      date: "123",
      modified: "123123",
      slug: "123123",
      title: "123123",
      content: "123123123123",
      trang_thai: "123131231",
      url: "231231231231",
      sotap: 23123123,
      baseurl: "12312312",
    },
    {
      id: 2,
      date: "dsxd",
      modified: "wdcz",
      slug: "asdc",
      title: "dfcasdf",
      content: "fdad",
      trang_thai: "cxzv",
      url: "dfqf",
      sotap: 32,
      baseurl: "dsfa",
    },
    {
      id: 3,
      date: "12123sxca",
      modified: "2fezx21",
      slug: "cccccc",
      title: "aaaaa",
      content: "asdasdasd",
      trang_thai: "aaaaaaaaaa",
      url: "aaaaa",
      sotap: 11,
      baseurl: "aaa",
    },
  ];
  return (
    <>
      <div>
        <Nabar>
          <div style={{ maxWidth: 1100 }} className="container">
            <ListAudio onList={list} />
          </div>
        </Nabar>
        {/* <Login /> */}
      </div>
    </>
  );
}

export default App;
