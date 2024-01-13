import { NavLink } from "react-router-dom";
import "./TopAudio.scss";
const TopAudio = (props) => {
  return (
    <div className="TopAudio">
      <NavLink
        to={`nghe-truyen/${props.slug}`}
        title={props.title}
        className="thumb"
      >
        <img alt={props.title} src={`/image/${props.image}`} />
      </NavLink>

      <h3 className="title">
        <NavLink to={`nghe-truyen/${props.slug}`} title={props.title}>
          {props.title}
        </NavLink>
      </h3>
      <p className="chapter">
        <NavLink to={`nghe-truyen/${props.slug}`} title={props.title}>
          {props.title}
        </NavLink>
      </p>
    </div>
  );
};
export default TopAudio;
