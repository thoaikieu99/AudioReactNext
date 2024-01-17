import { useEffect, useRef, useState } from "react";
import "./AudioPlay.scss";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { Container, Row } from "react-bootstrap";
import { useCookies } from "react-cookie";

const AudioPlay = (props) => {
  const STARTTIME = "startime-" + props.audio.id;
  const SPEED = "startspeed-" + props.audio.id;
  const INDEXAU = "track-" + props.audio.id;
  const MAXAGE = 7 * 24 * 3600;

  const [cookies, setCookie] = useCookies();
  const playlist = props.audio.link_audio.split("<br>");

  const [covertTime, setCovertTime] = useState();
  //setData cookies
  const [cookieTime, setCookieTime] = useState();
  const [cookieIndex, setCookieIndex] = useState();
  const [cookieSpeed, setCookieSpeed] = useState();
  const [isclick, setIsclick] = useState(false);

  //data hien tai
  const [speed, setSpeed] = useState(1);
  const [checkCook, setCheckCook] = useState(false);
  const [currentTrack, setTrackIndex] = useState(0);
  const buttonRef = useRef(null);

  useEffect(() => {
    setCookieIndex(cookies[INDEXAU]);
    setCookieTime(cookies[STARTTIME]);
    setCookieSpeed(cookies[SPEED]);
    if (cookies[STARTTIME]) {
      setCheckCook(true);
      const coverTime = (totalSeconds) => {
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = totalSeconds % 60;
        let time = `${hours < 10 ? "0" + hours : hours}:${
          minutes < 10 ? "0" + minutes : minutes
        }:${seconds < 10 ? "0" + seconds : seconds}`;
        return time;
      };
      setCovertTime(coverTime(cookies[STARTTIME]));
    }
  }, []);

  useEffect(() => {
    buttonRef.current.audio.current.playbackRate = speed;
  }, [buttonRef, speed]);

  useEffect(() => {
    const collection = document.getElementsByClassName("audio active");
    collection[0].scrollIntoView(false);
  }, [currentTrack]);

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
    let time = parseInt(currentTime);
    setCookie(STARTTIME, time, { maxAge: MAXAGE });
    setCookie(SPEED, speed, { maxAge: MAXAGE });
    setCookie(INDEXAU, currentTrack, { maxAge: MAXAGE });
  };

  const hangeClick = (ev) => {
    let id = parseInt(ev.target.id);
    setTrackIndex(id);
  };
  let ListAudio = playlist.map((value, index) => {
    return (
      <div
        key={"audio-" + index}
        id={index}
        className={`audio ${currentTrack === index ? "active" : ""}`}
        onClick={hangeClick}
      >
        Tập {index + 1}
      </div>
    );
  });

  const loaded = () => {
    let audio = buttonRef?.current?.audio?.current;
    if (audio) {
      audio.playbackRate = speed;
      if (isclick) {
        setIsclick(true);
        audio.currentTime = parseInt(cookieTime);
        audio?.play();
      }
    }
  };

  const ngheTiepClick = () => {
    setIsclick(true);
    setTrackIndex(cookieIndex);
    setSpeed(cookieSpeed);
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
            style={{ width: "calc(100% - 36px)" }}
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
          <div
            className="ngheTiep"
            style={checkCook ? { display: "block" } : { display: "none" }}
          >
            <span className="tii" onClick={ngheTiepClick}>
              Nghe Tiếp {covertTime}
            </span>
          </div>
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
