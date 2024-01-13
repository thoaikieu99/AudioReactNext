import { useEffect, useState } from "react";
import ListAudio from "../compoments/audio/ListAudio";
import { getApiNgheNhieu } from "../services/apiServices";

const NgheNhieu = () => {
  const [listAudio, setListAudio] = useState();
  useEffect(() => {
    const getApi = async () => {
      const lis = await getApiNgheNhieu();

      setListAudio(lis);
    };
    getApi();
  }, []);

  return (
    <>
      <div className="relative">
        <h3 className="page-title">Nghe nhieu</h3>
      </div>
      <ListAudio listTop={listAudio} />
    </>
  );
};

export default NgheNhieu;
