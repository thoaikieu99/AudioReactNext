import { Col, Row } from "react-bootstrap";
import "./theLoai.scss";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { getApiTheLoai } from "../../services/apiServices";

const TheLoai = () => {
  const [theLoai, setTheLoai] = useState();

  useEffect(() => {
    const getTheLoai = async () => {
      const list = await getApiTheLoai();
      setTheLoai(list.data.theLoai);
    };
    getTheLoai();
  }, []);

  const ListAudio = theLoai?.map((value) => {
    return (
      <Col md={6} lg={3} className="nomagrin" key={"theloai-" + value.id}>
        <NavLink
          to={`/the-loai/${value.slug}`}
          className="fill"
          title={value.name}
        >
          {value.name}
        </NavLink>
      </Col>
    );
  });

  return (
    <li className="nav-item dropdown ">
      <a
        className="nav-link dropdown-toggle"
        href="/"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Thể Loại
      </a>
      <ul className="dropdown-menu theLoai sha">
        <Row className="tb">{ListAudio}</Row>
      </ul>
    </li>
  );
};

export default TheLoai;
