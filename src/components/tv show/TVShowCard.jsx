import "/node_modules/flag-icons/css/flag-icons.min.css";
import { RatingCircle } from "@/utils/RatingCircle";
import Img from "@components/image/Img";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types"
const TVShowCard = ({ tvShowCard = {} }) => {
  const {
    id,
    name,
    poster_path,
    vote_average,
    first_air_date,
    origin_country,
  } = tvShowCard;
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
          navigate(`/tv-shows/${id}`);
        }}
      />
      <div className="relative flex flex-1 flex-col px-3 py-2">
        <div className="absolute -top-0 -translate-y-1/2">
          <RatingCircle percent={Math.round(vote_average * 10)} />
        </div>
        <h3 className="mt-4 font-bold">{name}</h3>
        <div className="flex items-center justify-between mt-auto">
          <p className="text-slate-300">{first_air_date}</p>
          <span
            className={`fi fi-${origin_country?.[0].toLowerCase()} rounded-sm`}
          ></span>
        </div>
      </div>
    </div>
  );
};

TVShowCard.propTypes = {
  tvShowCard: PropTypes.object
}
export default TVShowCard;
