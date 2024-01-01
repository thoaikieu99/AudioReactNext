import "./Navbar.css";
import logo from "./../WhiteCut.png";
const naBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-secondary  bg-opacity-50 fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand me-auto" href="/sd">
            <img src={logo} width="35px" height="35px" alt="Kianai"></img>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                logo
              </h5>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/as">
                    Trang chủ
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/asasd">
                    Thể Loại
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/asdasd">
                    Nghe nhiều
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/asdasd">
                    Truyện mới
                  </a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Tìm truyện"
                  aria-label="Tìm truyện"
                />
                <button
                  className="btn btn-outline-success"
                  style={{ display: "none" }}
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default naBar;
