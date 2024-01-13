import Audio from "./Audio";
import "./ListAudio.scss";

const ListAudio = (props) => {
  const ListAudio = props?.onList?.map((value, index) => {
    return (
      <div
        className="col-6 col-xs-4 col-sm-3 col-lg-2 col-md-3 cardAudio"
        key={`audio-${index}`}
      >
        <Audio slug={value.slug} image={`${value.image}`} title={value.title} />
      </div>
    );
  });

  return (
    <div className="ListAudio">
      <div className="row">{ListAudio}</div>
    </div>
  );
};
export default ListAudio;
