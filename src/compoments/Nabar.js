import "./Navbar.css";
import logo from "./../WhiteCut.png";
import { Col, Container, Row } from "react-bootstrap";
import ListTopAudio from "./ListTopAudi";

const naBar = (props) => {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-secondary fixed-top">
          <div className="container-fluid">
            <Container>
              <Row>
                <Col xs={12} lg={1} style={{ position: "relative" }}>
                  <a className="navbar-brand me-auto" href="/">
                    <img
                      src={logo}
                      width="35px"
                      height="35px"
                      alt="Kianai"
                    ></img>
                  </a>
                  <button
                    style={{ position: "absolute", right: 0 }}
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbar"
                    aria-controls="offcanvasNavbar"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                </Col>
                <Col>
                  <div
                    className="offcanvas offcanvas-end"
                    tabIndex="-1"
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                  >
                    <div className="offcanvas-header">
                      <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                        <img
                          src={logo}
                          width="35px"
                          height="35px"
                          alt="Kianai"
                        ></img>
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
                          <a
                            className="nav-link active"
                            aria-current="page"
                            href="/"
                          >
                            Trang chủ
                          </a>
                        </li>

                        <li className="nav-item dropdown">
                          <a
                            className="nav-link dropdown-toggle"
                            href="/"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Thể Loại
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="/">
                                Action
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="/">
                                Another action
                              </a>
                            </li>
                            <li>
                              <hr className="dropdown-divider" />
                            </li>
                            <li>
                              <a className="dropdown-item" href="/">
                                Something else here
                              </a>
                            </li>
                          </ul>
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
                </Col>
              </Row>
            </Container>
          </div>
        </nav>
      </div>
      <div
        style={{
          paddingTop: "5rem",
          alignContent: "center",
        }}
      >
        <Container>
          <Row>
            <Col md={8} lg={9}>
              {props.children}
              <hr />
            </Col>

            <Col md={4} lg={3}>
              <Row>
                <Col>Top ngay</Col>
                <Col>Top thang</Col>
                <Col>Top nam</Col>
              </Row>

              <Row>
                <ListTopAudio />
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default naBar;
