import { useEffect, useState } from "react";
import ListAudio from "../compoments/audio/ListAudio";

import useAxios from "../customHook/useCusAxios";

const Home = () => {
  const [listAudio, setListAudio] = useState();

  const { response } = useAxios({
    method: "get",
    url: "/audios/new",
  });

  useEffect(() => {
    if (response !== null) {
      setListAudio(response.data);
    }
  }, [response]);

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
