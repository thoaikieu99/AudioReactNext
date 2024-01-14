import { useEffect, useRef, useState } from "react";

import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const AudioPlay = (props) => {
  const playlist = props.audio.link_audio.split("<br>");

  const [speed, setSpeed] = useState(1);

  const [currentTrack, setTrackIndex] = useState(1);
  const handleClickNext = () => {
    console.log("click next");
    setTrackIndex((currentTrack) =>
      currentTrack < playlist.length - 1 ? currentTrack + 1 : 0
    );
  };
  const handleEnd = () => {
    console.log("end");
    setTrackIndex((currentTrack) =>
      currentTrack < playlist.length - 1 ? currentTrack + 1 : 0
    );
  };
  const saveLocal = (currentTime, scr) => {
    console.log(parseInt(currentTime), "ashdghas", scr);

    // localStorage.setItem("key", "value");
  };
  const buttonRef = useRef(null);
  useEffect(() => {
    console.log((buttonRef.current.audio.current.playbackRate = 6.5));
  }, [buttonRef]);

  const ll = (
    <AudioPlayer
      src={playlist[currentTrack]}
      showSkipControls
      customAdditionalControls={[]}
      progressJumpSteps={{ backward: 10000, forward: 10000 }}
      showDownloadProgress
      onClickNext={handleClickNext}
      onEnded={handleEnd}
      ref={buttonRef}
      onListen={(ec) => saveLocal(ec.target.currentTime, ec.target.currentSrc)}
    />
  );

  return <>{ll}</>;
};

export default AudioPlay;
