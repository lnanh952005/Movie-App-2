import PropTypes from "prop-types"
import TVShowCard from "@components/tv show/TVShowCard";
import MovieCard from "../movie/MovieCard";

const RelatedMedia = ({ relatedMovie = [], mediaType, title }) => {
  return (
    <>
      {title && <h3 className="mb-5 text-[1.5vw] font-bold">{title}</h3>}
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-4 lg:grid-cols-6">
        {mediaType == "movie" && relatedMovie.length > 0
          ? relatedMovie.map((e) => (
              <MovieCard key={crypto.randomUUID()} movieCard={e} />
            ))
          : relatedMovie.map((e) => (
              <TVShowCard key={crypto.randomUUID()} tvShowCard={e} />
            ))}
      </div>
    </>
  );
};

RelatedMedia.propTypes = {
  relatedMovie: PropTypes.array,
  mediaType: PropTypes.string,
  title: PropTypes.string
}

export default RelatedMedia;
