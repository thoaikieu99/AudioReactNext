import { useParams } from "react-router-dom";
import ListAudio from "../compoments/audio/ListAudio";
import { useEffect, useState } from "react";

import ReactPaginate from "react-paginate";
import { getApiListTL } from "../services/apiServices";
import { Col, Row } from "react-bootstrap";

const TheLoai = () => {
  const { slug } = useParams();
  const [listAudio, setListAudio] = useState();
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    const ad = async () => {
      let cou = await get();
      setPageCount(Math.ceil(cou / 42));
    };
    ad();
  }, [slug]);
  const get = async (page = 0) => {
    const getApi = await getApiListTL(slug, page);
    setListAudio(getApi);
    return getApi.data.theLoai.count;
  };

  const handlePageClick = (event) => {
    get(event.selected);
    const collection = document.getElementsByClassName("page-item");
    collection[0].scrollIntoView(true);
  };

  return (
    <>
      <div className="relative">
        <h3 className="page-title">{listAudio?.nameTheLoai}</h3>
      </div>
      <ListAudio onList={listAudio?.data?.theLoai?.rows} />
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

export default TheLoai;
