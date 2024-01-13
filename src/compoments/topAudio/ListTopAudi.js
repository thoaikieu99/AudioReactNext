import TopAudio from "./TopAudio";
import "./ListTopAudi.scss";

const ListTopAudio = (props) => {
  const ListAudio = props.listTop?.data.map((value, index) => {
    let audio = value.Audio;
    return (
      <li className="aaa" key={index}>
        <TopAudio
          title={audio.title}
          slug={audio.slug}
          image={audio.image}
          sotap={audio.sotap}
        />
      </li>
    );
  });

  return (
    <div className="ListTopAudi">
      <ul className="ultop">{ListAudio}</ul>
    </div>
  );
};
export default ListTopAudio;
