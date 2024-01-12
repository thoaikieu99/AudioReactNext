import "./Navbar.scss";
import logo from "./../../WhiteCut.png";
import { Col, Container, Row } from "react-bootstrap";
import ListTopAudio from "../topAudio/ListTopAudi";
import { useState } from "react";
import TheLoai from "../theLoai/theLoai";
import { NavLink } from "react-router-dom";

const NaBar = (props) => {
  const [actionTop, setActionTop] = useState("topNgay");
  const hangeonclick = (ev) => {
    setActionTop(ev.target.getAttribute("name"));
  };

  return (
    <div className="Nabar">
      <div>
        <nav className="navbar navbar-expand-lg bg-secondary fixed-top">
          <div className="container-fluid">
            <Container>
              <Row>
                <Col xs={12} lg={1} style={{ position: "relative" }}>
                  <NavLink to="/" className="navbar-brand me-auto">
                    <img src={logo} width="35px" height="35px" alt="Kianai" />
                  </NavLink>

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
                        <li className="nav-item" aria-current="page">
                          <NavLink to="/" className="nav-link active">
                            Trang chủ
                          </NavLink>
                        </li>

                        <TheLoai />
                        <li className="nav-item">
                          <NavLink to="/nghe-nhieu" className="nav-link">
                            Nghe nhiều
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink to="/tu-truyen" className="nav-link">
                            Tu truyen
                          </NavLink>
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
            <Col md={7} lg={8} xl={9}>
              {props.children}
            </Col>

            <Col md={5} lg={4} xl={3} className="bo">
              <Row
                className="rowc"
                onClick={hangeonclick}
                style={{ cursor: "pointer" }}
              >
                <Col
                  name="topNgay"
                  className={actionTop === "topNgay" ? "activer" : ""}
                >
                  Top ngay
                </Col>
                <Col
                  name="topThang"
                  className={actionTop === "topThang" ? "activer" : ""}
                >
                  Top thang
                </Col>
                <Col
                  name="topNam"
                  className={actionTop === "topNam" ? "activer" : ""}
                >
                  Top nam
                </Col>
              </Row>

              <Row>
                <ListTopAudio />
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
export default NaBar;
