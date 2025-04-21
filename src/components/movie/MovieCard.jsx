import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { RatingCircle } from "../../utils/RatingCircle";

import Img from "@components/image/Img";
const MovieCard = ({ movieCard }) => {
  const { id, title, poster_path, vote_average, release_date } = movieCard;
  const navigate = useNavigate();
  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-slate-400">
      <Img
        width="100%"
        height="300px"
        sizeOfLoader={20}
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        className="h-full w-full cursor-pointer rounded-lg object-cover transition-all duration-300 hover:scale-110"
        onClick={() => {
          navigate(`/movies/${id}`);
        }}
      />
      <div className="flex flex-col relative flex-1 px-3 py-2">
        <div className="absolute -top-0 -translate-y-1/2">
          <RatingCircle percent={Math.round(vote_average * 10)} />
        </div>
        <h3 className="mt-4 font-bold">{title}</h3>
        <div className="flex items-center justify-between mt-auto">
          <p className="text-slate-300">{release_date}</p>
        </div>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  isLoading: PropTypes.bool,
  mediaType: PropTypes.string,
  movieCard: PropTypes.object,
  movieType: PropTypes.string,
};
export default MovieCard;
