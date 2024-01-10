import "./TopAudio.scss";
const TopAudio = (props) => {
  return (
    <div className="TopAudio">
      <a
        className="thumb"
        title={props.title}
        href="https://nettruyentr.com/truyen-tranh/cuoc-song-thuong-ngay/chapter-105/1164151"
      >
        <img
          alt={props.title}
          src="https://nettruyentr.com/images/comics/cuoc-song-thuong-ngay.jpg"
        />
      </a>
      <h3 className="title">
        <a href="https://nettruyentr.com/truyen-tranh/cuoc-song-thuong-ngay/chapter-105/1164151">
          {props.title}
        </a>
      </h3>
      <p className="chapter">
        <a href="https://nettruyentr.com/truyen-tranh/cuoc-song-thuong-ngay/chapter-105/1164151">
          {props.sotap} <i className="fa fa-angle-right"></i>
        </a>
      </p>
    </div>
  );
};
export default TopAudio;
