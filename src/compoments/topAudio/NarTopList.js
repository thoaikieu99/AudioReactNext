import { useEffect, useState } from "react";
import {
  getApiTopNam,
  getApiTopNgay,
  getApiTopThang,
} from "../../services/apiServices";
import ListTopAudio from "./ListTopAudi";
import { Col, Container, Row } from "react-bootstrap";

const NarTopList = (props) => {
  const [actionTop, setActionTop] = useState("topNgay");
  const [list, setList] = useState();
  const [topNgay, setTopNgay] = useState();
  const [topThang, setTopThang] = useState();
  const [topNam, setTopNam] = useState();
  const hangeonclick = (ev) => {
    setActionTop(ev.target.getAttribute("name"));
  };

  useEffect(() => {
    const getApi = async () => {
      const topDay = await getApiTopNgay();
      setTopNgay(topDay);
      const topM = await getApiTopThang();
      setTopThang(topM);
      const topY = await getApiTopNam();
      setTopNam(topY);
    };
    getApi();
  }, []);

  useEffect(() => {
    switch (actionTop) {
      case "topNgay":
        setList(topNgay);
        break;
      case "topThang":
        setList(topThang);
        break;
      case "topNam":
        setList(topNam);
        break;
      default:
        setList(topNgay);
    }
  }, [actionTop, topNgay, topThang, topNam]);
  return (
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
              Top ngày
            </Col>
            <Col
              name="topThang"
              className={actionTop === "topThang" ? "activer" : ""}
            >
              Top tháng
            </Col>
            <Col
              name="topNam"
              className={actionTop === "topNam" ? "activer" : ""}
            >
              Top năm
            </Col>
          </Row>

          <Row>
            <ListTopAudio listTop={list} />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default NarTopList;
