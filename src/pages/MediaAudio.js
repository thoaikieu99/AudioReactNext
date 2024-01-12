import { useEffect, useState } from "react";

const MediaAudio = () => {
  const [count, setCount] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("aa");
    }, 3000);
    return () => clearTimeout(timer);
  }, [count]);

  const hangeClick = () => {
    setCount(!count);
  };
  return <p onClick={hangeClick}>Hello World</p>;
};
export default MediaAudio;
