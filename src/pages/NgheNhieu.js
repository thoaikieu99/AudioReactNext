import { useEffect, useState } from "react";
import ListAudio from "../compoments/audio/ListAudio";
import { getApiNgheNhieu } from "../services/apiServices";
import { Col, Row } from "react-bootstrap";
import ReactPaginate from "react-paginate";

const NgheNhieu = () => {
  const [listAudio, setListAudio] = useState();
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    const ad = async () => {
      let cou = await get();
      setPageCount(Math.ceil(cou / 42));
    };
    ad();
  }, []);

  const get = async (page = 0) => {
    const getApi = await getApiNgheNhieu(page);
    console.log(getApi);
    setListAudio(getApi);
    return getApi.data.length;
  };
  const handlePageClick = (event) => {
    get(event.selected);
  };
  return (
    <>
      <div className="relative">
        <h3 className="page-title">Nghe nhieu</h3>
      </div>
      <ListAudio listTop={listAudio} />
      <Row className="justify-content-md-center">
        <Col md="auto abc">
          <ReactPaginate
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={1}
            pageCount={pageCount}
            previousLabel="<"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
          />
        </Col>
      </Row>
    </>
  );
};

export default NgheNhieu;
