import PropTypes from "prop-types"
import TVShowCard from "./TVShowCard";
const RelatedTvShow = ({ relatedTvShow = [], title }) => {
  return (
    <>
      {title && <h3 className="mb-5 text-[1.5vw] font-bold">{title}</h3>}
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-4 lg:grid-cols-6">
        {relatedTvShow.length > 0 &&
          relatedTvShow.map((e) => (
            <TVShowCard key={crypto.randomUUID()} tvShowCard={e} />
          ))}
      </div>
    </>
  );
};
RelatedTvShow.propTypes = {
  title: PropTypes.string,
  relatedTvShow: PropTypes.array
}
export default RelatedTvShow;
