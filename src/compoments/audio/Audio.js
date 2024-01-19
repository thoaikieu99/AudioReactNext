import { NavLink } from "react-router-dom";
import "./Audio.scss";
const Audio = (props) => {
  var element = document.createElement("div");
  element.innerHTML = props.content;

  return (
    <NavLink to={`/nghe-truyen/${props.slug}`} title={element.textContent}>
      <img src={`/rez/${props.image}`} alt={props.title} loading="lazy" />
      <div className="divTile">
        <h6 itemProp="name">{props.title}</h6>
      </div>
      <span className="mlieps">
        TẬP<i>{props.sotap}</i>
      </span>
    </NavLink>
  );
};
export default Audio;
