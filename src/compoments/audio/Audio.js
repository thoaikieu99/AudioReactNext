import { NavLink } from "react-router-dom";
import "./Audio.scss";
const Audio = (props) => {
  return (
    <NavLink to={`/nghe-truyen/${props.slug}`} title={props.title}>
      <img src={`/image/${props.image}`} alt={props.title} />
      <div className="divTile">
        <h6 itemProp="name">{props.title}</h6>
      </div>
    </NavLink>
  );
};
export default Audio;
