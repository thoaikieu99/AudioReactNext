import Audio from "./Audio";
import "./list.scss";

const ListAudio = (props) => {
  const ListAudio = props.onList.map((value) => {
    return (
      <div
        className="col-6 col-xs-4 col-sm-3 col-md-2 cardAudio"
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
{
  /* <div class="row">
        <div class="col-6 col-xs-4 col-sm-3 col-md-2 cardAudio">
          <Audio />
        </div>
        <div class="col-6 col-xs-4 col-sm-3 col-md-2 cardAudio">
          <Audio />
        </div>
        <div class="col-6 col-xs-4 col-sm-3 col-md-2 cardAudio">
          <Audio />
        </div>
        <div class="col-6 col-xs-4 col-sm-3 col-md-2 cardAudio">
          <Audio />
        </div>
        <div class="col-6 col-xs-4 col-sm-3 col-md-2 cardAudio">
          <Audio />
        </div>
        <div class="col-6 col-xs-4 col-sm-3 col-md-2 cardAudio">
          <Audio />
        </div>
      </div> */
}
