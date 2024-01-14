import { useEffect, useState } from "react";
import { getOneAudio } from "../services/apiServices";
import { useParams } from "react-router-dom";
import AudioPlay from "../compoments/media/AudioPlay";

const MediaAudio = () => {
  const { slug } = useParams();
  const [ifAudio, setIfAudio] = useState();
  useEffect(() => {
    const getIf = async () => {
      const If = await getOneAudio(slug);
      setIfAudio(If.data.audio);
    };
    getIf();
  }, [slug]);

  return <>{ifAudio ? <AudioPlay audio={ifAudio} /> : ""}</>;
};
export default MediaAudio;
