import MovieCard from "./MovieCard";
import PropTypes from "prop-types"
const RelatedMovie = ({ title, relatedMovie = [] }) => {
  return (
    <>
      {title && <h3 className="mb-5 text-[1.5vw] font-bold">{title}</h3>}
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-4 lg:grid-cols-6">
        {relatedMovie.length > 0 &&
          relatedMovie.map((e) => (
            <MovieCard key={crypto.randomUUID()} movieCard={e} />
          ))}
      </div>
    </>
  );
};

RelatedMovie.propTypes = {
  title: PropTypes.string,
  relatedMovie: PropTypes.array
}
export default RelatedMovie;
