import { useEffect, useState } from "react";
import ListAudio from "../compoments/audio/ListAudio";

import { getApiNewAudio } from "../services/apiServices";

const Home = () => {
  const [listAudio, setListAudio] = useState();

  useEffect(() => {
    const get = async () => {
      const getApi = await getApiNewAudio();

      setListAudio(getApi.data);
    };
    get();
  }, []);

  return (
    <>
      <div className="relative">
        <h3 className="page-title">Truyện mới cập nhật</h3>
      </div>
      <ListAudio onList={listAudio?.rows} />
    </>
  );
};

export default Home;
