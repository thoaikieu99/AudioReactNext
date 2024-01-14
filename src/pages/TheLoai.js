import { useParams } from "react-router-dom";
import ListAudio from "../compoments/audio/ListAudio";
import { useEffect, useState } from "react";

import useAxios from "../customHook/useCusAxios";

const TheLoai = () => {
  const { slug } = useParams();

  const [listAudio, setListAudio] = useState();

  const { response } = useAxios({
    method: "get",
    url: `categories/${slug}`,
  });

  useEffect(() => {
    if (response !== null) {
      setListAudio(response);
    }
  }, [response]);

  return (
    <>
      <div className="relative">
        <h3 className="page-title">{listAudio?.nameTheLoai}</h3>
      </div>
      <ListAudio onList={listAudio?.data?.theLoai?.rows} />
    </>
  );
};

export default TheLoai;
