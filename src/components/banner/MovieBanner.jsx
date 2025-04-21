import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useAppContext from "@/context/AppProvider";

const MovieBanner = ({ setActiveID, movie = {} }) => {
  const { id, title, backdrop_path, overview, release_date } = movie;
  const { setShowModal } = useAppContext();
  const navigate = useNavigate();
  return (
    <div
      className="relative h-full w-full bg-cover bg-center"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop_path})`,
      }}
    >
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)]">
        <div className="absolute bottom-[5%] ml-10 w-[40%] text-white">
          <h3 className="mb-2 font-bold sm:text-[2vw]">{title}</h3>
          <p className="text-[1.2vw]">{release_date}</p>
          <div className="mt-4 text-[1.2vw]">
            <h2 className="mb-2 font-bold">Overview</h2>
            <p>{overview}</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <button
              onClick={() => {
                setActiveID(id);
                setShowModal(true);
              }}
              className="w-[100px] cursor-pointer rounded-lg bg-slate-400 py-2"
            >
              <FontAwesomeIcon icon={faPlay} />
              <span className="ml-2">Trailer</span>
            </button>
            <button
              onClick={() => {
                navigate(`/movie/${id}`, { state: "movie" });
              }}
              className="w-[100px] cursor-pointer rounded-lg border border-slate-400 py-2"
            >
              View detail
            </button>
          </div>
        </div>
      </div>
      {/* <div className="absolute top-10 ml-10 w-[40%] text-white">
        <h3 className="mb-2 font-bold sm:text-[2vw]">{title}</h3>
        <p className="text-[1.2vw]">{release_date}</p>
        <div className="mt-4 text-[1.2vw]">
          <h2 className="mb-2 font-bold">Overview</h2>
          <p>{overview}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <button
            onClick={() => {
              setActiveID(id);
              setShowModal(true);
            }}
            className="w-[100px] cursor-pointer rounded-lg bg-slate-400 py-2"
          >
            <FontAwesomeIcon icon={faPlay} />
            <span className="ml-2">Trailer</span>
          </button>
          <button
            onClick={() => {
              navigate(`/movie/${id}`, { state: "movie" });
            }}
            className="w-[100px] cursor-pointer rounded-lg border border-slate-400 py-2"
          >
            View detail
          </button>
        </div>
      </div> */}
    </div>
  );
};

MovieBanner.propTypes = {
  movie: PropTypes.object,
  setActiveID: PropTypes.func
};
export default MovieBanner;
