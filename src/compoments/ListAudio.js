import Audio from "./Audio";
import "./list.scss";

const ListAudio = (props) => {
  const ListAudio = props.onList.map((value) => {
    return (
      <div
        className="col-6 col-xs-4 col-sm-3 col-lg-2 col-md-3 cardAudio"
        key={value.id}
      >
        <Audio slug={value.slug} title={value.title} />
      </div>
    );
  });

  return (
    <>
      <div className="row">{ListAudio}</div>
    </>
  );
};
export default ListAudio;
