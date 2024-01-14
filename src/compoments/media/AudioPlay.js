import { useEffect, useRef, useState } from "react";
import "./AudioPlay.scss";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { Container, Row } from "react-bootstrap";

const AudioPlay = (props) => {
  const playlist = props.audio.link_audio.split("<br>");

  const [speed, setSpeed] = useState(1);

  const [currentTrack, setTrackIndex] = useState(0);
  const handleClickPrevious = () => {
    setTrackIndex((currentTrack) => (currentTrack > 1 ? currentTrack - 1 : 0));
  };
  const handleClickNext = () => {
    setTrackIndex((currentTrack) =>
      currentTrack < playlist.length - 1 ? currentTrack + 1 : 0
    );
  };
  const handleEnd = () => {
    setTrackIndex((currentTrack) =>
      currentTrack < playlist.length - 1 ? currentTrack + 1 : 0
    );
  };
  const saveLocal = (currentTime, scr) => {
    console.log(parseInt(currentTime), "ashdghas", scr);
  };
  const buttonRef = useRef(null);
  useEffect(() => {
    buttonRef.current.audio.current.playbackRate = speed;
  }, [buttonRef, speed]);

  const ListAudio = playlist.map((value, index) => {
    return (
      <div
        key={"audio-" + index}
        className={`audio ${currentTrack === index ? "active" : ""}`}
      >
        Tập {index + 1}
      </div>
    );
  });
  const loaded = (cur) => {
    buttonRef.current.audio.current.playbackRate = speed;
  };

  const ll = (
    <AudioPlayer
      header={<h3 style={{ textAlign: "center" }}>{props.audio.title}</h3>}
      src={playlist[currentTrack]}
      showSkipControls
      customAdditionalControls={[]}
      customVolumeControls={[]}
      onLoadedData={loaded}
      progressJumpSteps={{ backward: 10000, forward: 10000 }}
      showDownloadProgress
      onClickNext={handleClickNext}
      onClickPrevious={handleClickPrevious}
      onEnded={handleEnd}
      footer={
        <>
          <input
            type="range"
            min="0.1"
            max="5"
            step={0.1}
            value={speed}
            onChange={(e) => setSpeed(e.target.value)}
            style={{ width: "90%" }}
          />
          <span> {speed}x</span>
        </>
      }
      ref={buttonRef}
      onListen={(ec) => saveLocal(ec.target.currentTime, ec.target.currentSrc)}
    />
  );

  return (
    <div className="d-flex res justify-content-center align-items-center ">
      <div className="AudioPlay col-12 col-sm-7 col-md-6 rounded-3 shadow-lg bg-body ">
        <div className="list">
          {ll}
          <PerfectScrollbar>
            <Container>
              <Row className="justify-content-md-center">
                <div className="lisAudio">{ListAudio}</div>
              </Row>
            </Container>
          </PerfectScrollbar>
        </div>
      </div>
    </div>
  );
};

export default AudioPlay;
