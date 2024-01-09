import "./Audio.scss";
const TopAudio = (props) => {
  const ss = `abbc.com/${props.slug}`;
  return (
    <a href={ss} title={props.title}>
      <img src="dai-quan-gia-la-ma-hoang.jpg" alt={props.title} />
      <div className="divTile">
        <h6 itemProp="name">{props.title}</h6>
      </div>
    </a>
  );
};
export default TopAudio;
