import { useEffect, useState } from "react";
import ListAudio from "../compoments/audio/ListAudio";
import { getApiNewAudio } from "../services/apiServices";

const Home = () => {
  const [listAudio, setListAudio] = useState();

  useEffect(() => {
    const getAudio = async () => {
      const sad = await getApiNewAudio();
      setListAudio(sad.data.data);
    };
    getAudio();
  }, []);

  return (
    <>
      <div className="relative">
        <h3 className="page-title">Truyện mới cập nhật</h3>
      </div>
      <ListAudio onList={listAudio?.ListAudio} />
    </>
  );
};

export default Home;
